import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import css from "./PsychologiesFilters.module.css";

import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/filtersSlice";

export const PsychologiesFilters = () => {
  const [selectedOption, setSelectedOption] = useState("A to Z");
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const options = [
    "A to Z",
    "Z to A",
    "Less than 175$",
    "Greater than 175$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    dispatch(setFilter(option));
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={css.container}>
      <p className={css.filterTitle}>Filters</p>
      <div className={css.customSelect} ref={selectRef}>
        <div className={css.selectSelected} onClick={toggleSelect}>
          <p>{selectedOption}</p>{" "}
          {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>
        {isOpen && (
          <div className={css.selectItems}>
            {options.map((option) => (
              <div
                key={option}
                className={css.selectItem}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
