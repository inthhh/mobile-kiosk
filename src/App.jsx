import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Interfaces/Main";
import OrderBurger1 from "./Interfaces/OrderPage/OrderBurger1";
import OrderBurger2 from "./Interfaces/OrderPage/OrderBurger2";
import OrderBurger3 from "./Interfaces/OrderPage/OrderBurger3";

function App() {
  return (
    <Router>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/OrderBurger1" element={<OrderBurger1 />} />
          <Route path="/OrderBurger2" element={<OrderBurger2 />} />
          <Route path="/OrderBurger3" element={<OrderBurger3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
