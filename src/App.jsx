import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import "./App.css";

// import Home from "./components/Home";
// import LoginPage from "./components/LoginPage"
// import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Cart />
      {/* <div class="formularios"> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default App;