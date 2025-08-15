import React, { useState } from 'react';
import { cosmo_list } from '../../assets/assets';
import './skin.css';
import Skinheader from '../../components/skinheader/skinheader';

function Skin() {
    const skinProducts = cosmo_list.filter(product =>
        product.cosmo_name.toLowerCase().includes("skin")
    );

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (name, delta) => {
        setQuantities((prev) => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) + delta, 0),
        }));
    };

    return (
        <div className="skin-page">
            <Skinheader />
            <div><h1>Our Best Skin Care Picks!</h1></div>
            <div className="products-grid">
                {skinProducts.map((product) => (
                    <div key={product.cosmo_name} className="product-card">
                        <img src={product.cosmo_image} alt={product.cosmo_name} className="product-img" />
                        <h3>{product.cosmo_name}</h3>
                        <p>{product.cosmo_description}</p>
                        <p><strong>₹{product.cosmo_price}</strong></p>
                        <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(product.cosmo_name, -1)}>-</button>
                            <span>{quantities[product.cosmo_name] || 0}</span>
                            <button onClick={() => handleQuantityChange(product.cosmo_name, 1)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skin;
