import Link from "next/link";
import React from "react";
import {AiFillBug} from "react-icons/ai"
const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug/></Link>
      <ul className="flex space-x-6">
        <li>
          <Link className="text-gray-500 hover:text-gray-950" href="/">Dashboard</Link>
        </li>
        <li>
          <Link className="text-gray-500 hover:text-gray-950" href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
