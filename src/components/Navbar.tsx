import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center gap-6 px-4 h-full">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;
