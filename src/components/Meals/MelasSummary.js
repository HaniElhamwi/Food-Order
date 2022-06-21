import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Deelicious food, Delivered to you </h2>
      <p>
        choose your favourite meal from our broad selection of avaliable mealse
        and enjoy a delicoius lunch or dinner at home
      </p>
      <p>
        {" "}
        All our meals are cooked with high-quality ingredients ,just-in-time and
        of course by experiend chef!
      </p>
    </section>
  );
};
export default MealsSummary;
