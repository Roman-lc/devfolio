import { useEffect, useRef, useState } from "react";
import foto from "../data/fotoCV.jpg";

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="sobre-mi"
      ref={ref}
      className="w-full py-16 px-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6 lg:max-h-[200px] bg-blue-950 dark:bg-gray-600 transition-colors duration-300"
    >
      {/* Foto que sube desde abajo */}
      <img
        src={foto}
        alt="foto"
        className={`max-w-[250px] w-1/3 md:w-1/4 object-cover rounded-full transition-all duration-700 ease-out
          ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      />

      {/* Texto que entra desde la derecha */}
      <div
        className={`max-w-2xl flex flex-col justify-center h-full text-white transition-all duration-700 ease-out
          ${visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
      >
        <h2 className="text-2xl font-bold mb-4">Sobre Mí</h2>
        <p>
          Soy un desarrollador con experiencia en React, Angular y más. Me apasiona crear interfaces modernas y eficientes.
        </p>
      </div>
    </div>
  );
}
