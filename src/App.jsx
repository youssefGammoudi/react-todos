import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  );
}

export default App;
