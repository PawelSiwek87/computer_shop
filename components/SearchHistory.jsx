import React, { useRef } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { client } from '../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { Product, FooterBanner, HeroBanner } from '../components';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

const SearchHistory = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, 
	onRemove, userLogin , showHistory, setShowHistory, purchasedProduct, userHistoryCartItems } = useStateContext();

  //console.log("purchasedProduct w search history");

    //console.log(purchasedProduct);


  //console.log("cartItems w search history");

  //console.log("cartItems w search history");

  //console.log(cartItems);

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowHistory(false)}>
          <AiOutlineLeft />
          <span className="heading">Kupione produkty</span>
        </button>

        {/*<div className="products-container">
      {purchasedProduct?.map((product) => <Product key={product._id} product={product} />)}
  </div> */}



        {userHistoryCartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Brak zakupionych produktów</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="btn"
              >
                Kontynuuj zakupy
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {userHistoryCartItems.length >= 1 && userHistoryCartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.price}zł</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  
				  <span className="num" onClick="">x {item.quantity}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}

{/*   dodać odpowiednią metodę i dołączyć ją do argumentu const SearchHistory lub sposób przez map

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}
*/}




export default SearchHistory