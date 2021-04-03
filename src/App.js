import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <main className="container">
        <Route path="/" exact>
          {({ match }) => <Home show={match !== null} />}
        </Route>

        <Route path="/about">
          {({ match }) => <About show={match !== null} />}
        </Route>
        <Route path="/projects">
          {({ match }) => <Projects show={match !== null} />}
        </Route>
        <Route path="/contact">
          {({ match }) => <Contact show={match !== null} />}
        </Route>
      </main>

      <footer>&copy; 2021 - Mai Hoang Kim Le</footer>
    </Router>
  );
}
