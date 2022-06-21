import Modal from "../UI/Modal";
import style from "./Card.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-content";
import CartItem from "./CartItem";

const Card = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartAddHandler = (item) => {
    const newItem = { ...item, amount: 1 };
    cartCtx.addItem(newItem);
  };

  const cardItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((ele) => (
        <CartItem
          key={ele.id}
          price={ele.price}
          amount={ele.amount}
          name={ele.name}
          onAdd={cartAddHandler.bind(null, ele)}
          onRemove={cartRemoveHandler.bind(null, ele.id)}
        />
      ))}
    </ul>
  );
  console.log(cardItems);
  return (
    <Modal onClose={props.closeCard}>
      {cardItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button
          className={style["button--alt"]}
          onClick={() => {
            props.closeCard();
          }}
        >
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Card;
