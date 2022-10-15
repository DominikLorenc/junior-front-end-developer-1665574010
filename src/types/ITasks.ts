type AvailableStaus = 'done' | 'locked' | 'active';

interface Image {
  url: string;
  alt: string;
}

interface IBusinessContext {
  id: number;
  status?: string;
  author: string;
  date: string;
  title: string;
  description: string;
  time: string;
  avatar?: Image;
}

export interface ITask {
  id: number;
  taskName: string;
  status: AvailableStaus;
  bussinessContext?: IBusinessContext[];
}
