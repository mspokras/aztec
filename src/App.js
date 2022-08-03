import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";

function App() {
  //1. Fetch data from the database
  const { productItems } = Data;

  const [cartItems, setCartItems] = useState([]);

  // 2. Find the right product in the data and match its id with the desired product to purchase
  const addToCart = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const deleteCartItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              deleteCartItem={deleteCartItem}
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
