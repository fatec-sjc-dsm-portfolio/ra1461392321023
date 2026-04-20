import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Sobre from "./components/Sobre/sobre";
import Projetos from "./components/Projetos/projetos";
import Contato from "./components/Contato/contato";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Sobre />
      <Projetos />
      <Contato  />
    </div>
  );
}

export default App;
