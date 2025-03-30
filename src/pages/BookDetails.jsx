import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBookData = async (id) => {
    await fetch(`https://seussology.info/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error("Error fetching book details:", err));
  };

  useEffect(() => {
    fetchBookData(id);
  }, [id]);

  if (!book) return <p className="text-center text-muted">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        <div className="col-12 col-md-5 text-center">
          <img
            src={book.image}
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-12 col-md-7">
          <h1 className="text-primary">{book.title}</h1>
          <p className="text-muted">{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;