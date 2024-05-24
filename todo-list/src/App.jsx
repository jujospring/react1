import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import TodoList from './TodoList';
import NavBar from "./NavBar";

function App() {
  return(
    <div>
      <CssBaseline/>
      <NavBar/>
      <TodoList/>
    </div>
    );
}

export default App
