import React, { Fragment } from "react";
import classe from "./Header.module.css";
import MealImage from "../../assets/meals.jpg";
import HeaderCard from "./HeaderCard";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classe.header}>
        <h1>ReactMeals</h1>
        {/* <div
          onClick={() => {
            props.showCard();
          }}
        > */}
        <HeaderCard onClick={props.showCard} />
        {/* </div> */}
      </header>
      <div className={classe["main-image"]}>
        <img src={MealImage} alt="delicious food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
