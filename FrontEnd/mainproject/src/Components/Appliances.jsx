import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import '../Css/Common.css';

const Appliances = ({ addToCart }) => {
  const [products, setProducts] = useState({
    television: [],
    refrigerator: [],
    homeAppliances: [],
    acCooler: []
  });

  const baseURL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [tvRes, fridgeRes, homeAppRes, acRes] = await Promise.all([
          axios.get(`${baseURL}/product/13/`),
          axios.get(`${baseURL}/product/14/`),
          axios.get(`${baseURL}/product/15/`),
          axios.get(`${baseURL}/product/16/`)
        ]);

        setProducts({
          television: tvRes.data,
          refrigerator: fridgeRes.data,
          homeAppliances: homeAppRes.data,
          acCooler: acRes.data
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderProducts = (category, title) => (
    <div>
      <h2 className="heading_name">{title}</h2>
      <hr className="hr-tag" />
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
        {products[category].map((product, index) => (
          <div className="col align-items-center p-3" key={index}>
            <Card className="align-items-center">
              <Card.Img variant="top" src={`${baseURL}${product.product_image}`} className="card_image" />
              <Card.Body>
                <Card.Title className="card_name">{product.product_name}</Card.Title>
                <Card.Title className="card_price">Price: {product.product_price}</Card.Title>
                <Button variant="success" className="card_btn" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="whole appliancescontent">
      <div className="container pt-5">
        <h1 className="header_name">Appliances</h1>
        <br />
        {renderProducts("television", "Television")}
        <br />
        {renderProducts("refrigerator", "Refrigerator")}
        <br />
        {renderProducts("homeAppliances", "Home Appliances")}
        <br />
        {renderProducts("acCooler", "AC & Cooler")}
      </div>
    </div>
  );
};

export default Appliances;
