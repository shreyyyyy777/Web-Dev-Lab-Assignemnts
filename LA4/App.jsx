import { useState } from 'react';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import BookList from './components/BookList.jsx';
import { fetchBooks } from './utils/api.js';

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    const data = await fetchBooks(query);
    setBooks(data);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default App;