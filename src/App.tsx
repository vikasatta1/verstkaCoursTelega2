import React from 'react';

import './style/app.scss';
import Header from "./components/header/Header";
import Navigation from "./components/nav/Navigation";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
        </div>
    );
}

export default App;
