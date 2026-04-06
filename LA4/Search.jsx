import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;