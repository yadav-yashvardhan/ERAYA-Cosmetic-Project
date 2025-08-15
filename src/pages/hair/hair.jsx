import React, { useState } from 'react';
import { cosmo_list } from '../../assets/assets';
import './hair.css';
import Hairheader from '../../components/hairheader/hairheader';

function Hair() {
    const hairProducts = cosmo_list.filter(product =>
        product.cosmo_name.toLowerCase().includes("hair")
    );

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (name, delta) => {
        setQuantities((prev) => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) + delta, 0),
        }));
    };

    return (
        <div className="hair-page">
            <Hairheader />
            <div><h1>Top Hair Care Products!</h1></div>
            <div className="products-grid">
                {hairProducts.map((product) => (
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

export default Hair;
