import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Catalog from "./components/catalog";

function App() {
  return (
    <Router>
      <Catalog />
    </Router>
  );
}

export default App;
