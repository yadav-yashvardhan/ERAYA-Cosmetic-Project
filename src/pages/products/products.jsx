import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './products.css';

const Products = () => {
  const { category } = useParams(); // Get category from URL (e.g., 'skincare', 'makeup')

  const productCategories = [
    {
      category: 'Skincare',
      slug: 'skincare',
      items: [
        { name: 'Radiance Serum', description: 'A lightweight serum for glowing skin.', image: 'https://via.placeholder.com/300x300?text=Skincare+Serum', link: '/products/skincare/serum' },
        { name: 'Hydrating Cream', description: 'Deep moisture for all-day hydration.', image: 'https://via.placeholder.com/300x300?text=Skincare+Cream', link: '/products/skincare/cream' },
      ],
    },
    {
      category: 'Makeup',
      slug: 'makeup',
      items: [
        { name: 'Velvet Lipstick', description: 'Rich color with a smooth finish.', image: 'https://via.placeholder.com/300x300?text=Makeup+Lipstick', link: '/products/makeup/lipstick' },
        { name: 'Luminous Foundation', description: 'Flawless coverage with a dewy glow.', image: 'https://via.placeholder.com/300x300?text=Makeup+Foundation', link: '/products/makeup/foundation' },
      ],
    },
    {
      category: 'Fragrances',
      slug: 'fragrances',
      items: [
        { name: 'Eterna Perfume', description: 'A timeless floral scent.', image: 'https://via.placeholder.com/300x300?text=Fragrance+Perfume', link: '/products/fragrances/perfume' },
        { name: 'Noir Essence', description: 'A bold, woody fragrance.', image: 'https://via.placeholder.com/300x300?text=Fragrance+Essence', link: '/products/fragrances/essence' },
      ],
    },
    {
      category: 'Haircare',
      slug: 'haircare',
      items: [
        { name: 'Silk Shampoo', description: 'Gentle cleansing for silky hair.', image: 'https://via.placeholder.com/300x300?text=Haircare+Shampoo', link: '/products/haircare/shampoo' },
        { name: 'Nourish Conditioner', description: 'Strengthens and smooths hair.', image: 'https://via.placeholder.com/300x300?text=Haircare+Conditioner', link: '/products/haircare/conditioner' },
      ],
    },
  ];

  // Filter categories based on URL parameter
  const filteredCategories = category
    ? productCategories.filter(cat => cat.slug.toLowerCase() === category.toLowerCase())
    : productCategories;

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1 className="products-title">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : 'Our Luxurious Collections'}
          </h1>
          <p className="products-subtitle">Discover Elegance in Every Detail</p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="products-content">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{cat.category}</h2>
              <div className="products-grid">
                {cat.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="product-card">
                    <div className="product-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-description">{item.description}</p>
                    <Link to={item.link} className="product-link">Shop Now</Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found for this category.</p>
        )}
      </section>
    </div>
  );
};

export default Products;