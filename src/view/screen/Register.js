import { Container,Row,Col,Button,Form} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {

  const nav = useNavigate()
  // const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("")
  
const[name,setName]= useState('');
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');





let submitregister=async()=>{
  // console.log(file);
  // console.log(fileName);
  
    const formdata= new FormData();
    // formdata.append("file",file)
    // formdata.append("filename",fileName)
    let data =JSON.stringify( Object.fromEntries(formdata));
  
  console.log(data);
    let params={
    username:name,
    email:email,
    password:password,
    // image:file
  }
  console.log(params);
  try {
      let res =await axios.post("register",params).catch(err=>alert(err))
      console.log(res.data);
      let {success,message} =res.data
      if(success){
        alert(message)
        nav("/Login")
     
      }
      else{
        alert(message)
      }
    } catch (error) {
      console.log("error==",error);
      alert(error)
    }
  setEmail("")
  setPassword("")
  setName("")
  }
    return (
 <>
 <Container className="register">
 <Row>
<Col>
<h1>Sign Up</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} required onChange={(d)=>setName(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email"  value={email} required onChange={(d)=>setEmail(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password " value={password} required onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="Password" label="Enter Password" value={password}  onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group> */}
      <Button variant="primary"onClick={submitregister}>
        Submit
      </Button>
    </Form>
</Col>
 </Row>
 </Container>
 </>
)
}
 export default Register;
