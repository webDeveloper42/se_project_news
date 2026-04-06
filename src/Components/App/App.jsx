import { useState } from "react";
import "./App.css";
import Page from "../Page/Page";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Footer />
    </Page>
  );
}

export default App;
