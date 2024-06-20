import React from "react";
import CopyRights from "./components/CopyRights";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Easybank from "./components/EasyBank";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import HeaderMobile from "./components/HeaderMobile";
import Menu from "./components/Menu";

var currentWidth = window.innerWidth
var mobile = false
if (currentWidth <= 768) {
  mobile = true
} else {
  mobile = false
}


function App() {
  const [menu, setMenu] = React.useState(false)

  return (
    <div className="main">
      {mobile ? 
      <HeaderMobile menu={menu} setMenu={setMenu}/> 
      : <Header />}

      {menu ?
      <Menu /> 
      : null}

      <Intro />
      <Easybank />
      <Features />
      <Articles />
      <Footer />
      <CopyRights />
    </div>
  );
}

export default App;
