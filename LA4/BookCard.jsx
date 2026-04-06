const BookCard = ({ book }) => {
  return (
    <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
      {book.image && <img src={book.image} alt="" />}
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Publisher:</b> {book.publisher}</p>
      <p><b>Year:</b> {book.year}</p>
    </div>
  );
};

export default BookCard;