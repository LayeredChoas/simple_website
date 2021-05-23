import {React,  useState, useEffect } from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

// import data from '../data';

export default function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  // const data = products.products;
  // console.log(products);
  return (
    <div className="row center">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        products.map((prod) => <Product key={prod._id} prod={prod}></Product>)
      )}
    </div>
  );
}
