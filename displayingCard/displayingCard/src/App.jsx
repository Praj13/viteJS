import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-8 flex border border-green-500 rounded-full">
      <h1 className="text-2xl font-bold mb-4 text-center">Data List</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700"><span className="font-semibold">User ID:</span> {item.userId}</p>
            <p className="text-gray-700"><span className="font-semibold">ID:</span> {item.id}</p>
            <h2 className="text-xl font-bold mt-2 mb-2">Title:{item.title}</h2>
            <p className="text-gray-600">desc:{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
