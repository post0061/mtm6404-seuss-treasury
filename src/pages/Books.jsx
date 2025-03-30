import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const API = "https://seussology.info/api/books";

  const fetchBooks = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-primary mb-4">Dr. Seuss Books</h1>
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-md-4 mb-4">
            <Link to={`/book/${book.id}`} className="text-decoration-none">
              <div className="card shadow-sm">
                <img
                  src={book.image}
                  alt={book.title}
                  className="card-img-top"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;









