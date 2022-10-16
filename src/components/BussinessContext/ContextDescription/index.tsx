import styles from './styles.module.scss';
import { Info } from './Info';
import { TasksContext } from '../../../context/TasksContext';
import { useContext } from 'react';

const {
  wrapper,
  wrapperTitle,
  wrapperDescription,
  wrapperDescriptionAvatar,
  wrapperDescriptionContext,
  wrapperDescriptionContextText,
} = styles;

export const ContextDescription = () => {
  const { tasksData, idTask, idCard } = useContext(TasksContext);

  const { title, description, avatar } =
    tasksData[idTask].bussinessContext[idCard];
  return (
    <div className={wrapper}>
      <h1 className={wrapperTitle}>{title}</h1>
      <div className={wrapperDescription}>
        <div className={wrapperDescriptionAvatar}>
          <img src={avatar.url} alt={avatar.alt} />
        </div>
        <div className={wrapperDescriptionContext}>
          <Info />
          <div className={wrapperDescriptionContextText}>{description}</div>
        </div>
      </div>
    </div>
  );
};
