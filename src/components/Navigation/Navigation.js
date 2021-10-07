import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="link" activeClassName="activeLink">
        Main page
      </NavLink>
      <NavLink to="/price" className="link" activeClassName="activeLink">
        Price
      </NavLink>
      <NavLink to="/order" className="link" activeClassName="activeLink">
        Order
      </NavLink>
    </nav>
  );
}
