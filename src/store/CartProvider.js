import CartContext from "./cart-content";
import { useReducer } from "react";

const dafualtState = {
  items: [],
  totalAmount: 0,
};
const cartReduer = (state, action) => {
  if (action.type === "ADD") {
    // console.log("hani");
    const existingCartItemIndex = state.items.findIndex(
      (element) => element.id === action.item.id
    );
    // console.log()
    // console.log("hala");

    console.log(existingCartItemIndex);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      // let updatedItem;
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (element) => element.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItem;
    if (existingCartItem.amount === 1) {
      updatedItem = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedelement = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItem = [...state.items];
      updatedItem[existingCartItemIndex] = updatedelement;
    }
    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  }
  return dafualtState;
};

const CartProvider = (props) => {
  const [cartState, dipatchCartAction] = useReducer(cartReduer, dafualtState);

  const addItemToCardHandler = (item) => {
    dipatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHanlder = (id) => {
    dipatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCartHanlder,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
