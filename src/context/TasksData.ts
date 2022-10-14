import { ITask } from '../types/ITasks';

export const tasksData: ITask[] = [
  {
    id: 1,
    taskName: 'Application Setup',
    status: 'done',
    bussinessContext: [
      {
        status: 'new',
        author: 'Olga Nelson',
        date: 'Dec 17',
        title: 'New sprint, tasks and intro information.',
        description:
          'Hi Eric, congratulations on completing the previous assignment. This time you will have to focus o Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: '12:20',
      },
    ],
  },
  {
    id: 2,
    taskName: 'Static Books List',
    status: 'done',
  },
  {
    id: 3,
    taskName: 'Administration Panel',
    status: 'done',
  },
  {
    id: 4,
    taskName: 'Connect Admin with Frontend',
    status: 'active',
  },
  {
    id: 5,
    taskName: 'Book Review Feature',
    status: 'locked',
  },
];
