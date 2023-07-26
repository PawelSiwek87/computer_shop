import React, { useState } from 'react';
import Modal from 'react-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useStateContext } from '../../context/StateContext';
import { client } from '../../lib/client';

const AccountActivation = ({ modalMessage, newLogin }) => {

    function onModalClose() {
        setIsModal(false);
        window.location.href = '/';
    }


    const [isModal, setIsModal] = useState(true);
    const { userLogin, setUserLogin } = useStateContext();
    //const [modalMessage, setModalMessage] = useState('Coś poszło nie tak.');

    if(newLogin && newLogin != ''){
    setUserLogin(newLogin);

    try {
        AsyncStorage.setItem('login', newLogin);
        //console.log('Login ' + newLogin + ' został zapisany w AsyncStorage.');
    } catch (error) {
        console.log('Wystąpił błąd podczas zapisywania loginu:', error);
    }

    }

    const customStyles = {
        content: {
            width: '550px',
            height: '300px',
            margin: 'auto',
            padding: '80px',
        },
    };

    return (
        <div>
            <Modal
                isOpen={isModal}
                style={customStyles}
                onClose={() => setIsModal(false)}
                ariaHideApp={false}
            >

                <h3>{modalMessage}</h3>
                <button class='btn' onClick={onModalClose}>Zamknij</button>
            </Modal>

        </div>
    )
}

export const getStaticPaths = async () => {

    const query = `*[_type == "product"] {
        slug {
          current
        }
      }
      `;

    const products = [];

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    //console.log("Ściągam: " + slug);

    //const {userLogin, setUserLogin} = useStateContext();
    //const [username, setUsername] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    let newLogin = '';
    let modalMessage = ''; 
    const jwt = require('jsonwebtoken'); //test
    //jwt.sign({data}, "pablo", {expiresIn: '20m'});
    const resToken = slug;
    jwt.verify(resToken, process.env.JWT_PRIVATE_KEY, async function (err, decodedToken) {
        if (err) console.log(err)

        modalMessage = !decodedToken ? "Coś poszło nie tak. Spróbuj ponownie" : "Konto aktywowano";

        newLogin = !decodedToken ? '' : decodedToken.email;

        if (decodedToken) {
            let newUser = {
                _type: "user",
                userName: decodedToken.name,
                email: decodedToken.email,
                password: decodedToken.password
            }
            //{name: username, email: email, password: password,  subject: 'Sklep internetowy - weryfikacja konta', message: 'Weryfikacja' }

            try {

                await client.create(newUser);
                //console.log('Zapisano w bazie loginu:', newUser);
            } catch (error) {
                //console.log('Wystąpił błąd podczas zapisywania loginu w bazie:', error);
            }
            //setUsername('');
            //setEmail('');
            //setPassword('');
            
        }

    }
    );




    /*
      let newUser = {
        _type: "user",
        userName: username,
        email: email,
        password: password
      }
      */

    //window.location.href = '/'

    return {
        props: {
            modalMessage, newLogin
        }
    };
}





    export default AccountActivation