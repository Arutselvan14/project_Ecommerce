import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../Css/Common.css";

const Fashion = ({ addToCart }) => {
  const [fashionData, setFashionData] = useState({});
  const baseURL = "http://127.0.0.1:8000";

  // Define categories dynamically
  const categories = [
    { id: 7, name: "Men's Dress" },
    { id: 8, name: "Women's Dress" },
    { id: 9, name: "Kids' Dress" },
    { id: 10, name: "Footwear" },
  ];

  // Fetch all data in one API call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          categories.map((category) => axios.get(`${baseURL}/product/${category.id}/`))
        );
        const newData = {};
        categories.forEach((category, index) => {
          newData[category.id] = responses[index].data;
        });
        setFashionData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole groceriescontent">
      <div className="container pt-5">
        <h1 className="header_name">Fashion</h1>
        <br />
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="heading_name">{category.name}</h2>
            <hr className="hr-tag" />
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
              {fashionData[category.id]?.map((product, index) => (
                <div className="col align-items-center p-3" key={index}>
                  <Card className="align-items-center">
                    <Card.Img
                      variant="top"
                      src={`${baseURL}${product.product_image}`}
                      className="card_image"
                    />
                    <Card.Body>
                      <Card.Title className="card_name">
                        {product.product_name}
                      </Card.Title>
                      <Card.Title className="card_price">
                        Price: {product.product_price}
                      </Card.Title>
                      <Button
                        variant="success"
                        className="card_btn"
                        onClick={() => addToCart(product)}
                      >
                        Add Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
