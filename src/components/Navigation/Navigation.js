import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Main page</NavLink>;<NavLink to="/price">Price</NavLink>;
      <NavLink to="/order">Order</NavLink>
    </nav>
  );
}
