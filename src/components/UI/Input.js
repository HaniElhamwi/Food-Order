import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor="amount">{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});
export default Input;
