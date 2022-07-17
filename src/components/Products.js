import React from 'react';
import ProductSlider from '../components/ProductSlider';
import { products } from '../data';
const Products = () => {
  return (
    <div className="section">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="title">{products.title}</h2>
          <p className="subtitle md:max-w-[80%] mx-auto">{products.subtitle}</p>
        </div>
        <ProductSlider />
      </div>
    </div>
  );
};

export default Products;
