import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/bc/47/de/bc47deec54383aa62b31e041f71327c7.jpg"
          alt="First slide"
          style={{ marginTop: '50px' }} // Inline style
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.global.news.samsung.com/ph/wp-content/uploads/2022/11/IM_Project-Triangulum_Lazada_1200x500_LM-1024x427.jpg"
          alt="Second slide"
          style={{ marginTop: '20px' }} // Inline style
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg"
          alt="Third slide"
          style={{ marginTop: '20px' }} // Inline style
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
