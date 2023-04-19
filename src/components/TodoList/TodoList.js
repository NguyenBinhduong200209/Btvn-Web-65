import React, { useContext } from 'react';
import { TodoContext } from '@/context/todo';
import styles from '@/styles/Todo.module.css';

const TodoList = (props) => {
  const { todoList } = useContext(TodoContext);
  // console.log('TodoContext in TodoLayout:', TodoContext);
  // console.log('TodoContext in TodoList:', TodoContext);
  return (
    <div className={styles.show_todo_list}>
      {todoList.map((item, index) => (
        
        <div key={index} className={styles.item}>
          <input type="checkbox" />
          <span>{item}</span>
        </div>
      ))
      }
     
    </div>
  );
};

export default TodoList;