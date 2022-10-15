import { BusinessSVG } from '../../../assets/SVG';
import styles from './styles.module.scss';
const { wrapper,wrapperTab, wrapperTabTitle, wrapperTabIcon } = styles;

export const BussinessBar = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperTab}>
        <div className={wrapperTabIcon}>
          <BusinessSVG />
        </div>
        <h1 className={wrapperTabTitle}>Bussiness Context </h1>
      </div>
    </div>
  );
};
