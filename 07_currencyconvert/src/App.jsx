import React, { useState } from "react";
import InputBox from "./components/InputBox";
import currencyInfo from "./hooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertAmount] = useState(0);

  const currencydata = currencyInfo(from);
  if (!currencydata) return <p>Loading...</p>;
  console.log(currencydata);

  const currencyKeys = Object.keys(currencydata);

  const convertMath = () => {
    setConvertAmount(amount * currencydata[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="bg-cover bg-cente h-screen flex justify-start items-center"
      style={{ backgroundImage: "url('back.jpg')" }}
    >
      <div className="w-[700px] mx-10 top-1/2 bg-gray-500 p-5 rounded-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertMath();
          }}
        >
          <div className="flex mx-auto flex-col gap-5 relative">
            <InputBox
              labels={from}
              amount={amount}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              currencyItems={currencyKeys}
              selectCurrency={from}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60px] bg-blue-500 text-white rounded-xl p-2 text-center cursor-pointer text-xl"
              onClick={swap}
            >
              Swap
            </div>
            <InputBox
              labels={to}
              amount={convertedAmount}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              currencyItems={currencyKeys} 
              selectCurrency={to}
            />

            <button
              className="bg-blue-500 text-white rounded-2xl p-3 text-center text-2xl cursor-pointer"
              type="submit"
            >
              Convert {from} to {to}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
