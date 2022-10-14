import { LayoutProps } from './types';

import { TasksContext } from '../../context/TasksContext';
import { tasksData } from '../../context/TasksData';

import styles from './styles.module.scss';
import { useState } from 'react';

const { Wrapper } = styles;

export const Layout = ({ children }: LayoutProps) => {
  const [idTask, setIdTask] = useState(0);

  const currentTask = (index: number) => {
    setIdTask(index);
  };

  return (
    <div className={Wrapper}>
      <TasksContext.Provider value={{ tasksData, currentTask, idTask}}>
        <main>{children}</main>
      </TasksContext.Provider>
    </div>
  );
};
