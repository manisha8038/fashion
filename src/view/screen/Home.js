import { Container, Row ,Col,Carousel,Card,ListGroup} from "react-bootstrap";
import { product } from "../data/data";
import { useNavigate } from "react-router-dom";
import React  from 'react'
export default function Home(){
  const nav = useNavigate()
  return(
     <Container fluid>
      <Row >
        <Col>
        <Carousel className="Slider">
      <Carousel.Item>
        <img
          className="d-block w-100"
            src={require('../img/carousel-1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/carousel-2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/carousel-3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      <Row lg={4} >
      
  {
    product.map(function(d)
    {
      return(
        <Col className="Crd1">

        <Card style={{ width: '' }}   className="m-5"   onClick={()=>nav('/Detailss',{state:d})}>
      <Card.Img variant="top" className="img" src={d.img}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        About product- {d.about_this_item}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>mrp-{d.mrprate}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Details</Card.Link>
        {/* <Card.Link href="#">Add to cart</Card.Link> */}
      </Card.Body>
    </Card>
        </Col>

      )
    })
  }
</Row>
        
        {/* <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {require('../img/tisat2.png')}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col> */}
     
     </Container>
  )

}