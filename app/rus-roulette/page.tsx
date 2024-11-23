"use client";
import { useState, useEffect } from "react";
import "./style.css"
const RussianRoulette = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [bulletPosition, setBulletPosition] = useState<number | null>(null);
  const [chamberState, setChamberState] = useState<string[]>(new Array(6).fill("empty"));
  const [currentPlayer, setCurrentPlayer] = useState<"user" | "pc">("user");
  const [gameResult, setGameResult] = useState<string>("");

  // Start a new game with a random bullet position
  const startNewGame = () => {
    setIsGameOver(false);
    setChamberState(new Array(6).fill("empty"));
    setBulletPosition(Math.floor(Math.random() * 6)); // Random bullet position
    setCurrentPlayer("user"); // Start with the user's turn
  };

  // Simulate pulling the trigger
  const pullTrigger = (player: "user" | "pc") => {
    if (bulletPosition === null) return;

    if (chamberState[bulletPosition] === "bullet") {
      // Bullet fired, game over
      setIsGameOver(true);
      setGameResult(player === "user" ? "PC Wins! 💀" : "You Win! 🎉");
      return;
    }

    // Update chamber state to place the bullet in the current position
    let newChamberState = [...chamberState];
    newChamberState[bulletPosition!] = "bullet";
    setChamberState(newChamberState);

    // Switch turn to the next player
    setCurrentPlayer(player === "user" ? "pc" : "user");
  };

  useEffect(() => {
    if (isGameOver) return;

    // Automatically pull trigger if it's the PC's turn
    if (currentPlayer === "pc") {
      setTimeout(() => pullTrigger("pc"), 1000); // Wait 1 second for a "dramatic" PC action
    }
  }, [currentPlayer, isGameOver]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">
          Russian Roulette Duel: {currentPlayer === "user" ? "Your Turn" : "PC's Turn"}
        </h1>

        {/* Bullet Chambers */}
        <div className="grid grid-cols-3 gap-4 justify-center items-center mb-8">
          {chamberState.map((state, index) => (
            <div
              key={index}
              className={`w-24 h-24 flex justify-center items-center rounded-full border-4 border-gray-800 transform ${
                state === "empty" ? "bg-gray-600" : "bg-red-500"
              }`}
            >
              {state === "bullet" && "💥"}
              {state === "empty" && "🤚"}
            </div>
          ))}
        </div>

        {/* Game Over or Not */}
        {isGameOver && (
          <div className="mt-4 text-xl text-red-600">
            <p>{gameResult}</p>
            <button
              onClick={startNewGame}
              className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-700 mt-4"
            >
              Start New Game
            </button>
          </div>
        )}

        {/* User's Turn */}
        {!isGameOver && currentPlayer === "user" && (
          <div className="mt-6 space-x-4">
            <button
              onClick={() => pullTrigger("user")}
              className="px-6 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-700"
            >
              Pull Trigger
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RussianRoulette;
