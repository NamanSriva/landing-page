import React from "react";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <HeroSection />
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </>
    );
};

export default App;
