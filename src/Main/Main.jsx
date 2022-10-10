import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import "./Main.css" ;
const Main = ({totalQuantity , grandTotal}) => {
    return (
        <div>
            <Navbar totalQuantity={totalQuantity} grandTotal={grandTotal}></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;