import React, { useEffect } from 'react';
import Hero from './Components/NavBar/Hero/Hero';
import Programs from './Components/NavBar/Programs/Programs';
import Title from './Components/Title/Title';
import hospitalLogo from "../src/assets/Logo.png";
import Footer from './Components/Footer/Footer';
import ChatBot from './Components/ChatBot/ChatBot';
import Events from './Components/Events/Events';
import NavBar from './Components/NavBar/NavBar';

function App () {
  useEffect(() => {
    document.title = "Recuenco General Hospital"
    const favicon = document.querySelector("link[rel='icon']") || document.createElement("link")
    favicon.rel = "icon"
    favicon.type = "image/png"
    favicon.href = hospitalLogo;
    document.head.appendChild(favicon);
  }, []);
  const scrollToAbout = () => {
   document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  };
  return (
    <div>
      <NavBar/>
       <Hero onScroll={scrollToAbout}/>
      <div className="container">
        <Title title='OUR SERVICES'/>
        <Programs/>
        <Events/>
        <ChatBot/>
        <Footer/>
        </div>
    </div>
  );
};

export default App