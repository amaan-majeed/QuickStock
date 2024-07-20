import React from 'react';
import SideBar from '../components/SideBar';
import Navbar from '../components/Navbar';
import ProductAdd from '../components/ProductAdd';


export default function AddProduct() {
    return (
      <>
        <Navbar />
        <SideBar/>
        <ProductAdd/>
      </>
    );
}
