import "./App.css";
import { NavBar } from "./componentes/NavBar/NavBar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
