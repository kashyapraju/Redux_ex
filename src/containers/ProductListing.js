import React from "react";
import  { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

import ProductComponent from "./ProductComponent";

const ProductListing = ()=>
{

    const products = useSelector((state) => state);
    const dispatch = useDispatch(); // hook ka use kiya h data ko lane ke liye 

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
          dispatch(setProducts(response.data));
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);

      console.log("Products :", products);




    return (
        <div className="ui frid container">
           <ProductComponent/>
        </div>
    );
};

export default ProductListing;