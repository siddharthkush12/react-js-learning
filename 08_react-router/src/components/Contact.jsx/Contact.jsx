import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="p-40 py-auto flex jsutify-between">
        <div className="bg-gray-200 rounded-2xl p-6">
          <h2 className="text-3xl font-bold">Get in touch:</h2>
          <p className="py-2">Fill the form to start the conversation</p>
          <div className="py-9 space-y-3 text-gray-900">
            <p className="flex items-center">
              <CiLocationOn className="text-2xl mr-2" />
              AcmeInc, Street, State, Postal Code
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-2xl mr-2" />
              +91 7380339254
            </p>
            <p className="flex items-center">
              <CiMail className="text-2xl mr-2" />
              Siddharthkush12@gmail.com
            </p>
          </div>
        </div>
        <div className="p-6 ml-10">
          <form action="submit" className="flex flex-col gap-5">
            <input type="text" placeholder="Full Name" className="border-1 border-gray-400 text-[15px] rounded-xl p-3  w-80" />
            <input type="text" placeholder="Email" className="border-1 border-gray-400 text-[15px] rounded-xl p-3  w-80" />
            <input type="text" placeholder="Telephone Number" className="border-1 border-gray-400 text-[15px] rounded-xl p-3  w-80" />
            <button className="bg-yellow-500 rounded-2xl py-3 text-2xl">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
