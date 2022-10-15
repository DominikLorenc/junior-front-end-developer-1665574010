import { cx } from '../../../utils';
import styles from './styles.module.scss';
const {
  wrapper,
  wrapperInfo,
  wrapperInfoLabel,
  wrapperInfoAuthor,
  wrapperInfoSeparator,
  wrapperInfoDate,
  wrapperTitle,
  wrapperTitleNew,
  wrapperDescription,
} = styles;

export const ContextCard = () => {
  return (
    <>
    <div className={wrapper}>
      <div className={wrapperInfo}>
        {true && <div className={wrapperInfoLabel}>New</div>}
        <p className={wrapperInfoAuthor}>Author Author</p>
        <div className={wrapperInfoSeparator}></div>
        <p className={wrapperInfoDate}>Dec 17</p>
      </div>
      <h3 className={cx(wrapperTitle, true ? wrapperTitleNew : '')}>
        Lorem ipsum dolor sit amet.
      </h3>
      <p className={wrapperDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        explicabo quasi earum laboriosam, cum molestiae ex est deserunt. Vel
        sunt reiciendis et alias eveniet consequuntur delectus laudantium,
        itaque, quae excepturi deserunt hic dolor, nostrum quos error. Sequi
        accusamus deleniti cumque.
      </p>
    </div>
    <div className={wrapper}>
      <div className={wrapperInfo}>
        {false && <div className={wrapperInfoLabel}>New</div>}
        <p className={wrapperInfoAuthor}>Author Author</p>
        <div className={wrapperInfoSeparator}></div>
        <p className={wrapperInfoDate}>Dec 17</p>
      </div>
      <h3 className={cx(wrapperTitle, false ? wrapperTitleNew : '')}>
        Lorem ipsum dolor sit amet.
      </h3>
      <p className={wrapperDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
        explicabo quasi earum laboriosam, cum molestiae ex est deserunt. Vel
        sunt reiciendis et alias eveniet consequuntur delectus laudantium,
        itaque, quae excepturi deserunt hic dolor, nostrum quos error. Sequi
        accusamus deleniti cumque.
      </p>
    </div>
    </>
  );
};
