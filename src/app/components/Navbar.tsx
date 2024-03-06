"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-white shadow-md shadow-gray-100 fixed top-0 w-full">
      <div className="container m-auto px-4">
        <div className="nav flex justify-between items-center py-4">
          <div className="logo flex-none">
            <Image src="/logo.png" width={44} height={37} alt="Near me logo" />
          </div>
          <div
            className="toggle ml-auto md:hidden text-3xl"
            onClick={toggleMenu}
          >
            {toggle === true ? <MdClose /> : <MdMenu />}
          </div>
          <div
            className={`nav-menu fixed md:static w-[300px] md:w-auto p-4 md:p-0 top-[70px] ${
              toggle === true ? "active" : ""
            } transition-all flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 bg-white h-screen md:h-auto`}
          >
            <Link href="#" className="nav-link hover:text-primary">
              Home
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              Timeline
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              Offers
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              Map
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              FAQ
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              Contact Us
            </Link>
            <Link href="#" className="nav-link hover:text-primary">
              My Vi Stores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
