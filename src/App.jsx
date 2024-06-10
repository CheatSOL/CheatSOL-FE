import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import MainPage from "./pages/main/Main";
import Socialpage from "./pages/social/Social";
import StockPage from "./pages/stock/Stock";
import KeywordPage from "./pages/keyword/Keyword";
import StockDetailPage from "./pages/stock/detail/Stock.detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/main/social" element={<Socialpage />}></Route>
        <Route path="/main/stock" element={<StockPage />}></Route>
        <Route path="/main/stocks/:id" element={<StockDetailPage />}></Route>
        <Route path="/main/keyword" element={<KeywordPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
