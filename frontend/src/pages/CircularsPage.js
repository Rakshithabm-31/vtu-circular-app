import React, { useEffect, useState } from 'react';

const CircularList = () => {
  const [circulars, setCirculars] = useState([]);

  useEffect(() => {
    console.log("Fetching circulars...");
    fetch('http://localhost:3000/api/circulars')
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);  // This logs the data you received from the backend
        if (Array.isArray(data)) {
          setCirculars(data);  // If it's an array, set the circulars data
        } else {
          console.error('Expected an array, but got:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
