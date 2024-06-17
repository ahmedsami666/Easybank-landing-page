import React from "react";
import CopyRights from "./components/CopyRights";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Easybank from "./components/EasyBank";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


/**
      

      <Articles />
      <Footer />
      <CopyRights />
 */
function App() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <Easybank />
      <Features />
    </div>
  );
}

export default App;
