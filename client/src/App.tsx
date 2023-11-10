import React from 'react';
import './App.scss';
import {Footer} from "./pages/Footer";
import {Header} from "./pages/Header";
import {Main} from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    const url: string = window.location.pathname;
    return (
        <div className="App">
            <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path={url} element={<Main url={url} />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    );
}

export default App;
