import { useEffect, useState } from "react";

export default function LandingPage() {
  const total = 20;
  const aprobadas = 12;
  const cursando = 3;
  const pendientes = total - aprobadas - cursando;

  const porcentajeAprobadas = (aprobadas / total) * 100;
  const porcentajeCursando = (cursando / total) * 100;
  const porcentajePendientes = (pendientes / total) * 100;

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activar animación después de montar el componente
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center dark:text-black">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Román López Casalá - Desarrollador
      </h1>

      {/* Barra segmentada con animación */}
      <div className="w-1/2 mt-4 h-5 bg-gray-300 rounded-full overflow-hidden flex">
        <div
          className="h-full bg-green-500 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${porcentajeAprobadas}%` : "0%" }}
        ></div>
        <div
          className="h-full bg-yellow-400 transition-all duration-1000 ease-out delay-300"
          style={{ width: animate ? `${porcentajeCursando}%` : "0%" }}
        ></div>
        <div
          className="h-full bg-gray-500 transition-all duration-1000 ease-out delay-600"
          style={{ width: animate ? `${porcentajePendientes}%` : "0%" }}
        ></div>
      </div>

      {/* Leyenda */}
      <div className="flex gap-4 mt-3 text-sm text-dark-200 dark:text-gray-300">
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          {aprobadas} aprobadas
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          {cursando} cursando
        </span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          {pendientes} pendientes
        </span>
      </div>

      <h2 className="text-black dark:text-gray-400 mt-2">
        Tecnicatura en desarrollo de software - 2025
      </h2>
    </div>
  );
}
