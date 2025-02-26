import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/items").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <ul className="bg-white p-4 rounded-lg shadow-lg">
        {items.map((item) => (
          <li key={item.id} className="border-b py-2">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
