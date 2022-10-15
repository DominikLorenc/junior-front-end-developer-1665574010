import { ContextCard } from '../ContextCard';
import { ContextDescription } from '../ContextDescription';
import styles from './styles.module.scss';
const { wrapper, wrapperTasks } = styles;

export const Context = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperTasks}>
        <ContextCard/>
      </div>
      <ContextDescription/>
    </div>
  );
};
