import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Updated to objects to match labels with specific paths in main.jsx
  const navLinks = [
    { label: "Signup", path: "/Signup" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/product" }, // Label is 'Products', path is '/product'
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="my-2 container flex items-center justify-between mx-auto px-4">
        {/* Nav Logo */}
        <div className="relative-section">
          {/* 2. Changed 'href' to 'to' (Link uses 'to') */}
          <Link to="/">
            <img
              src="public\media\images\vikrammaurya_logo.png"
              className="w-[30%] sm:w-[30%] px-4 sm:px-10 ml-4 sm:ml-40"
              alt="Logo"
            />
          </Link>
        </div>

        <ul className="hidden sm:flex flex-row gap-3 mr-4 sm:mr-50 text-gray-600">
          {navLinks.map((link) => {
            return (
              <li className="m-4" key={link.label}>
                {/* 3. Wrapped text in Link component */}
                <Link to={link.path} className="hover:text-blue-500">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden">
          <RxHamburgerMenu
            size={25}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col gap-3 p-4 text-gray-600">
            {navLinks.map((link) => {
              return (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
