import { Link } from 'react-router-dom'

// src/components/Navbar.jsx
export function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/about/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
