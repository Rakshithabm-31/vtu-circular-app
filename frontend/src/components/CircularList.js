import React, { useEffect, useState } from 'react';

const CircularList = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/circulars') // Fetch from backend API
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Log data to check it's correct
        setCirculars(data); // Set the circulars data in state
      })
      .catch((error) => console.error('Error fetching data:', error)); // Log any errors
  }, []);

  return (
    <div>
      <h2>VTU Circulars</h2>
      {circulars.length > 0 ? (
        circulars.map((circular) => (
          <div key={circular.id}>
            <h3>{circular.title}</h3>
            <a href={circular.url} target="_blank" rel="noopener noreferrer">
              View Circular
            </a>
          </div>
        ))
      ) : (
        <p>No circulars available</p>
      )}
    </div>
  );
};

export default CircularList;
