import React from "react";
import Game from "./game";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/games"
            className="inline-block text-lg text-blue-600 hover:text-blue-800"
          >
            &larr; Back to Games
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Number Slide Puzzle
        </h1>

        {/* Game Component */}
        <div className="flex justify-center">
          <Game />
        </div>
      </div>
    </div>
  );
}
