import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-around p-10 bg-black text-white text-2xl font-bold items-center'>
        <h1>Rai</h1>
        <ul className="flex gap-10" font-family="gill sans">
            <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-blue-500">Sobre</Link></li>
            <li><Link to="/perfil" className="hover:text-blue-500">Perfil</Link></li>
            <li><Link to="/equipes" className="hover:text-blue-500">Equipes</Link></li>
            <li><Link to="/contato" className="hover:text-blue-500">Contato</Link></li>


      </ul>
      </nav>
    </header>
  );
};

export default Navbar;
