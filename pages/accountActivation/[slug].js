import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Modal from "react-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ products, productsSearch, newLogin, modalMessage }) => {
  const { selectedCategory, fromPrice, toPrice, collapsibleSearchProductName } =
    useStateContext();
    
  const [isModal, setIsModal] = useState(true);

    function onModalClose() {
      setIsModal(false);
      window.location.href = "/";
    }

    const customStyles = {
      content: {
        width: "550px",
        height: "300px",
        margin: "auto",
        padding: "80px",
      },
    };

    if (newLogin && newLogin != "") {
      //setUserLogin(newLogin);
      const settingTest = async () =>{
      try {
        await AsyncStorage.setItem("login", newLogin);
        //console.log('Login ' + newLogin + ' został zapisany w AsyncStorage.');

      } catch (error) {
        console.log("Wystąpił błąd podczas zapisywania loginu:", error);
      }

    }
    settingTest();
    }


  return (
    <div>
      <div className="maylike-products-wrapper">
        <h2>Sprawdź też: </h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModal}
        style={customStyles}
        onClose={() => setIsModal(false)}
        ariaHideApp={false}
      >
        <h3>{modalMessage}</h3>
        <button class="btn" onClick={onModalClose}>
          Zamknij
        </button>
      </Modal>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // do wyczyszczenia:
  //const productsSearchQuery = `*[_type == "product" && name match '${slug}']`

  const productsSearchQuery = `*[_type == "product"]`; //test

  const productsSearch = await client.fetch(productsSearchQuery);

  const productsQuery = `*[_type == "product"]`;

  const products = await client.fetch(productsQuery);


let newLogin = "";
  let modalMessage = ""; 
  
  const jwt = require("jsonwebtoken");
  //jwt.sign({data}, "pablo", {expiresIn: '20m'});
  const resToken = await slug;
  await jwt.verify(
    resToken,
    process.env.JWT_PRIVATE_KEY,
    async function (err, decodedToken) {
      if (err) console.log(err);

      modalMessage = !decodedToken
        ? "Coś poszło nie tak. Spróbuj ponownie"
        : "Konto aktywowano";

      newLogin = !decodedToken ? "" : decodedToken.email;

      if (decodedToken) {
        let newUser = {
          _type: "user",
          userName: decodedToken.name,
          email: decodedToken.email,
          password: decodedToken.password,
        };
        //{name: username, email: email, password: password,  subject: 'Sklep internetowy - weryfikacja konta', message: 'Weryfikacja' }

        try {
          await client.create(newUser);
          //console.log('Zapisano w bazie loginu:', newUser);
        } catch (error) {
          console.log(
            "Wystąpił błąd podczas zapisywania loginu w bazie:",
            error
          );
        }
      }
    }
  );




  return {
    props: { products, productsSearch, newLogin, modalMessage },
  };
};

export default ProductDetails;
