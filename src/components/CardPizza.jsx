import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Pizzas from "../assets/js/pizzas.js";

function CardPizza({ agregaPizza }) {
  return (
    <div className="container">
      {Pizzas.map((pizza) => (
        <div style={{ paddingLeft: "10px"}}>
        <Card style={{ width: "40vh"}} key={pizza.id}>
          <Card.Img variant="top" title={pizza.desc} src={pizza.img} />
          <Card.Body>
            <Card.Title className="pizza_name"><b>{pizza.name}</b></Card.Title>
            <div className="ingredientes">
              {pizza.ingredients.map((ingredient, i) => (
                <p key={i}>- {ingredient}</p>
              ))}
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="text-center">
              <strong>Valor: ${pizza.price}</strong> <Button variant="outline-success" size="sm" onClick={() => agregaPizza(pizza)} >🛒Añadir</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
      ))}
    </div>
  );
}

export default CardPizza;
