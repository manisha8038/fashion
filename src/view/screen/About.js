import '../style/style.css'
import Card from 'react-bootstrap/Card';
import  fashion from '../img/fashion.jpg'
import girl from '../img/girl_img.jpg'
import man from '../img/Men.jpg'
import store from '../img/store.jpg'

export default function About(){
    return(
<>
        <Card className='c1'>
        <Card.Img variant="top" src={fashion} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. our shops fashion for girls,boys and kids
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className='c2'>
      <Card.Img variant="middle"  src={girl} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.our shops fashion for girls,boys and kids
          </Card.Text>
        </Card.Body>
         </Card>
         <br />
      <Card className='c3'>
      <Card.Img variant="middle2"  src={man} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.our shops fashion for girls,boys and kids
          </Card.Text>
        </Card.Body>
         </Card>
         <br />
      <Card className='c4'>
      <Card.Img variant="last"  src={store} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.our shops fashion for girls,boys and kids
          </Card.Text>
        </Card.Body>
         </Card>



      </>

        // <div className="About"> 
        
        // </div>
    )

}
