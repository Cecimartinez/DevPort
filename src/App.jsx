import "./App.css";
import { Nav } from "./componentes/Nav/Nav";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
