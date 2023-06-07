import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
    </>
  );
}

export default App;
