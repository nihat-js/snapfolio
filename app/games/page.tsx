import Link from "next/link";
import React from "react";

export default function Index() {
  const games = [
    {
      name: "Number Puzzle",
      href: "/slide-puzzle",
      description: "Slide puzzles into correct place",
      image: "./games/number-slide-1.png",
    },
    // { name: 'Game 2', description: 'This is a description of game 2.', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="min-h-screen  p-8">
      <h1 className="text-2xl font-bold  mb-3">Mini Games Showcase</h1>
      <p className="mb-10">
        Problem solver is my second name. And I use this skill for creating own
        solutions to that games
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {game.name}
              </h2>
              <p className="text-gray-600 mt-2">{game.description}</p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Link
                href={game.href}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
              >
                Play Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
