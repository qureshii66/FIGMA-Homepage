// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom"; // Use react-router-dom
// import { MdOutlineSegment } from "react-icons/md";
// import { IoMdClose } from "react-icons/io";

// export default function Navbar() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navLinks = [
//     { to: "/", label: "HOME" },
//     { to: "#", label: "HOMEft" },
//     { to: "#", label: "Gallery" },
//     { to: "#", label: "CONTACT" },
//     { to: "#", label: "Wallet" },
//   ];

//   const toggleDropdown = (e) => {
//     e.stopPropagation(); // Prevent event propagation
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="bg-transparent flex items-center justify-between px-5 md:px-12 xl:px-24 py-1 fixed top-0 left-0 right-0 z-10 w-full my-4">
//       <Link to="/" className="font-bold text-xl focus:outline-none">
//         Home
//       </Link>

//       {/* Desktop Navigation Links */}
//       <ul className="hidden md:flex p-3  space-x-2 ml-6 w-full justify-evenly">
//         {navLinks.map(({ to, label }, index) => (
//           <li
//             key={to}
//             className={`${
//               index === navLinks.length - 1
//                 ? "bg-black text-white py-0 px-3 cursor-pointer space-x-4"
//                 : ""
//             }`}
//           >
//             <NavLink
//               to={to}
//               className="hover:text-primary text-xl text-textColor"
//             >
//               {label}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Toggle Button */}
//       <button
//         onClick={toggleDropdown}
//         className="md:hidden focus:outline-none ml-auto"
//       >
//         {dropdownOpen ? (
//           <IoMdClose className="text-2xl" />
//         ) : (
//           <MdOutlineSegment className="text-2xl" />
//         )}
//       </button>

//       {/* Dropdown Menu (Mobile) */}
//       {dropdownOpen && (
//         <ul className="md:hidden absolute bg-white py-2 px-4 w-full top-full left-0">
//           {navLinks.map(({ to, label }) => (
//             <li key={to}>
//               <NavLink to={to} className="block py-2 text-base">
//                 {label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// }

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Use react-router-dom
import { MdOutlineSegment } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "#", label: "HOMEft" },
    { to: "#", label: "Gallery" },
    { to: "#", label: "CONTACT" },
    { to: "#", label: "Wallet" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-transparent flex items-center justify-between px-5 md:px-12 xl:px-24 py-1 fixed top-0 left-0 right-0 z-10 w-full my-4">
      <Link to="/" className="font-bold text-xl focus:outline-none ml-14 w-1/2 ">
        Home
      </Link>

      <ul className="hidden md:flex p-3 space-x-2 ml-6 w-full justify-evenly ">
        {navLinks.map(({ to, label }, index) => (
          <li
            key={to}
            className={`${
              index === navLinks.length - 1
                ? "bg-black text-white py-0 px-3  cursor-pointer space-x-4"
                : ""
            }`}
          >
            <NavLink
              to={to}
              className="hover:text-primary text-xl text-textColor"
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleDropdown}
        className="focus:outline-none md:hidden ml-auto"
      >
        {dropdownOpen ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <MdOutlineSegment className="text-2xl" />
        )}
      </button>

      {/* Dropdown Menu (Mobile) */}
      {dropdownOpen && (
        <ul className="md:hidden absolute bg-white py-2 px-4 w-full top-full left-0 ml-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className="block py-2 text-base">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
