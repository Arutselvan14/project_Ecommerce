import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../Css/Common.css';

const Cosmetics = ({ addToCart }) => {
  const [cosmeticsData, setCosmeticsData] = useState({});
  const baseUrl = "http://127.0.0.1:8000";

  const categories = [
    { id: 19, name: "Sunscreen" },
    { id: 20, name: "Lotions" },
    { id: 21, name: "Moisturizers" },
    { id: 22, name: "Lipstick" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          categories.map(category => axios.get(`${baseUrl}/product/${category.id}/`))
        );
        const data = responses.reduce((acc, response, index) => {
          acc[categories[index].name] = response.data;
          return acc;
        }, {});
        setCosmeticsData(data);
      } catch (error) {
        console.error("Error fetching cosmetics data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="whole cosmetics-content">
      <div className="container pt-5">
        <h1 className="header_name">Cosmetics</h1>
        {categories.map(category => (
          <div key={category.id}>
            <br />
            <h2 className="heading_name">{category.name}</h2>
            <hr className="hr-tag" />
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
              {cosmeticsData[category.name]?.map((product, index) => (
                <div className="col align-items-center p-3" key={index}>
                  <Card className="align-items-center">
                    <Card.Img variant="top" src={`${baseUrl}${product.product_image}`} className="card_image" />
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
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;

