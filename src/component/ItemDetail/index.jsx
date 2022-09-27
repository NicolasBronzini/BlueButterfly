import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import {Shop} from '../Context/CartContext'
import "./style.css";

const ItemDetail = ({ product }) => {
    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const {addCart} = useContext(Shop);


    const toCart = (quantity) => {
        setQty(quantity);
    };


    const handleFinish = () => {
        const productToSave = {...product, quantity: qty};
        addCart(productToSave); 
        navigate("/Cart");
    };



    return (
        <div className="containerDetail">
            <img className="img-detail" src={product.image} alt="product-detail"/>
            <div className="detail-subcontainer">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2 className="precio">{product.price} $</h2>
                {qty ?  <button onClick={handleFinish}></button> : <ItemCount stock={10} initial={1} onAdd={toCart} /> }
            </div>
        </div>
    );
};

export default ItemDetail;