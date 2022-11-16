import React from 'react';

import './style/app.scss';
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";
import Main from "./components/main/Main";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="containerApp">
                <Navigation/>
                <Main/>
                <Gallery/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
