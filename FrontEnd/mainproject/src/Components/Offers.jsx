import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../Css/Common.css';

const Offers = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const bigOffers = products.filter(product => product.product_price < 100);
  const dailyOffers = products.filter(product => product.product_price < 50);

  const renderProductCards = (productsList) => (
    <div className='row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-start'>
      {productsList.map((product, index) => (
        <div key={index} className='col align-items-center p-3'>
          <Card className='align-items-center'>
            <Card.Img variant='top' src={product.product_image} className='card_image' />
            <Card.Body>
              <Card.Title className='card_name'>{product.product_name}</Card.Title>
              <Card.Title className='card_price'>Price: {product.product_price}</Card.Title>
              <Button variant='success' className='card_btn' onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <div className='whole offerscontent'>
      <div className='container pt-5'>
        <h1 className='header_name'>Offers Sales</h1>
        <br />
        <h2 className='heading_name'>Big Offers</h2>
        <hr className='hr-tag' />
        {renderProductCards(bigOffers)}
        <br />
        <h2 className='heading_name'>Daily Offers</h2>
        <hr className='hr-tag' />
        {renderProductCards(dailyOffers)}
      </div>
    </div>
  );
};

export default Offers;
