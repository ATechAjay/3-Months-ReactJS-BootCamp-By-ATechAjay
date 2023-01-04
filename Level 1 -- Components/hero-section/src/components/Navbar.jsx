import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">
        <img
          className="navbar__logo"
          src="https://juho.co/wp-content/uploads/2021/08/juho-square-dark-1.svg"
          alt="logo"
        />
      </a>

      <ul className="navbar__links--container">
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
