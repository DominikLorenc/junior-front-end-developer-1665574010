import styles from './styles.module.scss';
import { Info } from './Info';

const {
  wrapper,
  wrapperTitle,
  wrapperDescription,
  wrapperDescriptionAvatar,
  wrapperDescriptionContext,
  wrapperDescriptionContextText,
} = styles;

export const ContextDescription = () => {
  return (
    <div className={wrapper}>
      <h1 className={wrapperTitle}>Application has been accepted 🎉 🙌</h1>
      <div className={wrapperDescription}>
        <div className={wrapperDescriptionAvatar}>Avatar</div>
        <div className={wrapperDescriptionContext}>
          <Info />
          <div className={wrapperDescriptionContextText}>
            Hello! My name is Kirsten, and I'm super happy to announce that your
            application to join Coders Family has been accepted! 🎉 🙌 You
            really impressed us during the interview process, and we'd like to
            offer you a project with COMPANY. We've been working with COMPANY
            for quite some time, and it's important for us to keep them
            satisfied with our services — hence why we believe you'll be a great
            fit for this job. Here's the project overview: You'll be responsible
            for building a database and page for recording and displaying book
            ratings. We'd like to work in two week-long sprints, we've already
            given you a head start and prepared your tasks to deliver in your
            first sprint.
          </div>
        </div>
      </div>
    </div>
  );
};
