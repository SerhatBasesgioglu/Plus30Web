import logo from "images/Plus30.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-3 sticky top-0 z-50">
      <div className="container flex justify-between">
        <a className="text-white text-lg" href="/">
          <img className="logo mx-3 my-3" src={logo} alt="logo"></img>
        </a>
        <ul className="flex space-x-5">
          <li>
            <a className="text-red-800" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-red-800" href="/">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
