import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const dynamicDetails = () => {
    let htmlString = "";
    
    const detailsArray = {details}.details.split("/");
    //console.log(detailsArray);

      for (let i = 0; i < detailsArray.length; i++) {
        //const element = array[index];
        let record = detailsArray[i].trim();

        if(record != '') htmlString += "<p>" + record + "</p>";

        if(index > 20) {
          console.log("Błąd dynamicznego podziału opisu");
          break;
        }
      }

      //console.log(htmlString);

      return htmlString;
  }

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Opis: </h4>
          {/*<p>{details}</p>*/}

          <div dangerouslySetInnerHTML={{__html: dynamicDetails() }} />

          <p className="price">{price}zł</p>
          <div className="quantity">
            <h3>Ilość:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Dodaj do koszyka</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Kup teraz</button>
          </div>
        </div>
      </div>

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

  const products = await client.fetch(query);

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

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails