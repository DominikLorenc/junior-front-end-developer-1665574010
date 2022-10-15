import {ITask} from '../../../types/ITasks'

export const useContextCard = (dataTask: ITask[], idTask: number ) => {

    const findedTasks = dataTask.filter(task => task.id === idTask)

    return {
        findedTasks
    }
}