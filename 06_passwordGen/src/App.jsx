import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*_-+=~`'";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);

  const passref = useRef(null);

  const copyPassToClipboard = useCallback(() => {
    passref.current?.select();        // To highlight select
    // passref.current?.setSelectionRange(0,3);               //To select range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full h-screen bg-black">
      <div className="fixed inset-x-0 top-30 flex flex-wrap justify-center items-center p-15">
        <div className="flex-wrap justify-center items-center p-7 bg-gray-700  rounded-2xl">
          <div className="flex text-2xl">
            <input
              type="text"
              value={password}
              ref={passref}
              className="w-130 bg-white  rounded-l-2xl p-3 "
            />
            <div
              onClick={copyPassToClipboard}
              className="bg-blue-500 p-5 pr-9 cursor-pointer rounded-r-2xl text-white"
            >
              Copy
            </div>
          </div>
          <div className=" flex p-7 gap-5 text-2xl justify-center items-center">
            <label className="flex items-center gap-5 text-green-400">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="scale-120 cursor-pointer "
              />
              {`Length(${length})`}
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
                className="scale-150 cursor-pointer"
              />
              Numbers
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
                className="scale-150 cursor-pointer"
              />
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
