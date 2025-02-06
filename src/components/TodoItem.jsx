import PropTypes from "prop-types";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete item: ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    setTodos(todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    ));
    console.log("todos: ", todos);
  }


  const isLastItem = todos.indexOf(item) === todos.length - 1;
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      {!isLastItem && <hr className={styles.line} />}
    </div>
  );
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};
