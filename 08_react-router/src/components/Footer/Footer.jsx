import React from "react";
import { Link, NavLink } from "react-router";
import { RiCopyrightFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-y border-gray-300">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 lg:py-4">
        <div className="md:flex md:justify-between py-3">
          <div className="mb-6 md:mb-1">
            <Link to="/" className="flex items-center">
              <img src="logoL.jpg" alt="" className="h-18" />
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-col-2  text-gray-500">
            <div>
              <h2 className="font-medium text-gray-950 mb-4">Resources</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-gray-950 mb-4">Follow us</h2>
              <ul>
                <li>
                  <NavLink to="https://github.com/" target="_black">
                    Github
                  </NavLink>
                </li>
                <li>
                  <Link to="/">Discord</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-gray-950 mb-4">Legal</h2>
              <ul>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-300 my-5"/>

        <div className="flex justify-between items-center text-gray-500 text-sm">
            <div className="items-center flex">
                <RiCopyrightFill className="hidden lg:block"/>
                <p>2025 SiddharthKushwaha. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-5 mr-2">
                <NavLink><FaFacebookF /></NavLink>
                <NavLink><FaDiscord /></NavLink>
                <NavLink><FaXTwitter /></NavLink>
                <NavLink><FaGithub /></NavLink>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
