import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Sobre from './components/content.jsx';
import Perfil from './pages/perfil.jsx';
import Equipes from './pages/equipes.jsx';
import Contato from './pages/contato.jsx'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/equipes" element={<Equipes />} />
        <Route path="/contato" element={<Contato />} />
        
      </Routes>
    </>
  );
}

export default App;
