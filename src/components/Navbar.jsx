

const Navbar = () => {
  const total = 25000;
  const token = true;

  const nuevototal = total.toLocaleString("es-CL", {style: "currency",currency: "CLP",minimumFractionDigits: 0,});

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-light fs-6" href="#">Pizzería Mamma Mia!</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-sm">🍕 Home</button>
            </li>
            <li className="nav-item">&nbsp;</li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light btn-sm">
              {" "}
              {token ? "🔓 Profile" : "🔒 Register"}
              </button>
            </li>
            <li className="nav-item">&nbsp;</li>
            <li className="nav-item">
            <button type="button" className="btn btn-outline-light btn-sm">
            {" "}
            {token ? "🔐 Logout" : "🔐 Login"}
            </button>
            </li>
          </ul>
        </div>
        <div className="text-end">
          <button type="button" className="btn btn-outline-info btn-sm">🛒 Total: {nuevototal}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
