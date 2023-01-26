import styles from "../titleBar/titleBar.module.scss";

const TitleBar = () => {
  const title = "Where in the world?";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.themeSwitchBtn}>Theme switch btn</p>
    </div>
  );
};

export default TitleBar;
