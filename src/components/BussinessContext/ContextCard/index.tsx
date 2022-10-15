import { cx } from '../../../utils';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import { useContextCard } from './hooks';

const {
  wrapper,
  wrapperInfo,
  wrapperInfoLabel,
  wrapperInfoAuthor,
  wrapperInfoSeparator,
  wrapperInfoDate,
  wrapperTitle,
  wrapperTitleNew,
  wrapperDescription,
} = styles;

export const ContextCard = () => {
  const { tasksData, idTask } = useContext(TasksContext);
  const { findedTasks } = useContextCard(tasksData, idTask);

 const task = findedTasks.length === 0 ? tasksData : findedTasks

  return (
    <>
      { task[0].bussinessContext?.map(
        ({ status, author, description, date, title, time, id }) => {
          return (
            <div key={id} className={wrapper}>
              <div className={wrapperInfo}>
                {status === 'new' && (
                  <div className={wrapperInfoLabel}>New</div>
                )}
                <p className={wrapperInfoAuthor}>{author}</p>
                <div className={wrapperInfoSeparator}></div>
                <p className={wrapperInfoDate}>{date}</p>
              </div>
              <h3 className={cx(wrapperTitle, status === 'new' ? wrapperTitleNew : '')}>
                {title}
              </h3>
              <p className={wrapperDescription}>
               {description}
              </p>
            </div>
          );
        },
      )}
    </>
  );
};
