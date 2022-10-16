import { LayoutProps } from './types';

import { TasksContext } from '../../context/TasksContext';
import { tasks } from '../../context/TasksData';

import styles from './styles.module.scss';
import { useState } from 'react';
import { ITask } from '../../types/ITasks';

const { Wrapper, wrapperMain } = styles;

export const Layout = ({ children }: LayoutProps) => {
  const [tasksData, setData] = useState<ITask[]>(tasks);
  const [isActive, setIsActive] = useState(false)
  
  const idCurrenActiveTask = tasksData.filter(
    ({ status }) => status === 'active',
  );
  const id = idCurrenActiveTask[0].id;

  const [idTask, setIdTask] = useState(id);

  const currentTask = (index: number) => {
    setIdTask(index);
  };

  const updateContextBusinessStatus = (bussinessContextId: number) => {

    const newArr = tasks.map((item, index) => {
      if (index === idTask) {
        item.bussinessContext[bussinessContextId].status = 'read';
      }
      return item;
    });

    setData(newArr);
  };


  return (
    <div className={Wrapper}>
      <TasksContext.Provider
        value={{ tasksData, currentTask, idTask, updateContextBusinessStatus, isActive }}>
        <main className={wrapperMain}>{children}</main>
      </TasksContext.Provider>
    </div>
  );
};
