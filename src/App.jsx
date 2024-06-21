import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import MainPage from "./pages/main/Main";
import Socialpage from "./pages/social/Social";
import Maintab from "./pages/stock/detail/maintab/Maintab";
import KeywordPage from "./pages/keyword/Keyword";
import Newstab from "./pages/stock/detail/newstab/Newstab";
import StockPage from "./pages/stock/Stock";
import StockDetail from "./pages/stock/detail/StockDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import Pricetab from "./pages/stock/detail/pricetab/Pricetab";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/main/social" element={<Socialpage />} />
              <Route path="/main/stock" element={<StockPage />} />
              <Route path="/main/stocks/:id/main" element={<Maintab />} />
              <Route path="/main/keyword" element={<KeywordPage />} />
              <Route path="/main/stocks/:id/dailyprice" element={<Pricetab />} />
              <Route path="/main/stocks/:id/news" element={<Newstab />} />
              <Route path="/main/stocks/:id" element={<StockDetail />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
