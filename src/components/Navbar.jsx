import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ width: "100%", paddingLeft: "30px" }}>
      <Link to="/"> Home</Link> <Link to="/projects">Projects </Link>
      <Link to="/about"> About</Link> <Link to="/contact"> Contact </Link>
    </nav>
  );
};

export default Navbar;
