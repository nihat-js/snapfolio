// components/MemoryGame.js
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const generateCards = () => {
  const cards = [
    "🍎",
    "🍌",
    "🍒",
    "🍇",
    "🍓",
    "🍉",
    "🍊",
    "🍍",
    "🍎",
    "🍌",
    "🍒",
    "🍇",
    "🍓",
    "🍉",
    "🍊",
    "🍍",
  ];

  // Shuffle the cards
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (matchedIndices.length === cards.length) {
      setGameOver(true);
    }
  }, [matchedIndices, cards.length]);

  const handleCardClick = (index) => {
    if (
      flippedIndices.length === 2 || flippedIndices.includes(index) ||
      matchedIndices.includes(index)
    ) return;

    setFlippedIndices((prev) => [...prev, index]);

    if (flippedIndices.length === 1) {
      setMoves((prev) => prev + 1);
      if (cards[flippedIndices[0]] === cards[index]) {
        setMatchedIndices((prev) => [...prev, flippedIndices[0], index]);
      }

      setTimeout(() => setFlippedIndices([]), 1000);
    }
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFlippedIndices([]);
    setMatchedIndices([]);
    setMoves(0);
    setGameOver(false);
  };

  return (
    <main>
      <div className="mb-6 text-start">
        <Link
          href="/games"
          className="inline-block text-lg text-blue-600 hover:text-blue-800"
        >
          &larr; Back to Games
        </Link>
      </div>
      <div className="max-w-xl mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-10">Memory Game</h1>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {cards.map((card, index) => {
            const isFlipped = flippedIndices.includes(index) ||
              matchedIndices.includes(index);
            return (
              <div
                key={index}
                className={`w-24 h-24 flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer 
                ${
                  isFlipped ? "bg-white" : "bg-gray-300"
                } transition-all duration-300`}
                onClick={() => handleCardClick(index)}
              >
                {isFlipped ? <span className="text-3xl">{card}</span> : ""}
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold">Moves: {moves}</p>
          {gameOver && (
            <div className="mt-4">
              <p className="text-xl text-green-500 font-bold">You Win! 🎉</p>
              <button
                onClick={handleRestart}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MemoryGame;
