import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const inputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const entetedAmount = inputRef.current.value;
    const enteredAmountNumber = +entetedAmount;
    if (
      entetedAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.addToCart(enteredAmountNumber);
  };
  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        label="amount"
        ref={inputRef}
        input={{
          id: "amound" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
