import { useLocation, useNavigate,Link } from "react-router-dom"
import { useState } from "react"
import {Container, Row,Col} from "react-bootstrap";
import axios from "axios";


export default function Detailss() {
  let nav=useNavigate();
    const loc= useLocation()
    const[product,setProduct]= useState(loc.state)
    console.log(product);
   async function Addtocart(product){
      console.log(product);
      let params={
        ...product
      }
      let res =await axios.post("addtocart",params).catch(err=>alert(err))
      console.log(res.data);
      let {success,message,data} =res.data
      if(success){
      alert(message)
   
     nav('/')
      }
      else{
        alert(message)
       }
          }
    return(

      <Container>
        <Row>
            <Col lg={6}>
              <div className="img_div">
            <img src={product.img}/>
            </div>
            </Col>
            <Col lg={6}>
            <div className="div_cont">
                <h2>{product.name}</h2>
                <h2>OUR PRICE-₹{product.sellrate}</h2>
               <h2 >MRP:<del>  {product.mrprate} </del></h2>
                <h3>Discount:{product.dis}</h3>
               <button className="btn1" variant="primary" onClick={()=>Addtocart(product)}> Add to cart</button>

            </div>
            </Col>
        </Row>
      </Container>
    )

}
