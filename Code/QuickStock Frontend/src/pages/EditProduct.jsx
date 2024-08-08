import React from 'react'
import ProductEdit from '../components/ProductEdit'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

export default function EditProduct() {
  return (
    <>
        <Navbar />  
        <SideBar/>
        <ProductEdit/>
    </>
  )
}
