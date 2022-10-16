import { cx } from '../../../utils';
import styles from './styles.module.scss';
import { useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import { useContextCard } from './hooks';

const {
  wrapper,
  wrapperNew,
  wrapperActive,
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
  const { tasksData, idTask, updateContextBusinessStatus, setCurrentCard } =
    useContext(TasksContext);
  const { tasks, handleClick } = useContextCard(
    tasksData,
    idTask,
    setCurrentCard,
  );

  return (
    <>
      {tasks[0].bussinessContext.map(
        ({ status, author, description, date, title, id }) => {
          return (
            <div
              onClick={() => {
                updateContextBusinessStatus(id);
                handleClick(id);
              }}
              key={id}
              className={cx(
                wrapper,
                status === 'new' ? wrapperNew : '',
                status === 'active' ? wrapperActive : '',
              )}>
              <div className={wrapperInfo}>
                {status === 'new' && (
                  <div className={wrapperInfoLabel}>New</div>
                )}
                <p className={wrapperInfoAuthor}>{author}</p>
                <div className={wrapperInfoSeparator}></div>
                <p className={wrapperInfoDate}>{date}</p>
              </div>
              <h3
                className={cx(
                  wrapperTitle,
                  status === 'new' ? wrapperTitleNew : '',
                )}>
                {title}
              </h3>
              <p className={wrapperDescription}>{description}</p>
            </div>
          );
        },
      )}
    </>
  );
};
