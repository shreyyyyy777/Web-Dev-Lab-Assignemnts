import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Enter country name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '250px' }}
      />

      <button
        onClick={() => onSearch(query)}
        style={{
          padding: '10px 15px',
          marginLeft: '10px',
          backgroundColor: 'teal',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;