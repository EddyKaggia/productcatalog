import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Catalog from "./components/Catalog";

function App() {
  return;
  <Router>
    <Routes>
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  </Router>;
}

export default App;
