import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ItemDetail = ({ product }) => {
    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const addCart = (quantity) => {
        setQty(quantity);
    };

    const handleFinish = () => {
        navigate("/cart");
    };

    console.log(qty);

    return (
        <div className="containerDetail">
            <img className="img-detail" src={product.image} alt="product-detail"/>
            <div className="detail-subcontainer">
                <h1>{product.title}</h1>
                {qty ? (
                    <button onClick={handleFinish}></button>
                ) : (
                    <ItemCount stock={10} initial={1} onAdd={addCart} />
                )}
            </div>
        </div>
    );
};

export default ItemDetail;