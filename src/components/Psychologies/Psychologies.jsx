import { useDispatch, useSelector } from "react-redux";
import { PsychologiesFilters } from "../PsychologiesFilters/PsychologiesFilters";
import { PsychologiesList } from "../PsychologiesList/PsychologiesList";
import css from "./Psychologies.module.css";
import { fetchPsychol } from "../../redux/psychologies/psychologiesOps";
import { useState } from "react";
import { selectFilters, selectPsychologies } from "../../redux/selectors";
import { IoIosArrowUp } from "react-icons/io";

export const Psychologies = () => {
  const psychologists = useSelector(selectPsychologies);
  const filters = useSelector(selectFilters);

  const dispatch = useDispatch();
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [currentLimit, setCurrentLimit] = useState(6);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={css.container}>
      <PsychologiesFilters />
      <PsychologiesList psychologists={psychologists} filters={filters} />
      {isLoadMore && (
        <button
          className={css.button}
          onClick={async () => {
            const res = await dispatch(
              fetchPsychol({ startAt: 0, limit: currentLimit })
            );
            if (res.payload.length !== currentLimit)
              return setIsLoadMore(false);
            setCurrentLimit(currentLimit + 3);
          }}
        >
          Load more
        </button>
      )}
      <button
       onClick={handleTop} 
       className={css.buttonTop}
       >
        <IoIosArrowUp size="30px" />
       </button>
    </div>
  );
};
