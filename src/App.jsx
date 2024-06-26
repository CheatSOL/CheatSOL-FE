import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/Landing";
import MainPage from "./pages/main/Main";
import Socialpage from "./pages/social/Social";
import Maintab from "./pages/stock/detail/maintab/Maintab";
import KeywordPage from "./pages/keyword/Keyword";
import StockPage from "./pages/stock/Stock";
import StockDetail from "./pages/stock/detail/StockDetail";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store/store";
import ErrorBoundaryWrapper from "./components/common/error/ErrorBoundary";
import ErrorPage from "./components/common/error/ErrorPage";
import NotFoundPage from "./components/common/error/NotFoundPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ErrorBoundaryWrapper>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/main/social" element={<Socialpage />} />
                <Route path="/main/stock" element={<StockPage />} />
                <Route path="/main/stocks/:id/main" element={<Maintab />} />
                <Route path="/main/keyword" element={<KeywordPage />} />
                <Route path="/main/stocks/detail" element={<StockDetail />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ErrorBoundaryWrapper>
          </Router>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
