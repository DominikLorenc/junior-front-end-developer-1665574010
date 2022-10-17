import { LayoutProps } from './types';

import { TasksContext } from '../../context/TasksContext';
import { tasks } from '../../context/TasksData';

import styles from './styles.module.scss';
import { useState} from 'react';
import { ITask } from '../../types/ITasks';

const { Wrapper, wrapperMain } = styles;

export const Layout = ({ children }: LayoutProps) => {
  const [tasksData, setData] = useState<ITask[]>(tasks);

  const [idCard, setIdCard] = useState(0);

  const setCurrentCard = (index: number) => {
    setIdCard(index);
  };

  const idCurrenActiveTask = tasksData.filter(
    ({ status }) => status === 'active',
  );
  const initIdTask = idCurrenActiveTask[0].id;

  const [idTask, setIdTask] = useState(initIdTask);

  const currentTask = (index: number) => {
    setIdCard(0)
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
        value={{
          tasksData,
          currentTask,
          idTask,
          updateContextBusinessStatus,
          setCurrentCard,
          idCard,
        }}>
        <main className={wrapperMain}>{children}</main>
      </TasksContext.Provider>
    </div>
  );
};
