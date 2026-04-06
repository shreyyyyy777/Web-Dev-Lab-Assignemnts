export const fetchBooks = async (query) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await res.json();

  return (data.items || []).map(book => {
    const info = book.volumeInfo || {};

    return {
      id: book.id,
      title: info.title || "No Title",
      author: info.authors?.[0] || "Unknown",
      publisher: info.publisher || "N/A",
      year: info.publishedDate || "N/A",
      image: info.imageLinks?.thumbnail || ""
    };
  });
};