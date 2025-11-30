import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const ROUTES = ["Signup", "About", "Products", "Pricing", "Support"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100">
      <div className="my-2 container flex items-center justify-between mx-auto">
        {/* Nav Logo */}
        <div className="relative-section">
          <a href="#">
            <img
              src="public\media\images\vikrammaurya_logo.png"
              className="w-[30%] px-10 ml-40"
              alt=""
            />
          </a>
        </div>

        <ul className="flex flex-row gap-3 mr-50 text-gray-600">
          {ROUTES.map((routes, i) => {
            return (
              <li className="m-4" key={routes}>
                {routes}
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
