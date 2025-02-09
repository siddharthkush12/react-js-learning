import { useState } from "react";
import React from "react";

function App() {
  let [color, setColor] = useState("grey");

  return (
    <>
      <div className="p-4 w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed inset-x-0 top-40 flex flex-wrap justify-center items-center font-bold text-4xl text-amber-700">Background Color Changer</div>
        <div className="fixed bottom-30 inset-x-0 flex flex-wrap justify-center items-center">
          <div className="flex justify-center items-center bg-white px-3 py-2 rounded-2xl gap-3 shadow-lg">
            <div className="bg-red-500 rounded-2xl px-6 py-2 " onClick={
              ()=>setColor("red")
            }>Red</div>
            <div className="bg-green-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("green")}
            }>Green</div>
            <div className="bg-blue-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("blue")}
            }>Blue</div>
            <div className="bg-lime-900 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("lime")}
            }>Olive</div>
            <div className="bg-gray-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("gray")}
            }>Gray</div>
            <div className="bg-yellow-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("yellow")}
            }>Yellow</div>
            <div className="bg-pink-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("pink")}
            }>Pink</div>
            <div className="bg-purple-500 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("purple")}
            }>Purple</div>
            <div className="bg-white rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("white")}
            }>white</div>
            <div className="bg-black text-amber-50 rounded-2xl px-6 py-2 " onClick={
              ()=>{setColor("black")}
            }>
              Black
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
