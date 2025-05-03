import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../Css/Home.css';
import '../Css/Common.css';
// import Carosal from './Carosal';
import home1 from "../assets/home_img/home1.avif"

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  // const baseURL = "http://127.0.0.1:8000";

  useEffect(() => {
    // axios.get(`${baseURL}/api/products/`)
    //   .then((response) => {
    //     setProducts(response.data);
    //   })
    //   .catch((error) => console.error("Error fetching products:", error));

    fetch('https://raw.githubusercontent.com/Arutselvan14/project_Ecommerce/main/BackEnd/MainProject/dta.text')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text(); // Get the response as a plain string
    })
    .then((data) => {
      const parsedData = JSON.parse(data); // Convert string to JSON
      console.log('Parsed data:', parsedData);
      setProducts(parsedData); // ✅ Correct usage
    })
    .catch((error) => {
      console.error('Error fetching or parsing file:', error);
    });

  }, []);


  const electronics = products.filter(product =>
    (product.product_name.startsWith("Laptop") && product.product_price > 60000) ||
    (product.product_name.startsWith("Phone") && product.product_price > 18000)
  );

  const dresses = products.filter(product =>
    product.product_name.endsWith("shirt") || product.product_name.startsWith("Kurti")
  );

  return (
    <div className="whole maincontent">
      <div className="container-fluid pb-5">
        <div className="container profile-cart">
          <div className="row align-items-center pt-5">
            <div className="col-md-6 p-2">
              <h1 className="welcome-text">
                Welcome to <b className="name_cart">ADmart</b>
              </h1>
              <h3>Discover more, cherish every moment</h3>
            </div>
            <div className="col-md-6 p-2">
              <img
                src={home1}
                className="img-fluid rounded"
                alt="ADmart Home"
              />
            </div>
          </div>
        </div>

        {/* Best of Electronics Section */}
        <div className="container col_electronics mb-5">
          <h1 className="heading_name">Best Of Electronics</h1>
          <hr className="hr-tag" />
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
            {electronics.map((product) => (
              <div key={product.id} className="col align-items-center p-3">
                <Card className="align-items-center">
                  <Card.Img
                    variant="top"
                    src={product.product_image}
                    className="card_image"
                    alt={product.product_name}
                  />
                  <Card.Body>
                    <Card.Title className="card_name">{product.product_name}</Card.Title>
                    <Card.Title className="card_price">Price: {product.product_price}</Card.Title>
                    <Button variant="success" className="btn" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>



        {/* Carousel Component */}
        {/* <Carosal /> */}

        {/* Best of Dresses Section */}
        <div className="container col_Dresses">
          <h1 className="heading_name">Best Of Dresses</h1>
          <hr className="hr-tag" />
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
            {dresses.map((product) => (
              <div key={product.id} className="col align-items-center p-3">
                <Card className="align-items-center">
                  <Card.Img
                    variant="top"
                    src={product.product_image}
                    className="card_image"
                    alt={product.product_name}
                  />
                  <Card.Body>
                    <Card.Title className="card_name">{product.product_name}</Card.Title>
                    <Card.Title className="card_price">Price: {product.product_price}</Card.Title>
                    <Button variant="success" className="btn" onClick={() => addToCart(product)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
