import css from "./HomeContent.module.css";
import { NavLink } from "react-router-dom";

export const HomeContent = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        The road to the <span>depths</span> of the human soul
      </h1>
      <p className={css.text}>
        We help you to reveal your potential, overcome challenges and find a
        guide in your own life with the help of our experienced psychologists.
      </p>
      <NavLink className={css.button} to="/psychologists">
        <span>Get started</span>
      </NavLink>
    </div>
  );
};
