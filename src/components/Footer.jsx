import PropTypes from "prop-types";
import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}

Footer.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired,
};
