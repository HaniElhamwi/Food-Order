import CartIcon from "../Cart/CardIcon";
import classe from "./HeaderCard.module.css";
import CartContext from "../../store/cart-content";
import { useContext } from "react";
const HeaderCard = (props) => {
  const cartCnx = useContext(CartContext);
  const nummberOfItems = cartCnx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={classe.buttoni} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classe.badge}>{nummberOfItems}</span>
    </button>
  );
};
export default HeaderCard;
