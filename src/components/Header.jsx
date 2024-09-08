import imagenFondo from "../assets/react.svg";
const Header = () => {
  return (
    <header
      style={{
        padding: "50px",
        backgroundImage: "url(" + imagenFondo + ")"
      }}
    >
      <p class="text-white text-center fs-1 ">¡Pizzería Mamma Mia!</p>
      <p class="text-white text-center fs-6">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr class="text-white border-2 opacity-75"></hr>
    </header>
  );
};

export default Header;
