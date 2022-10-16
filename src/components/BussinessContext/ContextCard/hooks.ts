import { ITask } from '../../../types/ITasks';

export const useContextCard = (
  dataTask: ITask[],
  idTask: number,
  setCurrentCard: (index: number) => void,
) => {
  const findedTasks = dataTask.filter((task) => task.id === idTask);

  const activeTask = dataTask.filter((task) => task.status === 'active');

  const tasks = findedTasks.length === 0 ? activeTask : findedTasks;

  const handleClick = (i: number) => {
    setCurrentCard(i);
    tasks.map((task) => {
      task.bussinessContext.map((element) => {
        if (element.status === 'active') {
          element.status = 'read';
        }
        if (element.id === i) {
          element.status = 'active';
        }
      });

      return task;
    });
  };
  return {
    tasks,
    handleClick,
  };
};
