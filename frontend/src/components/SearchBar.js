import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search circulars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
            />
        </div>
    );
};

export default SearchBar;
