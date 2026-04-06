import BookCard from './BookCard.jsx';

const BookList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;