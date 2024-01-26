import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Clients from "./components/Pages/Clients";
import Footer from "./components/Footer/Footer";
import Services from "./components/Pages/Services";

function App() {

  return (
    <div className="App">
      <Header  />
      <Home />
      <About />
      <Clients />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
