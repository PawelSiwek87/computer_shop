import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import {client } from '../lib/client';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Success = () => {
  const {cartItems, setCartItems, setTotalPrice, setTotalQuantities, userLogin, getCartItemsFromStorage } = useStateContext();

 //console.log('Zapisano w bazie purchasedProduct:', JSON.stringify( purchasedProduct));
 /*
 const purchasedProduct = cartItems.map((cartItems) => { //test
  return { //if(cartProduct._id === product._id)
   //...cartProduct,
   category: cartItems.category,
   details: cartItems.details,
   name: cartItems.name,
   quantity: cartItems.quantity,
   price: cartItems.price,
   image: cartItems.image,
   _type: "purchasedProduct",
   userOwner: userLogin
 }
});
*/
/*
const productsToPurchased = () => cartItems.map((cartItems) => { //test
  return { //if(cartProduct._id === product._id)
   //...cartProduct,
   category: cartItems.category,
   details: cartItems.details,
   name: cartItems.name,
   quantity: cartItems.quantity,
   price: cartItems.price,
   image: cartItems.image,
   _type: "purchasedProduct",
   userOwner: userLogin
 }
});
*/

const productsToPurchased = (crtIt, userLog) => crtIt.map((cartItems) => { //test
  return { //if(cartProduct._id === product._id)
   //...cartProduct,
   category: cartItems.category,
   details: cartItems.details,
   name: cartItems.name,
   quantity: cartItems.quantity,
   price: cartItems.price,
   image: cartItems.image,
   _type: "purchasedProduct",
   userOwner: userLog
 }
});

const setPurchasedProduct = async (productsToPurchased) => {
      try { 
        client.create(   productsToPurchased[0] );
        await AsyncStorage.setItem('cartItems', []);
        setTotalPrice(0);
      setTotalQuantities(0);
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
        
        //console.log('Zapisano w bazie purchasedProduct:', productsToPurchased  );
      } catch (error) {
        console.log('Wystąpił błąd podczas zapisywania purchasedProduct w bazie:', error);
      }


}
  useEffect(() => {
    //localStorage.clear();
const onSuccessAction = async () =>{
  //const carts = await getCartItemsFromStorage;
  //await getCartItemsFromStorage();
  const carts = await AsyncStorage.getItem('cartItems');

	if(carts) {const cartsVal = JSON.parse(carts);

  const login = AsyncStorage.getItem('login');
	login.then(function(result) {
		if(result) {
      let prod = productsToPurchased(cartsVal, result);

      setPurchasedProduct(prod);  }
		});	
  }
}
onSuccessAction();
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Zam{'\u00F3'}wienie z{'\u0142'}o{'\u017C'}one!</h2>
        <p className="description">
          Kontakt:
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Kontynuuj zakupy
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success