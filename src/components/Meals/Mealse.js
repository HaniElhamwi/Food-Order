import { Fragment } from "react";
import AvaliableMeals from "./AvailableMeals";
import MelasSummary from "./MelasSummary";
const Mealse = (props) => {
  return (
    <Fragment>
      <MelasSummary />
      <AvaliableMeals />
    </Fragment>
  );
};
export default Mealse;
