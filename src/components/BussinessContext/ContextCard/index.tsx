import { cx } from '../../../utils';
import styles from './styles.module.scss';
import { useContext, useState, useRef } from 'react';
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
  const { tasksData, idTask, updateContextBusinessStatus } =
    useContext(TasksContext);
  const { findedTasks, activeTask } = useContextCard(tasksData, idTask);
  const [active, setActive] = useState('');

  let tasks = findedTasks.length === 0 ? activeTask : findedTasks;

  const handleClick = (e: any, i: number) => {
    const newArrWithNewStatus = tasks.map((task, index) => {
      
      task.bussinessContext.map((element, index) => {
        if(element.status === 'active') {
          element.status = 'read'
        }
        if(element.id === i){
          element.status = 'active'
        }
      })
     
      return task;
    });


  };

  return (
    <div className="outerWrapper">
      {tasks[0].bussinessContext.map(
        ({ status, author, description, date, title, id }) => {
          return (
            <div
              onClick={(e) => {
                updateContextBusinessStatus(id);
                handleClick(e, id);
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
    </div>
  );
};
