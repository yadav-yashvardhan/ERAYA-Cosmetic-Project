import React, { useState } from 'react';
import { cosmo_list } from '../../assets/assets';
import './lip.css';
import Lipheader from '../../components/lipheader/lipheader';

function Lip() {
    const lipProducts = cosmo_list.filter(product =>
        product.cosmo_name.toLowerCase().includes("lip")
    );

    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (name, delta) => {
        setQuantities((prev) => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) + delta, 0),
        }));
    };

    return (
        <div className="lip-page">
            <Lipheader />
            <div><h1>Try Our New Arrivals!</h1></div>
            <div className="products-grid">
                {lipProducts.map((product) => (
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

export default Lip; // <-- Ye line zaroor honi chahiye

