import { Form, Button } from "react-bootstrap";
import "../Assets/Login.css";

export const Login = () => {
  return (
    <main id="bg-login">
      <section className="container">
        <Form>
          <Form.Text
            style={{ marginLeft:'50px',  fontSize: "40px", padding: "13.5vh", color: "white" }}
          >
            {" "}
            Inicia Sesión{" "}
          </Form.Text>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: "white", marginTop: "20px" }}>
              Ingresa tu Email:{" "}
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>
              Ingresa tu Contraseña
            </Form.Label>
            <Form.Control type="password" placeholder="Password" size="lg" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            size="lg"
            style={{}}
          >
            Enviar
          </Button>
          <Button
            variant="primary"
            type="submit"
            size="lg"
            style={{marginLeft:'20px'}}
          >
            Inicia Sesión con Google
          </Button>
        </Form>
      </section>
    </main>
  );
};
