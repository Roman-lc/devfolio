export default function Navbar({ theme, handleChangeTheme }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">

        <div className="logo text-xl font-bold dark:text-white">DevFolio</div>

        <div className="hidden md:flex gap-4 text-black dark:text-white">
            <button>Inicio</button>
            <button>Sobre mí</button>
            <button>Proyectos</button>
            <button>Contacto</button>
        </div>

        <button
            onClick={handleChangeTheme}
            className="bg-slate-200 px-7 py-2 w-40 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
        >
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
        </button>

    </nav>
  )
}

