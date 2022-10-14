import styles from './styles.module.scss';
import { Tasks } from './Tasks';
const { wrapper, wrapperTitle, wrapperTasks } = styles;

export const ListTasks = () => {
  return (
    <div className={wrapper}>
      <h1 className={wrapperTitle}>Your tasks</h1>
      <div className={wrapperTasks}>
        <Tasks />
      </div>
    </div>
  );
};
