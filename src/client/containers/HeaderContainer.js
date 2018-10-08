import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = () => (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <li>Language</li>
        <li>Login</li>
        <li>Like</li>
        <Link to="cart">Cart</Link>
      </ul>
    </nav>
)

export default HeaderContainer;
