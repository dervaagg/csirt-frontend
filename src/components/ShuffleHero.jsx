import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { squareData } from "../data/datas";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <p className="ml-1 mb-10 md:text-lg text-black font-bold tracking-widest">
          Keamanan Data dan Informasi
        </p>
        <h3 className="hero-title text-4xl md:text-6xl font-semibold text-red-700">
          WASKITA <span className="text-blue-900">CSIRT</span>
        </h3>
        <p className="ml-1  md:text-lg text-slate-700">
          Waskita Computer Security Incident Response Team
        </p>
        <br />
        <a href="/about">
          <button className="bg-indigo-950 text-white font-medium py-2 px-4 mt-5 ml-1 rounded transition-all hover:bg-indigo-600 active:scale-95 animate-pulse">
            TENTANG WASKITA CSIRT
          </button>
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="custom:hidden custom:mb[-20] grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
