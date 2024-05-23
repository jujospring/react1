import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './TodoList';

function App() {
  return(
    <div>
      <CssBaseline/>
      <h1>Todos</h1>
      <TodoList/>
    </div>
    );
}

export default App
