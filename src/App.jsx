import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Interfaces/Main";
import OrderBurger1 from "./Interfaces/OrderPage/OrderBurger1";

function App() {
  return (
    <Router>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/OrderBurger1" element={<OrderBurger1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
