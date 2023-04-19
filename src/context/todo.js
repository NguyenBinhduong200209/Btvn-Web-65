import { createContext, useState } from "react";

const TodoContext = createContext({
  todoList: [],
  setTodoList: () => {},
});

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };