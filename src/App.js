import{BrowserRouter,Routes,Route} from "react-router-dom";
import { Container, Row, Col,Button,Nav,Navbar,Form,FormControl,NavDropdown} from "react-bootstrap";
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
import { FaFacebook, FaTwitter, FaInstagram,FaShoppingCart,FaUserCircle,FaPinterest} from 'react-icons/fa';
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
         <Navbar className="fa-nav" expand="lg">
      <Container>
      <Navbar.Brand href="#home">FASHION </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto ">
                    <Nav.Link href="/">Home</Nav.Link>
                    {menubar.map(function (d) {
                      return <Nav.Link href={`/${d}`}>{d}</Nav.Link>;
                    })}
                    <Nav/>    
          </Nav>
          <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
            {
               user? <Button  style={{backgroundColor :"White" ,color:"black"}} variant="outline-success" onClick={logout}>Logout</Button>:null
            }
          </Form>
          <Nav>
                    <NavDropdown
                      title={<FaUserCircle />}
                      id="basic-nav-dropdown"
                      className="login-icon"
                    >

                      {
                      user ? <><NavDropdown.Item onClick={()=>("/profile")}>Profile </NavDropdown.Item><NavDropdown.Item onClick={logout}>Logout </NavDropdown.Item></> :<>
                      <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/Register">
                        Sign Up
                      </NavDropdown.Item>
                      </>
                      }
                    </NavDropdown>
          
            <Nav.Link  style={{ color: "white" }} href="/Addtocart">
              <FaShoppingCart className="cart-icon"/>
            </Nav.Link>
       </Nav>
       </Navbar.Collapse>
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
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Home</a></li>
              <li><a href="#!">Shop</a></li>
              <li><a href="#!">About Us</a></li>
              <li><a href="#!">Contact Us</a></li>
              
            </ul>
          </Col>
          <Col>
          <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Phone: +1-123-456-7890</li>
                <li>Email: info@fashion.com</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <div className="soci">
                <ul className="list-inline social-media">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Address</h4>
              <p>127 Local Street</p>
              <p>C Scheme, JAI 12345</p>
              <p>302001</p>
            </div>
          </div>
         
        </div>
        </Col>
       
        </Row>
        <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 FASHION. All rights reserved.</p>
            </div>
          </div>
        <hr />
      
      </Container>
      </footer>
    
    </>

    
    </BrowserRouter>
    </>
  )
}
 
export default App;
