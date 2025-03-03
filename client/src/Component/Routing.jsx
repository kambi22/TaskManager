import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";
import NavbarComponent from "./Navbar";
import About from "./About";

const Routing = (props) => {
    return (
        <div>
            <BrowserRouter>
            <NavbarComponent/>
                <Routes>
                    <Route path="/" element={<AddTask />} />
                    <Route path="/view" element={<ViewTask />} />
                    <Route path="/about" element={<About />} />
                </Routes></BrowserRouter>
        </div>
    )
};

export default Routing;
