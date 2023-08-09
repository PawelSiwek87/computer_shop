import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { client } from "../lib/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [collapsibleSearchProductName, setCollapsibleSearchProductName] =
    useState("");
  const [userHistoryCartItems, setUserHistoryCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [userLogin, setUserLogin] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  {
    /* do edycja w useStateContext  */
  }
  const [fromPrice, setFromPrice] = useState(null);
  {
    /* do edycja w useStateContext  */
  }
  const [toPrice, setToPrice] = useState(null);
  {
    /* do edycja w useStateContext  */
  }

  let foundProduct;
  let index;

  const onShowHistory = (userLogin) => {
    setShowHistory(true);
    getServerSideProps(userLogin);
  };

  const getLoginFromStorage = async () => {
    try {
      const login = AsyncStorage.getItem("login");
      login.then(function (result) {
        if (result) setUserLogin(result);
        //console.log('Wczytany login z AsyncStorage getLoginFromStorage:', result);
      });
    } catch (error) {
      console.log("Wystąpił błąd podczas wczytywania loginu:", error);
    }
  };

  const setCartItemsToStorage = async (cartItems) => {
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));

      //console.log('Produkty zapisane w AsyncStorage.', cartItems);
    } catch (error) {
      console.log("Wystąpił błąd podczas zapisywania produktów:", error);
    }
  };

  const getCartItemsFromStorage = async () => {
    //AsyncStorage.setItem('cartItems', []);//!! usunąć test
    try {
      const carts = await AsyncStorage.getItem("cartItems");

      if (carts) {
        const cartsVal = JSON.parse(carts);
        //console.log('Wczytano produkty z AsyncStorage:', carts);
        setCartItems(cartsVal);
        //setTotalQuantities(cartsVal.length);
        let totalPriceSum = 0;
        let totalQuantity = 0;
        for (let i = 0; i < cartsVal.length; i++) {
          totalPriceSum += cartsVal[i].price * cartsVal[i].quantity;
          totalQuantity += cartsVal[i].quantity;
        }
        setTotalQuantities(totalQuantity);
        setTotalPrice(totalPriceSum);
      }
    } catch (error) {
      console.log("Wystąpił błąd podczas wczytywania produktów:", error);
    }
  };

  const getServerSideProps = async () => {
    await getLoginFromStorage();
    const purchasedProductQuery = `*[_type == "purchasedProduct" && userOwner == '${userLogin}']`;

    const purchasedProduct = await client.fetch(purchasedProductQuery);

    setUserHistoryCartItems(purchasedProduct);
  };

  useEffect(() => {
    getLoginFromStorage();
    getCartItemsFromStorage();
    getServerSideProps();
  }, []);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      setCartItemsToStorage(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
      setCartItemsToStorage([...cartItems, { ...product }]);
    }

    toast.success(`${qty} ${product.name} dodano do koszyka.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
    setCartItemsToStorage(newCartItems);
  };

  const toggleCartItemQuanitity = async (id, value) => {
    let otherCartItems = cartItems.filter((item) => item._id !== id); //produkty poza zmienioną
    foundProduct = cartItems.find((item) => item._id === id); //zmieniany element
    index = cartItems.findIndex((product) => product._id === id);

    if (value === "inc") {
      cartItems[index].quantity++;
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        cartItems[index].quantity--;
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
    setCartItems(cartItems);
    setCartItemsToStorage(cartItems);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        userLogin,
        setUserLogin,
        showHistory,
        setShowHistory,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        setUserHistoryCartItems,
        userHistoryCartItems,
        onShowHistory,
        getCartItemsFromStorage,
        collapsibleSearchProductName,
        setCollapsibleSearchProductName,
        selectedCategory,
        setSelectedCategory,
        fromPrice,
        setFromPrice,
        toPrice,
        setToPrice
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
