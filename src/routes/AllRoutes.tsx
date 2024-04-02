import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import MenuPage from "../pages/Home";
import MenuPage2 from "../pages/Home";



const AllRoutes = () => {
const [loading, setLoading] = useState(true);
useEffect(()=>{

},[])
    
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={  <MenuPage /> } />
                    <Route path="/qrcode" element={<MenuPage2 />} />
                </Routes>
        </BrowserRouter>
    );
};
export default AllRoutes;