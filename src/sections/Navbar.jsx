import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Home", link: "#" },
    { name: "Products", link: "#product" },
    { name: "About Us", link: "#penjelasan" },
    { name: "Gallery", link: "#gallery" },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        
        {/* Brand */}
        <h1 className="text-xl font-bold">Good Skin Club</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6">
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={menu.link} className="font-semibold hover:text-amber-500 transition">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`md:hidden flex flex-col gap-4 mt-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {menus.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.link}
              className="block py-2 border-b hover:text-amber-500"
              onClick={() => setIsOpen(false)} // auto close
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}