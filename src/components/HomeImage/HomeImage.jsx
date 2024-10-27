import { FaQuestion } from 'react-icons/fa6';
import { MdPeopleAlt } from 'react-icons/md';
import { CgCheck } from 'react-icons/cg';
import css from './HomeImage.module.css';

export const HomeImage = () => {
  return (
    <div className={css.wrapper}>
      <img
        src="../src/assets/woman.png"
        alt="psychological consultations"
        width={464}
        height={526}
        className={css.img}
      />
      <div className={css.peopleDiv}>
        <div className={css.peopleIcon}>
          <MdPeopleAlt size={20} color="#FBFBFB" />
        </div>
      </div>
      <div className={css.questionDiv}>
        <div className={css.questionIcon}>
          <FaQuestion size={17} color="#FBFBFB" />
        </div>
      </div>
      <div className={css.mainDiv}>
        <div className={css.check}>
          <CgCheck color="#54be96" size={44} />
        </div>
        <div className={css.mainDivWrapper}>
          <p className={css.text}>Experienced psychologists</p>
          <p className={css.price}>15,000</p>
        </div>
      </div>
    </div>
  );
};