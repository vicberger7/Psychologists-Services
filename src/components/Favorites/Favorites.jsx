import { useSelector } from 'react-redux';
import { selectFavorites, selectFilters } from '../../redux/selectors';
import { PsychologiesFilters } from '../PsychologiesFilters/PsychologiesFilters';

import css from './Favorites.module.css';
import { PsychologiesList } from '../PsychologiesList/PsychologiesList';



export const Favorites = () => {
  const psychologists = useSelector(selectFavorites);
   const filters = useSelector(selectFilters);
  return (
    <div className={css.container}>
      { psychologists.length > 0 && <PsychologiesFilters />}
      <PsychologiesList psychologists = {psychologists} filters = {filters}/>
      { psychologists.length > 0 && <button className={css.button}>Load more</button> }
    </div>
  );
};