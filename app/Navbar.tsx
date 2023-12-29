"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-between ">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {navItems.map(({ id, path, title }) => (
          <Link
            key={id}
            className={classnames({
              "text-gray-950": currentPath === path,
              "text-gray-500": currentPath !== path,
              "hover:text-gray-950": true,
            })}
            href={path}
          >
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
const navItems = [
  {
    id: 1,
    path: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    path: "/issues",
    title: "Issues",
  },
];
