export default function Fondo() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-blue-500 dark:bg-sky-950 overflow-hidden transition-colors duration-100">

      {/* Grilla negra con líneas transparentes */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-white dark:bg-black mask-grid transition-colors duration-100"></div>
      </div>

      {/* Sombra interna */}
      <div className="absolute inset-0 z-10 pointer-events-none [box-shadow:inset_5px_5px_55px_80px_white] dark:[box-shadow:inset_5px_5px_55px_80px_black] transition-colors duration-100"></div>

    </div>
  );
}
