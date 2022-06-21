import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Mealse from "./components/Meals/Mealse";
import Card from "./components/Cart/Card";
import CartProvider from "./store/CartProvider";

function App() {
  const [cardOpened, setCardOpened] = useState(false);

  const showCartHandler = () => {
    setCardOpened(true);
  };
  const closeCartHandler = () => {
    setCardOpened(false);
  };

  return (
    <CartProvider>
      {cardOpened && <Card closeCard={closeCartHandler} />}
      <Header showCard={showCartHandler} />
      <main>
        <Mealse />
      </main>
    </CartProvider>
  );
}

export default App;
