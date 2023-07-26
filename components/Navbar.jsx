import React, { useState, useEffect } from "react";
import Link from "next/link";
import Collapsible from 'react-collapsible';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  AiFillCaretRight,
  AiFillCaretDown
} from "react-icons/ai";
import { Cart, SearchHistory } from "./";
//import { Product, FooterBanner, HeroBanner } from '../components';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStateContext } from "../context/StateContext";

const Navbar = ({}) => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    userLogin,
    setUserLogin,
    showHistory,
    setShowHistory,
    onShowHistory,
    selectedCategory,
    setSelectedCategory,
    fromPrice,
    setFromPrice,
    toPrice,
    setToPrice
  } = useStateContext();

  const [message, setMessage] = useState("");

{/*
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [fromPrice, setFromPrice] = useState(null); 
  const [toPrice, setToPrice] = useState(null);  do edycja w useStateContext  */}

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const fromPriceHandleChange = (event) => {
    setFromPrice(event.target.value);
  };

  const toPriceHandleChange = (event) => {
    setToPrice(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();

    <Link href={`/search/${message}`}></Link>;
  };

  const handleOnLogOut = (event) => {
    event.preventDefault();

    window.location.href = "/";

    try {
      AsyncStorage.setItem("login", "");
      setUserLogin(null);

      //console.log("Login został zapisany w AsyncStorage.");
    } catch (error) {
      //console.log("Wystąpił błąd podczas zapisywania loginu:", error);
    }
  };

  return (
    <div className="navbar-container">
      <div class="dropdown">
        <button className="dropbtn">
          <AiOutlineMenu />
        </button>
        <div class="dropdown-content">
          <div class="header">
            <h2>Menu</h2>
          </div>
          <div class="row">
            <div class="column">
              <h3>Laptopy i tablety</h3>
              <a href={`/categories/Laptopy biznesowe`}>Laptopy biznesowe</a>
              <a href={`/categories/Laptopy do gier`}>Laptopy do gier</a>
              <a href={`/categories/Tablety`}>Tablety</a>
            </div>
            <div class="column">
              <h3>Komputery stacjonarne</h3>
              <a href={`/categories/Komputery do firm`}>Komputery do firm</a>
              <a href={`/categories/Komputery dla gracza`}>
                Komputery dla gracza
              </a>
              <a href={`/categories/Komputery Apple Mac`}>
                Komputery Apple Mac
              </a>
            </div>
            <div class="column">
              <h3>Podzespo{"\u0142"}y komputerowe</h3>
              <a href={`/categories/Twarde dyski`}>Twarde dyski</a>
              <a href={`/categories/Karty graficzne`}>Karty graficzne</a>
              <a href={`/categories/Procesory`}>Procesory</a>
              <a href={`/categories/Płyty główne`}>
                P{"\u0142"}yty g{"\u0142"}
                {"\u00F3"}wne
              </a>
              <a href={`/categories/Obudowy`}>Obudowy</a>
              <a href={`/categories/Pamięć RAM`}>
                Pami{"\u0119"}
                {"\u0107"} RAM
              </a>
            </div>
            <div class="column">
              <h3>Akcesoria</h3>
              <a href={`/categories/Kable i przejściówki`}>
                Kable i przej{"\u015B"}ci{"\u00F3"}wki
              </a>
              <a href={`/categories/Słuchawki`}>S{"\u0142"}uchawki</a>
              <a href={`/categories/Myszki`}>Myszki</a>
              <a href={`/categories/Klawiatury`}>Klawiatury</a>
              <a href={`/categories/Monitory`}>Monitory</a>
            </div>
            <div class="column">
              <h3>Gaming</h3>
              <a href={`/categories/Meble dla graczy`}>Meble dla graczy</a>
              <a href={`/categories/Komputery dla graczy`}>
                Komputery dla graczy
              </a>
              <a href={`/categories/Akcesoria dla graczy`}>
                Akcesoria dla graczy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*{<Search />}
	  
	  //<div className="searchBarz">
		//<input type="text" placeholder="Search..">
		//</div>
	  
	  
	  <input type="submit" value="Submit" />
	  */}
      <Collapsible className="collapsibleSearch"  
      trigger={<>Znajdź produkt:  <AiFillCaretRight/></>}
      triggerWhenOpen={<>Znajdź produkt:  <AiFillCaretDown/></>}>
      
      <div className="searchBar">
        <label>
          <input className="searchInput"
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Szukaj produktu..."
          />
        </label>
        <select className="selectCategoryOption" value={selectedCategory} onChange={handleSelectCategory}>
        <option value="">Wszystkie kategorie</option>
        <option value="Laptopy biznesowe">Laptopy biznesowe</option>
        <option value="Laptopy do gier">Laptopy do gier</option>
        <option value="Tablety">Tablety</option>
        <option value="Komputery do firm">Komputery do firm</option>
        <option value="Komputery dla gracza">Komputery dla gracza</option>
        <option value="Komputery Apple Mac">Komputery Apple Mac</option>
        <option value="Twarde dyski">Twarde dyski</option>
        <option value="Karty graficzne">Karty graficzne</option>
        <option value="Procesory">Procesory</option>
        <option value="Płyty główne">Płyty główne</option>
        <option value="Obudowy">Obudowy</option>
        <option value="Pamięć RAM">Pamięć RAM</option>
        <option value="Kable i przejściówki">Kable i przejściówki</option>
        <option value="Słuchawki">Słuchawki</option>
        <option value="Myszki">Myszki</option>
        <option value="Klawiatury">Klawiatury</option>
        <option value="Monitory">Monitory</option>
        <option value="Meble dla graczy">Meble dla graczy</option>
        <option value="Komputery dla graczy">Komputery dla graczy</option>
        <option value="Akcesoria dla graczy">Akcesoria dla graczy</option>
      </select>
      <Link  href={`/search/results`}>
          <AiOutlineSearch className="magnifier"/>
          </Link>

       {/* message  ? <Link  href={`/search/${message}`}>
          <AiOutlineSearch className="magnifier"/>
        </Link>
        : <Link  href={"javascript: void(0)"}>
          <AiOutlineSearch className="magnifier"/>
          </Link>
      */}
        
      </div>

      <div className="searchBar">
      Cena:&nbsp;&nbsp;
        <label>
          <input className="searchPrice"
            type="number"
            min="0"
            value={fromPrice}
            onChange={fromPriceHandleChange}
            placeholder=" Od..."
          />
        </label>
        &nbsp; - &nbsp;
        <label>
          <input className="searchPrice"
            type="number"
            min="0"
            value={toPrice}
            onChange={toPriceHandleChange}
            placeholder=" Do..."
          />
        </label>
        &nbsp; zł      
      </div>

      </Collapsible>

      <div className="navbar-options-section">
      {userLogin && <div className="user-login-header">{userLogin}</div>}
        <p className="logo">
          <Link href="/">
            <AiOutlineHome className="cart-icon" />
          </Link>
        </p>

        <div class="dropdown">
          <AiOutlineUser className="cart-icon" />
          <div class="dropdown-user">
            <div class="column-user">
              {userLogin && userLogin != "null" ? (
                <>                                  
                  <a class="btn" onClick={onShowHistory}>
                    Kupione
                  </a>
                  <a href="/" onClick={handleOnLogOut}>
                    Wyloguj
                  </a>
                </>
              ) : (
                <>
                  <a href="/login">Logowanie</a>{" "}
                  <a href="/registration">Rejestracja</a>{" "}
                </>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        

        {showCart && <Cart />}

        {showHistory && <SearchHistory />}

        {/*<div>{<><h4>{userLogin}</h4></>} </div> */}
        
      </div>
      
    </div>
  );
};

export default Navbar;
