import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 Do-Blog. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
