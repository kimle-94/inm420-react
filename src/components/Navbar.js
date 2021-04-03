import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
