import List from '@mui/material/List';
import { useState, useEffect} from 'react'; 
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {v4 as uuid} from 'uuid';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';


const getInitData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  } else {
    return data;
  }
}
// const initTodos = [
//   {id: 1, text: "walk the cats", completed: false},
//   {id: 2, text: "feed the cats", completed: false},
//   {id: 3, text: "water the cats", completed: false},
//   {id: 4, text: "brush the cats", completed: false},
//   {id: 5, text: "pet the cats", completed: true},
// ];

export default function TodoList() {
  const [todos, setTodos] = useState(getInitData);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    )}, 
    [todos]
  );

  const deleteTodo = (id) => {
    setTodos(oldTodos => {
      return oldTodos.filter((t) => t.id !== id);
    });
  }
  const toggleTodo = (id) => {
    setTodos(oldTodos => {
      return (oldTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      }))
    });
  }

  const addTodo = (text) => {
    setTodos((oldTodos) => {
      return [...oldTodos, {text: text, id: uuid(), completed: false}];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todos
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => (
          <TodoItem 
            todo={todo} 
            key={todo.id} 
            remove={deleteTodo}
            toggle={toggleTodo}
          />
        ))}
        <TodoForm addTodo={addTodo}/>
      </List>
    </Box>
  );
}
