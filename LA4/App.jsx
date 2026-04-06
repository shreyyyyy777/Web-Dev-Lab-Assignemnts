import { useState } from 'react';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import CountryList from './components/CountryList.jsx';
import { fetchCountries } from './utils/api.js';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    try {
      setError("");
      const data = await fetchCountries(query);
      setCountries(data);
    } catch (err) {
      setError("Country not found");
      setCountries([]);
    }
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />

      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      <CountryList countries={countries} />
    </div>
  );
}

export default App;