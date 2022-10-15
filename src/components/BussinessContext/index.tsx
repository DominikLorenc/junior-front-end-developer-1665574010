import { BussinessBar } from './BussinessBar';
import { Context } from './Context';

import styles from './styles.module.scss';
const { wrapper } = styles;

export const BussinessContext = () => {
  return (
    <div className={wrapper}>
      <BussinessBar />
      <Context/>
    </div>
  );
};
