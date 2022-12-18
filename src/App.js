import React from "react";
import Header from "./components/header";
import Content from "./components/container";
import Footer from "./components/footer";
import Image from "./components/image";
import style from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <Image />
      <Content />
      <Footer />
    </>
  );
}

export default App;
