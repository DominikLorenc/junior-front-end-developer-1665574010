import { useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';
import { cx } from '../../../utils';
import { useTasks } from './hooks';
import styles from './styles.module.scss';
const {
  wrapper,
  wrapperIcon,
  wrapperIconActive,
  wrapperLabel,
  wrapperLocked,
  wrapperLabelActive,
} = styles;

export const Tasks = () => {
  const { tasksData, currentTask, idTask } = useContext(TasksContext);
  const { praparedTaskWithIcon } = useTasks(tasksData);



  return (
    <>
      {praparedTaskWithIcon.map(({ taskName, icon, status, id }) => (
        <div
          key={id}
          onClick={() => currentTask(id)}
          className={cx(wrapper, status === 'locked' ? wrapperLocked : '')}>
          <div
            className={
              status === 'active'
                ? `${wrapperIcon} ${wrapperIconActive}`
                : wrapperIcon
            }>
            {icon()}
          </div>
          <p
            className={cx(
              wrapperLabel,
              status === 'active' ? wrapperLabelActive : '',
            )}>
            {taskName}
          </p>
        </div>
      ))}
    </>
  );
};
