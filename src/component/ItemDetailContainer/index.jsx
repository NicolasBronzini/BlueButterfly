import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    console.log(productId);
    
 
    setTimeout(
    useEffect(()=> {
        
          
        
        const getProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/+${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();

    }, [productId]),2000)

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;