import axios from "axios";
import { useState } from "react"
import { Container ,Row,Col,Form,Button} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom"


export default function Payment(){
let nav=useNavigate()
const loc=useLocation()
const[pay,setPay] =useState(loc.state)
console.log(pay);
const [acno,setAcno]=useState('');
const [user,setUserdata]=useState(localStorage.getItem('user'));
const [fsc,setFsc]=useState('');
const [acname,setAcname]=useState('');

console.log(user);
async function paymentpage(){
    if(acno!==''&& fsc!==''&& acname!==''){
      let params={
        acno:acno,
        acname:acname,
        fsc:fsc,
        pay:pay,
        user:user
      }
      let res= await axios.post("donate",params).catch(e=>console.log(e));
      const{success,message} = res?.data
if(success){

  alert(message)
  nav('/profile')

}
else{
  alert(message)

}
    }
    else{
        alert("Fill All Input")
    }
}
    return(
        <>
       <Container className="m-5">
        <Row>
            <Col>
            <h1 className="bg-primary text-light p-3">Payment</h1>
          
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="w-25 bg-success m-auto rounded p-3 text-light">
            <h4>Bank Account Details</h4>
            <Form>
              
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Bank Account Number" value={acno} onChange={d=>setAcno(d.target.value)}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="IFSC"  value={fsc} onChange={d=>setFsc(d.target.value)}/>
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="Account Holder Name"  value={acname} onChange={d=>setAcname(d.target.value)}/>
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" value={`Rs.${pay}`} />
       
     </Form.Group>

      <Button variant="primary" onClick={paymentpage} >
        Submit Payment
      </Button>
    </Form>
            </div>
            </Col>
        </Row>
       </Container >
        </>

    )
}

/* import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts ?? [];
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = searchParams.get('totalPrice');
    setTotalPrice(totalPrice || 0);
  }, [location.search]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could handle submitting the payment information to a server
    // and show a confirmation message to the user
    window.alert('Payment successful! Thank you for your purchase.');
  };
  

  return (
    <div className="container my-5">
      <h1 className="mb-3">Payment</h1>
      <div className="card">
        <div className="card-header">
          <h5>Order Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group mb-3">
            {selectedProducts.map((product) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                {product.name}
                <span className="badge badge-primary badge-pill">${product.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total Price:
              <span id="total-price">₹{totalPrice ?? 0}</span>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={paymentInfo.name}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit"  id='sbtn' className="btn btn-primary">
              Submit Payment
            </button>
            <div>
            <Link to="/Addtocart"  id='backbtn' className="btn btn-secondary ml-2">
              Back to Products
            </Link>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
 */