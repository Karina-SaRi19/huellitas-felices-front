import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ListaPet from "./pages/ListaPet/ListaPet";
import PerfilPet from "./pages/PerfilPet/PerfilPet";
import AdoptionForm from "./pages/FormularioAdop/FormularioAdop";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mascotas" element={<ListaPet />} />
        <Route path="/mascota/:id" element={<PerfilPet />} />
        <Route path="/adopcion" element={<AdoptionForm />} />
        <Route path="/acerca" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
