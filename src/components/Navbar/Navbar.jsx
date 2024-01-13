import logo from "images/logo.avif";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand">
      <a class="navbar-brand" href="/">
        <img class="logo" src={logo} alt="Logo"></img>
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="banlist">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
