import React from "react";
import Game from "./game";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          <Link
            href="/games"
            className="inline-block text-lg text-blue-600 hover:text-blue-800 mb-6"
          >
            &larr; Back to Games
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Number Slide Puzzle
          </h1>
        </div>
        <div>
          <Game />
        </div>
      </div>
    </div>
  );
}
