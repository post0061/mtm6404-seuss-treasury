import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const API = "https://seussology.info/api/quotes/random/10";

  const fetchQuotes = async () => {
    await fetch(API)
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center mb-4">Dr. Seuss Quotes</h1>
      <div className="row">
        {quotes.map((quote, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm p-3">
              <p className="text-dark">"{quote.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;