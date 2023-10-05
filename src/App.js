import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Header from "./Header";
import Footer from "./Footer";

const tg = window.Telegram.WebApp;

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="wrapper">
              {tg.expand()}
              {tg.enableClosingConfirmation()}
              <Header />
              <Products />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="/products/:productId"
          element={
            <>
              <ProductDetail />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
