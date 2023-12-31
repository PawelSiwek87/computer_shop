import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStateContext } from "../context/StateContext";

const Layout = ({ children }) => {
  const { userLogin } = useStateContext();
  return (
    <div className="layout">
      <Head>
        <title>Sklep komputerowy</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
