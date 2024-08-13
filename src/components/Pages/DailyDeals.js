import React from 'react';
import './DailyDeals.css'; // Create and style this CSS file as needed

const products = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/51AADcwNmSL.jpg',
    description: 'Product 1 Description',
    price: '$29.99'
  },
  {
    id: 2,
    image: 'https://rukminim2.flixcart.com/image/850/1000/l0tweq80/computer-acc-combo/q/m/q/wireless-sports-bluetooth-neckband-with-dz09-smart-watch-combo-2-original-imagcj2stzyvy6gz.jpeg?q=20&crop=false',
    description: 'Product 2 Description',
    price: '$19.99'
  },
  {
    id: 3,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/368167297/BA/JM/VX/137431742/black-vehop-ultrapods-pro-bluetooth-tws-500x500.jpg',
    description: 'Product 3 Description',
    price: '$39.99'
  },
  {
    id: 4,
    image: 'https://media.sweetwater.com/m/products/image/814de54196huA4jkRzQJqwW5xhvZcmsUN9w8VSjy.jpg?quality=85&badge=original&width=300&height=300&bg-color=ffffff&ha=814de541961737ad&fit=bounds&canvas=300%2C300',
    description: 'Product 4 Description',
    price: '$39.99'
  },
  {
    id: 5,
    image: 'https://m.media-amazon.com/images/I/911zUAkDUyL._AC_UY1100_.jpg',
    description: 'Product 5 Description',
    price: '$39.99'
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/71A2rOksZtL._AC_UF1000,1000_QL80_.jpg',
    description: 'Product 6 Description',
    price: '$39.99'
  },
  {
    id: 7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dH-lHi-BRmYIypu0PP_aR7-zVovuxKOtqHqpz5Dc8QHqgbI5oscYX_vxJi6V2rPgBpY&usqp=CAU',
    description: 'Product 7 Description',
    price: '$39.99'
  },
  {
    id: 8,
    image: 'https://static.toiimg.com/thumb/msid-109308276,width-400,resizemode-4/109308276.jpg',
    description: 'Product 8 Description',
    price: '$39.99'
  },
  {
    id: 9,
    image: 'https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg',
    description: 'Product 9 Description',
    price: '$39.99'
  },
  {
    id: 10,
    image: 'https://5.imimg.com/data5/TL/TN/AP/SELLER-55536729/mobile-charger-adapter.jpg',
    description: 'Product 10 Description',
    price: '$39.99'
  }
];

const DailyDeals = () => {
    const buyProduct = (productId) => {
        // Logic to handle the "Buy Now" action
        console.log(`Buying product with ID: ${productId}`);
      };
      const addToCart = (productId) => {
        // Logic to handle the "Add to Cart" action
        console.log(`Adding product with ID: ${productId} to the cart`);
      };
    return (
        <div className="container">
          <h2 className="my-4">Daily Deals</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={product.image} alt={product.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text price">{product.price}</p>
                    <button className="btn btn-primary" onClick={() => buyProduct(product)}>Buy</button>
                    <button className="btn btn-secondary ml-2" onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default DailyDeals;
