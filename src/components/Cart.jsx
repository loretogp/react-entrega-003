import { useState } from "react";
import CardPizza from "./CardPizza";
import Button from "react-bootstrap/Button";

function Cart() {
  const [cart, setCart] = useState([]);
  const [countPizzas, setCountPizzas] = useState(0);
  const [total, setTotal] = useState(0);
  const agregaPizza = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    setTotal(total + pizza.price);
    setCountPizzas(countPizzas + 1);
  };

  const restaPizza = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      if (existingPizza.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart(cart.filter((item) => item.id !== pizza.id));
      }

      setTotal(total - pizza.price);
      setCountPizzas(countPizzas - 1);
    }
  };

  return (
    <div className="carrito" >
      <h3>🛒 <span className="total-pagar">Total: ${total.toFixed(0)}</span></h3> 
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id} className="text-cart">
            <div className="detalleCarrito">
            <Button variant="outline-warning" size="sm" onClick={() => restaPizza(pizza)}> - </Button>
            {pizza.name} - ${pizza.price} x {pizza.quantity}{" "}
            <Button variant="outline-warning" size="sm" onClick={() => agregaPizza(pizza)}> + </Button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        
      </div>
      
      <CardPizza agregaPizza={agregaPizza} />
    </div>
  );
}

export default Cart;

