const Navbar = () => {
  return (
    <header>
        <nav className='flex justify-around p-10 bg-black text-white text-2xl font-bold items-center'>
            <h1>Rai</h1>
            <ul className="flex gap-10">
                <li>Sobre mim</li>
                <li>Perfil</li>
                <li>Tecnologias</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar