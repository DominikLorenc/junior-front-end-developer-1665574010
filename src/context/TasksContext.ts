import { createContext } from 'react';
import { ITask } from '../types/ITasks';

interface IContext {
  tasksData: ITask[];
  currentTask: (index: number) => void;
  updateContextBusinessStatus: (index: number) => void;
  idTask: number;
  setCurrentCard: (index: number) => void;
  idCard: number;
}

const initState = {
  tasksData: [] as ITask[],
  currentTask: () => {},
  updateContextBusinessStatus: () => {},
  idTask: 0,
  setCurrentCard: () => {},
  idCard: 0
};

export const TasksContext = createContext<IContext>(initState);
