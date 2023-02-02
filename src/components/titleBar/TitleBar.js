import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";
import styles from "../titleBar/titleBar.module.scss";

const TitleBar = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  const title = "Where in the world?";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <button onClick={handleClick}>{`${theme} mode`}</button>
    </div>
  );
};

export default TitleBar;
