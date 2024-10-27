/* eslint-disable react/prop-types */

import { PsychologiesListItem } from "../PsychologiesListItem/PsychologiesListItem";
import css from "./PsychologiesList.module.css";

export const PsychologiesList = ({ psychologists, filters }) => {
  const filteredPsychologists = (psychologists, filters) => {
    switch (filters) {
      case "A to Z":
        return psychologists
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));

      case "Z to A":
        return psychologists
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      case "Less than 175$":
        return psychologists.filter((item) => item.price_per_hour < 175);
      case "Greater than 175$":
        return psychologists.filter((item) => item.price_per_hour > 175);
      case "Popular":
        return psychologists.slice().sort((a, b) => b.rating - a.rating);
      case "Not popular":
        return psychologists.slice().sort((a, b) => a.rating - b.rating);
      default:
        return psychologists;
    }
  };
  const items = filteredPsychologists(psychologists, filters);

  return (
    <ul className={css.container}>
      {items.map((item, idx) => (
        <PsychologiesListItem key={idx} item={item} />
      ))}
    </ul>
  );
};
