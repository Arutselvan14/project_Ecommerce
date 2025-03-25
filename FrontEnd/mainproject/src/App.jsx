import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import LoginForm from "./Components/LoginForm";
import Groceries from "./Components/Groceries";
import Electronics from "./Components/Electronics";
import Fashion from "./Components/Fashion";
import Cosmetics from "./Components/Cosmetics";
import Appliances from "./Components/Appliances";
import Offers from "./Components/Offers";

const App = () => {
  // Cart State
  const [cart, setCart] = useState([]);

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/grocery" element={<Groceries addToCart={handleAddToCart} />} />
        <Route path="/electronics" element={<Electronics addToCart={handleAddToCart} />} />
        <Route path="/fashion" element={<Fashion addToCart={handleAddToCart} />} />
        <Route path="/cosmetics" element={<Cosmetics addToCart={handleAddToCart} />} />
        <Route path="/appliances" element={<Appliances addToCart={handleAddToCart} />} />
        <Route path="/offer" element={<Offers addToCart={handleAddToCart} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;




