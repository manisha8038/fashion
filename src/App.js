import{BrowserRouter,Routes,Route} from "react-router-dom";
import { Container, Row, Col,Button,Nav,Navbar,Form} from "react-bootstrap";
import Home from "./view/screen/Home";
import '../src/view/style/style.css'
import About from "./view/screen/About";
import Contact from "./view/screen/Contact";
import Detailss from "./view/screen/Detailss";
import Payment from "./view/screen/Payment";
import { menubar } from "./view/data/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './view/screen/Register'
import Addtocard from "./view/screen/Addtocart";
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import Login from "./view/screen/Login";
// import {fa-thin fa-house} from "react-icons/fa";
import { useState } from "react"; 



function App(){

const[user] = useState(localStorage.getItem('user'))
console.log(localStorage.getItem('user'));
function logout(){
  alert('logout')
  /* localStorage.setItem('user',false) */
  localStorage.clear();
  /* setUser(false) */
  window.location.reload();
}

  return(
    <>
    <BrowserRouter>
    <Container  fluid>

        <Row>
         <Col>
         <Navbar  bg="dark" variant="dark" className="nav">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" className="nav2" />
        <Navbar.Collapse id="navbarScroll"> */}
          <Nav
            className="me-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' }}
            
          >
                 <Nav.Link className="css" > </Nav.Link>
                 <Nav.Link style={{color :"white"}} href="/">Home</Nav.Link>
                 {
              menubar.map(function(d){
              return(
                <Nav.Link style={{color :"white"}} className="menu" href={`/${d}`}>{d}</Nav.Link>
              )}
              )}

              {

              user?null:<>
               <Nav.Link style={{color :"white"}} href="/Register">Register</Nav.Link>

               <Nav.Link  style={{color :"white"}} href="/Login">Login</Nav.Link>
               </>
              }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor :"blue" ,color:"black"}} variant="outline-success">Search</Button>
            {
               user? <Button  style={{backgroundColor :"blue" ,color:"black"}} variant="outline-success" onClick={logout}>Logout</Button>:null
            }
          </Form>
        
      </Container>
    </Navbar>
         </Col>
            </Row>
        </Container>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Detailss" element={<Detailss/>}/>
      <Route path="/Addtocart" element={<Addtocard/>}/>
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/Login" element={<Login/>}/>
      
      


      
    </Routes>
    <>
    
      
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street<br />New York, NY 10001<br />Phone: (123) 456-7890<br />Email: info@example.com</p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item"><a href="#!"><FaFacebookF /></a></li>
              <li className="list-inline-item"><a href="#!"><FaTwitter /></a></li>
              <li className="list-inline-item"><a href="#!"><FaInstagram /></a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Shop</a></li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Contact Us</a></li>
              
            </ul>
          </Col>
          <Col md={4}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter to receive exclusive offers and the latest news on our products.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <button type="submit" id="FSbutton" className="btn btn-primary btn-block">Subscribe</button>
            </form>
          </Col>
        </Row>
        <hr />
        <p className="text-muted text-center">Copyright © {new Date().getFullYear()}
          {' '}
          <a href="#!">Your Company</a>
          {' '}
          All rights reserved.</p>
      </Container>
      </footer>
    
    </>

    
    </BrowserRouter>
    </>
  )
}
 
export default App;
