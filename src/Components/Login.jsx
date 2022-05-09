import { Form,Button } from "react-bootstrap";
import "../Assets/Login.css";

export const Login = () => {

  return (
    <>

      <div className="container">
        <Form>
          <Form.Text style={{fontSize:"30px", padding: "13.5vh" ,color:"white"}}> Inicia Sesión! </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"white" , marginTop:"20px"}}>Ingresa tu Email: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"white"}}>Ingresa tu Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password"  size="lg"/>
          </Form.Group>
          <Button variant="primary" type="submit" size="lg" style={{marginLeft:"40%", marginTop:"15px"}}>
            Enviar
          </Button>
        </Form>
      </div>
    </>
  );
};
