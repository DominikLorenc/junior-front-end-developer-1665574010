import styles from './styles.module.scss';
import { TasksContext } from '../../../../context/TasksContext';
import { useContext } from 'react';
const { wrapper, wrapperAuthor, wrapperSeparator, wrapperDate, wrapperTime } =
  styles;

export const Info = () => {
  const { tasksData, idTask, idCard } = useContext(TasksContext);

  const { author, time, date } = tasksData[idTask].bussinessContext[idCard];
  return (
    <div className={wrapper}>
      <p className={wrapperAuthor}>{author}</p>
      <div className={wrapperSeparator}></div>
      <p className={wrapperDate}>{date}</p>
      <div className={wrapperSeparator}></div>
      <div className={wrapperTime}>{time}</div>
    </div>
  );
};
