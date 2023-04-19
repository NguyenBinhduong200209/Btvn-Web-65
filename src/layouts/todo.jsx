import React, { useState, useContext } from "react";
import styles from "@/styles/Todo.module.css";
import Link from "next/link";
import { TodoContext } from "@/context/todo";
import TodoList from "@/components/TodoList/TodoList";

const TodoLayout = (props) => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [newTodoItem, setNewTodoItem] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log('newTodoItem:', newTodoItem);
    console.log('todoList:', todoList);
    setTodoList([...todoList, newTodoItem]);
    setNewTodoItem("");
  };


  const handleInputChange = (e) => {
    setNewTodoItem(e.target.value);
    console.log(e.target.value);
  };


  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      <div className={styles.container_app}>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            name="newTodoItem"
            value={newTodoItem}
            onChange={handleInputChange}
          />
          <button type="submit">ADD</button>
        </form>
        <div className={styles.tab_nav}>
          <ul>
            <li>
              <Link href={"/todo/all"}>ALL</Link>
            </li>
            <li>
              <Link href={"/todo/active"}>Active</Link>
            </li>
            <li>
              <Link href={"/todo/completed"}>Completed</Link>
            </li>
          </ul>
        </div>
        {props.children}
      </div>
    </TodoContext.Provider>
  );
};

export default TodoLayout;
