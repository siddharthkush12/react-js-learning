import useCurrencyInfo from "./hooks/currencyInfo";

function App() {
  const { data } = useCurrencyInfo("USD");

//   if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data) return <p>Loading...</p>; // ✅ Prevents calling Object.keys() on null

  return (
    <ul>
      {Object.keys(data).map((key) => (
        <li key={key}>{key}: {data[key]}</li>
      ))}
    </ul>
  );
}

export default App;