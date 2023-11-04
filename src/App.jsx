import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { MovieApp } from "./pages/movie-app/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/movie-app" element={<MovieApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
