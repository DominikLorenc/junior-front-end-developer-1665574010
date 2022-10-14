import { ITask } from '../../../types/ITasks';
import { ApprovedSVG, LockedSVG, ArrowSVG } from '../../../assets/SVG';

export const useTasks = (tasks: ITask[]) => {
  const praparedTaskWithIcon = tasks.map((task) => {
    switch (task.status) {
      case 'done':
        return { ...task, icon: ApprovedSVG, };
      case 'active':
        return { ...task, icon: ArrowSVG };

      case 'locked':
        return { ...task, icon: LockedSVG };
      default:
        throw new Error('not found status');
    }
  });

  return {
    praparedTaskWithIcon,
  };
};
