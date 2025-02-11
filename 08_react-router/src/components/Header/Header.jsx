import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
    
  return (
    <header className="sticky top-0 z-100">
      <nav className="bg-white shadow-sm shadow-gray-200 px-4 py-3 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center ">
            <img src="logoL.jpg" alt="" className="h-13 ml-2" />
          </Link>

          <div className="hidden justify-between items-center lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 ">
              <li>
                <NavLink to="/" className={({isActive})=>{
                    return `duration-300 ${isActive ? "text-yellow-600":"text-gray-500"} hover:text-yellow-600`
                }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="about" className={({isActive})=>{
                   return `duration-300 ${isActive ? "text-yellow-600":"text-gray-500"} hover:text-yellow-600`
                }}>About</NavLink>
              </li>
              <li>
                <NavLink to="contact" className={({isActive})=>{
                    return `duration-300 ${isActive ? "text-yellow-600":"text-gray-500"} hover:text-yellow-600`
                }}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="github" className={({isActive})=>{
                    return `duration-300 ${isActive ? "text-yellow-600":"text-gray-500"} hover:text-yellow-600`
                }}>Github</NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center text-gray-800 gap-2 font-medium lg:order-2 ">
            {/* '#' : not yet functioning */}
            <Link
              to="#"
              className=" hover:bg-gray-200 rounded-xl px-4 py-2.5 lg:px-5 lg:py-3"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-yellow-500 rounded-xl hover:bg-yellow-300 px-4 py-2.5 lg:px-5 lg:py-3"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
