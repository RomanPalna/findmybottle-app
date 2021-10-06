import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink to="/">Main page</NavLink>;<NavLink to="/price">Price</NavLink>;
      <NavLink to="/order">Order</NavLink>
    </nav>
  );
}
