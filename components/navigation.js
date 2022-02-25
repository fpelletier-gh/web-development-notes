import utilStyles from "../styles/utils.module.css";
import styles from "./navigation.module.css";

export default function Navigation({ children }) {
  return <nav className={styles.navigation}>{children}</nav>;
}
