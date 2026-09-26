import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArchivedPage = () => {
    const [archivedCirculars, setArchivedCirculars] = useState([]);

    useEffect(() => {
        const fetchArchivedCirculars = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/circulars/archived');
                setArchivedCirculars(response.data);
            } catch (error) {
                console.error('Error fetching archived circulars:', error);
            }
        };
        fetchArchivedCirculars();
    }, []);

    return (
        <div>
            <h2>Archived Circulars</h2>
            <ul>
                {archivedCirculars.map((circular) => (
                    <li key={circular.id} style={{ marginBottom: '10px' }}>
                        <a href={circular.url} target="_blank" rel="noopener noreferrer">
                            {circular.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArchivedPage;
