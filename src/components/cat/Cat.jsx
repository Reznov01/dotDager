import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Cat({ controlElement }) {
  const [isPepinoActive, setIsPepinoActive] = useState(true);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [pepinoPosition, setPepinoPosition] = useState({ x: 0, y: 0 });
  const meowSound = new Audio("/meow.mp3");
  // Tamaño del gato (para calcular límites)
  const CAT_SIZE = 64; // 64px (16 tailwind units)

  // Función para mover al gato
  const moveCatAway = () => {
    const randomX = Math.random() * 300 - 150; // Movimiento aleatorio en X
    const randomY = Math.random() * 300 - 150; // Movimiento aleatorio en Y

    const newX = catPosition.x + randomX;
    const newY = catPosition.y + randomY;

    // Limitar el movimiento dentro de la ventana
    const limitedX = Math.max(
      -window.innerWidth / 2 + CAT_SIZE / 2,
      Math.min(newX, window.innerWidth / 2 - CAT_SIZE / 2)
    );

    const limitedY = Math.max(
      -window.innerHeight / 2 + CAT_SIZE / 2,
      Math.min(newY, window.innerHeight / 2 - CAT_SIZE / 2)
    );

    setCatPosition({ x: limitedX, y: limitedY });
  };

  const togglePepino = () => {
    setIsPepinoActive(!isPepinoActive);
    controlElement();
  };

  // Función para mover el pepino
  const movePepino = (e) => {
    const newX = e.clientX - window.innerWidth / 2;
    const newY = e.clientY - window.innerHeight / 2;

    setPepinoPosition({ x: newX, y: newY });

    // Calcular distancia entre el pepino y el gato
    const distance = Math.sqrt(
      Math.pow(newX - catPosition.x, 2) + Math.pow(newY - catPosition.y, 2)
    );

    if (distance < 100) {
      moveCatAway();
    }

    if (distance < 50) {
      meowSound.play();
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative overflow-hidden  ${
        isPepinoActive ? "cursor-pointer" : "cursor-auto"
      }`}
      // Solo asigna onMouseMove si isPepinoActive es true
      {...(isPepinoActive && { onMouseMove: movePepino })}
    >
      {/* Pepino */}
      <motion.div
        className={`w-16 h-16 rounded-full flex items-center justify-center absolute pointer-events-auto ${
          isPepinoActive ? "bg-green-500" : "bg-gray-400"
        } shadow-lg cursor-pointer`}
        style={{
          transform: `translate(${pepinoPosition.x}px, ${pepinoPosition.y}px)`,
        }}
        onClick={togglePepino}
      >
        🥒
      </motion.div>

      {/* Gato */}
      <motion.div
        className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg absolute"
        animate={{
          x: catPosition.x,
          y: catPosition.y,
        }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        🐱
      </motion.div>
    </div>
  );
}
