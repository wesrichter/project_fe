import broken from "../../assets/broken/broken.png";
import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h4>{`Sorry we couldn't find what you were looking for :(`}</h4>
      <img src={broken} alt="broken" />
    </div>
  );
};
