import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
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
      <div className="my-2 container flex items-center justify-between mx-auto">
        {/* Nav Logo */}
        <div className="relative-section">
          {/* 2. Changed 'href' to 'to' (Link uses 'to') */}
          <Link to="/">
            <img
              src="public\media\images\vikrammaurya_logo.png"
              className="w-[30%] px-10 ml-40"
              alt="Logo"
            />
          </Link>
        </div>

        <ul className="flex flex-row gap-3 mr-50 text-gray-600">
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
          <li className="mt-4.5 ml-4">
            <RxHamburgerMenu size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
