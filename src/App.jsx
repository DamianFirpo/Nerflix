
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Peliculas</h1>
        </Link>      
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>            
          </Route>
          <Route path="/" element={<LandingPage/>}>
            <Route path="*" element= {<Navigate replace to="/"/>} />            
          </Route>
        </Routes>
      </main>
    </Router>
  );
}