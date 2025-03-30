import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              Seussology
            </NavLink>
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">
                Books
              </NavLink>
              <NavLink to="/quotes" className="nav-link">
                Quotes
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;