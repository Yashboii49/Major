import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>
            <a href="/products">Products</a>
            <ul>
              <li><a href="/product1">SE03 Lite</a></li>
              <li><a href="/product2">SE03</a></li>
              <li><a href="/product3">SE03 Max</a></li>
              <li><a href="/compare">Compare All</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/prebook">Pre-book now</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
