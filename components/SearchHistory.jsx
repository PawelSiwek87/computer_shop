import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const SearchHistory = () => {
  const cartRef = useRef();
  const { setShowHistory, userHistoryCartItems } = useStateContext();

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowHistory(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Kupione produkty</span>
        </button>

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
          {userHistoryCartItems.length >= 1 &&
            userHistoryCartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price}zł</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <span className="num">x {item.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchHistory;
