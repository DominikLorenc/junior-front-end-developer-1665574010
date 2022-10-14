import { createContext } from 'react';
import { ITask } from '../types/ITasks';

interface IContext {
  tasksData: ITask[];
  currentTask: (index: number) => void;
  idTask: number
}

const initState = {
    tasksData: [] as ITask[],
    currentTask: () => {},
    idTask: 0,
}

export const TasksContext = createContext<IContext>(initState);
