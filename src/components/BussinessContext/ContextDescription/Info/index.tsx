import styles from './styles.module.scss';
const { wrapper, wrapperAuthor, wrapperSeparator, wrapperDate, wrapperTime } =
  styles;

export const Info = () => {
  return (
    <div className={wrapper}>
      <p className={wrapperAuthor}>Author Author</p>
      <div className={wrapperSeparator}></div>
      <p className={wrapperDate}>Today, 17th December</p>
      <div className={wrapperSeparator}></div>
      <div className={wrapperTime}>11:29</div>
    </div>
  );
};
