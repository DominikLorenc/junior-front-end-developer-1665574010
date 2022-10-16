import { createContext } from 'react';
import { ITask } from '../types/ITasks';

interface IContext {
  tasksData: ITask[];
  currentTask: (index: number) => void;
  updateContextBusinessStatus: ( index: number) => void;
  idTask: number,
  isActive: boolean
}

const initState = {
    tasksData: [] as ITask[],
    currentTask: () => {},
    updateContextBusinessStatus: () => {},
    idTask: 0,
    isActive: false
}

export const TasksContext = createContext<IContext>(initState);
