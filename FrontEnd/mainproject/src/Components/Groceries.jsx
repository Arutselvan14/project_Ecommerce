import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../Css/Common.css';

const categories = [
  { id: 1, name: "Fruits Items" },
  { id: 2, name: "Vegetables Items" },
  { id: 3, name: "Dhals Items" },
  { id: 4, name: "Flour Items" }
];

const Groceries = ({ addToCart }) => {
  const [groceries, setGroceries] = useState({});
  const baseURL = "http://127.0.0.1:8000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          categories.map(category =>
            axios.get(`${baseURL}/product/${category.id}/`)
          )
        );
        const data = responses.reduce((acc, response, index) => {
          acc[categories[index].id] = response.data;
          return acc;
        }, {});
        setGroceries(data);
      } catch (error) {
        console.error("Error fetching grocery data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="whole groceriescontent">
      <div className="container pt-5">
        <h1 className="header_name">Grocery</h1>
        {categories.map(({ id, name }) => (
          <div key={id}>
            <br />
            <h2 className="heading_name">{name}</h2>
            <hr className="hr-tag" />
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start">
              {groceries[id]?.map((item) => (
                <div key={item.id} className="col align-items-center p-3">
                  <Card className="align-items-center">
                    <Card.Img
                      variant="top"
                      src={`${baseURL}${item.product_image}`}
                      className="card_image"
                      alt={item.product_name}
                    />
                    <Card.Body>
                      <Card.Title className="card_name">{item.product_name}</Card.Title>
                      <Card.Title className="card_price">
                        Price: {item.product_price}/{item.product_kg}kg
                      </Card.Title>
                      <Button
                        variant="success"
                        className="card_btn"
                        onClick={() => addToCart(item)}
                      >
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

export default Groceries;

