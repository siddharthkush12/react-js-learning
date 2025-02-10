import React from "react";

function InputBox({
  labels,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyItems = [],
  selectCurrency = "USD",
}) {
  return (
    <div className="bg-white rounded-2xl p-3">
      <div className="flex justify-between px-3 text-[20px] text-gray-500">
        <div>{labels}</div>
        <div>Currency Type</div>
      </div>
      <div className="flex justify-between items-center px-3 pt-2 text-[20px] text-black">
        <input
          type="text"
          className="focus:outline-none"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
        <select
          className="border border-gray-400 bg-gray-200 px-3 rounded-[7px] cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyItems.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
