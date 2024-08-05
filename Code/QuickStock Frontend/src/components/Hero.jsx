import { useSelector } from 'react-redux';
import DashboardTile from './DashboardTile';
import Table from './Table';
import React, { useEffect, useState } from 'react';
// import { CALC_STORE_VALUE, selectTotalStoreValue } from '../redux/features/product/productSlice';
import { selectIsLoggedIn } from '../redux/features/auth/authSlice';
import productService from '../redux/features/product/productService';

export default function Hero() {
  const [productsList, setProductsList] = useState([]);
  const isLoggedin = useSelector(selectIsLoggedIn);
  const [storeValue, setStoreValue] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  

  useEffect(() => {
    if (isLoggedin === true) {
      const products = productService.getAllProducts();
      products.then(data => {
        setProductsList(data)
        console.log(productsList);
      })
    }
  }, [isLoggedin])

  useEffect(() => {
      let storesValue = 0
      let categoryCount = new Set();
  
      setTotalProducts(productsList.length)
      productsList.map((item) => {
        console.log("calculateStoreValue - map")
        const { price, quantity, category } = item;
        storesValue += ((price * quantity))
        console.log("Store Value", storesValue);
        
        categoryCount.add(category);
        if (quantity === 0)
          setOutOfStock(outOfStock += 1)
        
      });
      setStoreValue(storesValue);
      setCategoryCount(categoryCount.size || 0)
  
  }, [productsList])
  

  return (
    <>
      <div className="main ml-top" id="main">
        <h1 className="dashboard-header">Inventory Status</h1>
        <div className="row">
          <DashboardTile color="#009688" title="Total Products" value={ totalProducts ? totalProducts : 10 } />
          <DashboardTile color="#2196f3" title="Total Store Value" value={ storeValue ? storeValue : 12332 } />
          <DashboardTile color="#3f51b5" title="Out of Stock" value={ outOfStock ? outOfStock : 0 } />
          <DashboardTile color="#263238" title="All Categories" value={ categoryCount? categoryCount : 1 } />
        </div>
        <Table productsList={ productsList }/>
      </div>
    </>
  );
}
