import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';

import '../Css/NavBar.css';
import imglogo1 from '../assets/home_img/imglogo1.avif';
import imglogo2 from '../assets/home_img/imglogo2.avif';

const NavBar = ({ cart }) => {
  const [show, setShow] = useState(false);
  const [carts, setCarts] = useState([]);
  const baseURL = "http://127.0.0.1:8000";

  // Update the cart state whenever the prop cart changes
  useEffect(() => {
    setCarts(cart);
  }, [cart]);

  // Show the cart items
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);


  // Increment item quantity
  const handleIncrement = (index) => {
    const newCarts = [...carts];
    newCarts[index].product_quantity += 1;
    // quantity = newCarts[index].product_quantity;
    setCarts(newCarts);
  };

  // Decrement item quantity
  const handleDecrement = (index) => {
    const newCarts = [...carts];
    if (newCarts[index].product_quantity > 1) {
      newCarts[index].product_quantity -= 1;
      setCarts(newCarts);
    }
  };

  const handleRemove = (index) => {
    const newCarts = [...carts];
    newCarts.splice(index, 1); // Remove the item at the given index
    setCarts(newCarts);
  };

  return (
    <div className='headfoot navbarcontent'>
      <Navbar expand="lg" className="bgcol">
        <Container>
          <Navbar.Brand className='logo-img'>
            <div className='border border-primary border-3 logodiv'>
              <Link to='/' className='text-decoration-none' id='nav-detail-home'>
                <img id='image1' src={imglogo1} alt='Logo 1' />
                <img id='image2' src={imglogo2} alt='Logo 2' />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "white" }} />
          <Navbar.Collapse id="basic-navbar-nav" className='ms-3 justify-content-end'>
            <Nav className="nav-detail fs-5">
              <Nav.Link><Link to='/grocery' className='text-decoration-none' id='nav-detail-home'>Grocery</Link></Nav.Link>
              <Nav.Link><Link to='/fashion' className='text-decoration-none' id='nav-detail-home'>Fashion</Link></Nav.Link>
              <Nav.Link><Link to='/appliances' className='text-decoration-none' id='nav-detail-home'>Appliances</Link></Nav.Link>
              <NavDropdown title="More Categories" id='nav-detail-home'>
                <NavDropdown.Item className='bg-white'>
                  <Link to='/cosmetics' className='text-decoration-none text-black'>Cosmetics</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='bg-white'>
                  <Link to='/electronics' className='text-decoration-none text-black'>Electronics Items</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link><Link to='/offer' className='text-decoration-none' id='nav-detail-home'>Offers</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className='nav-size ms-3 justify-content-end'>
            <Nav className="menugap">
              <Nav.Link className='cardicon' onClick={handleShow}>
                <ShoppingCart size={30} color='white' />
              </Nav.Link>
              <Nav.Link>
                <Link to='/signup' className='text-decoration-none text-black'>
                  <User size={32} color="white" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Offcanvas show={show} onHide={handleClose} placement='end' style={{ backgroundColor: "lightgray" }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Items</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {carts.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              carts.map((item, index) => (
                <Card key={index} className='align-items-center mb-3 w-50'>
                  <Card.Img variant="top" src={item.product_image.startsWith(baseURL) ? item.product_image : baseURL + item.product_image} className='addtocart_image' />
                  <Card.Body className='text-center'>
                    <Card.Title className='addtocart_name'>{item.product_name}</Card.Title>
                    <Card.Text className='addtocart_price'>Price: ₹{item.product_price}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                      <Button variant="secondary" onClick={() => handleDecrement(index)}>-</Button>
                      <span>{item.product_quantity}</span>
                      <Button variant="secondary" onClick={() => handleIncrement(index)}>+</Button>
                    </div>
                    <div>
                      <span>total ₹{item.product_quantity*item.product_price}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                      <Button variant="danger" onClick={() => handleRemove(index)}>Remove</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </div>
  );
};

export default NavBar;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Navbar, Nav, NavDropdown, Offcanvas, Card, Button } from 'react-bootstrap';
// import '../Css/NavBar.css';
// import logo7 from '../assets/home_img/logo7.avif';
// import imglogo1 from '../assets/home_img/imglogo1.avif'
// import imglogo2 from '../assets/home_img/imglogo2.avif'

// const NavBar = ({ cart }) => {
//   const [show, setShow] = useState(false);
//   const [carts, setCarts] = useState([]);
//   const baseURL = "http://127.0.0.1:8000"; 

//   const handleShow = () => {
//     setCarts(cart);
//     setShow(true);
//   };

//   // const maxfruit = carts.reduce((max,cart)=> max.id == cart.id ? max : cart);
//   // console.log(maxfruit);
  


//   const handleClose = () => setShow(false);

//   return (
//     <div className='headfoot navbarcontent'>
//       <Navbar expand="lg" className="bgcol">
//         <Container>
//           <Navbar.Brand className='logo-img'>
//             <div className='border border-primary border-3 logodiv'>
//               <Link to='/' className='text-decoration-none' id='nav-detail-home'>
//                 <img id='image1' src={imglogo1} alt='Logo 1' />
//                 <img id='image2' src={imglogo2} alt='Logo 2' />
//               </Link>
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "white" }} />
//           <Navbar.Collapse id="basic-navbar-nav" className='ms-3 justify-content-end'>
//             <Nav className="nav-detail">
//               <Nav.Link><Link to='/grocery' className='text-decoration-none' id='nav-detail-home'>Grocery</Link></Nav.Link>
//               <Nav.Link><Link to='/fashion' className='text-decoration-none' id='nav-detail-home'>Fashion</Link></Nav.Link>
//               <Nav.Link><Link to='/appliances' className='text-decoration-none' id='nav-detail-home'>Appliances</Link></Nav.Link>
//               <NavDropdown title="More Categories" id='nav-detail-home' >
//                 <NavDropdown.Item className='bg-white'>
//                   <Link to='/cosmetics' className='text-decoration-none  text-black'>Cosmetics</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item className='bg-white'>
//                   <Link to='/electronics' className='text-decoration-none text-black'>Electronics Items</Link>
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link><Link to='/offer' className='text-decoration-none' id='nav-detail-home'>Offers</Link></Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//           <Navbar.Collapse className='nav-size ms-3 justify-content-end'>
//             <Nav className="menugap">
//               <Nav.Link className='cardicon' onClick={handleShow}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart3 cart-add text-light" viewBox="0 0 16 16">
//                   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
//                 </svg>
//               </Nav.Link>
//               <Nav.Link>
//                 <Link to='/signup' className='text-decoration-none text-black'>
//                   <img src={logo7} alt="Profile" style={{ width: "35px", height: "35px", borderRadius: "20px" }} />
//                 </Link>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>

//         <Offcanvas show={show} onHide={handleClose} placement='end' style={{ backgroundColor: "lightgray" }}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Cart Items</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             {carts.length === 0 ? (
//               <p>Your cart is empty.</p>
//             ) : (
//               carts.map((item, index) => (
//                 <Card key={index} className='align-items-center mb-3 w-50'>
//                   <Card.Img variant="top" src={item.product_image.startsWith(baseURL) ? item.product_image : baseURL + item.product_image} className='addtocart_image' />
//                   <Card.Body className='text-center'>
//                     <Card.Title className='addtocart_name'>{item.product_name}</Card.Title>
//                     <Card.Text className='addtocart_price'>Price: {item.product_price}</Card.Text>
//                     <Button variant="success" className='addtocart_btn'>Add to Cart</Button>
//                   </Card.Body>
//                 </Card>
//               ))
//             )}
//           </Offcanvas.Body>
//         </Offcanvas>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;


