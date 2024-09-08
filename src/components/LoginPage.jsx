import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const LoginPage = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [messageLogin, setMessageLogin] = useState("");
    const [variantLogin, setVariantLogin] = useState("success");

    const validarFormulario = (e) => {
        e.preventDefault();
    
        if (emailLogin === "" || passwordLogin === "") {
          setMessageLogin("Debe Completar ambos campos");
          setVariantLogin("danger");
          return false;
        }
        if (passwordLogin.length < 6) {
          setMessageLogin("El tamaño del password debe tener 6 caracteres o más");
          setVariantLogin("danger");
          return false;
        }
        setMessageLogin("Login Exitoso");
        setVariantLogin("success");
      };

  return (
    <Card  style={{ width: '20rem'}}>
    <Form onSubmit={(e) => validarFormulario(e)}>
      <ListGroup variant="flush">
        <ListGroup.Item>
            <h2>Login</h2>
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Enter email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
            </Form.Group>
        </ListGroup.Item>
        <ListGroup.Item>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
            </Form.Group>
        </ListGroup.Item>
        <ListGroup.Item className="mb-3 d-flex justify-content-end">
                <Button variant="primary" type="submit">Login</Button>
        </ListGroup.Item>
        </ListGroup>
    </Form>
        <ListGroup.Item>
        {messageLogin && (
        <Alert variant={variantLogin} onClose={() => setMessageLogin("")} dismissible>
          {messageLogin}
        </Alert>
      )}
        </ListGroup.Item>
    </Card>
  );
};

export default LoginPage;