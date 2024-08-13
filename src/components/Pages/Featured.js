import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products from your API or mock data
    axios.get('https://your-api-url.com/featured') // Replace with your API endpoint
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching featured products:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Featured Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.imageUrl} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>${product.price}</strong></p>
                  <p className="card-text text-success"><strong>Offer: {product.offer}</strong></p>
                  <a href="#" className="btn btn-primary">View Product</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
