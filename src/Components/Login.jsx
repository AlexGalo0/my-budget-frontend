import { Form,Button } from "react-bootstrap";
import "../Login.css";

export const Login = () => {
  return (
    <>

      <div className="container">
        <Form>
          <Form.Text style={{fontSize:"30px", color:"black"}}> Sign In </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white"}}>Email Address: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"white"}}>Password: </Form.Label>
            <Form.Control type="password" placeholder="Password"  size="lg"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
