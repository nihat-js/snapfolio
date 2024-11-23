"use client";
import { useEffect, useState } from "react";
import "./style.css";
import index from "../games/page";
export default function Game() {
    const [board, setBoard] = useState<number[]>();
    const [width, setWidth] = useState(4);
    const [selectedTileIndex, setselectedTileIndex] = useState<number>(1);

    const handleSwitch = () => {
        console.log({ width });
        setWidth(width == 3 ? 4 : 3);
    };

    function convertIndexToPosition(index: number) {
        let y = Math.ceil(index / 4);
        let x = index - (y - 1) * 4 + 1;
        return [y, x];
    }
    function convertPositionToIndex(position: number[]) {
        return (position[0] - 1) * width + position[1] - 1;
    }
    function isEmptyByPosition(position: number[]) {
        let index = convertPositionToIndex(position);
        return (board as [])[index] === -1;
    }
    function isValidPosition(position: number[]) {
        return position[0] >= 1 && position[0] <= width && position[1] >= 1 &&
            position[1] <= width;
    }

    useEffect(() => {
        generateBoard();
    }, [width]);

    function generateBoard() {
        let tiles: number[] = [];
        for (let i = 1; i <= (width == 3 ? 8 : 15); i++) {
            tiles.push(i);
        }
        tiles.push(-1);
        tiles.sort(() => Math.random() - 0.5);
        setBoard(tiles);
    }

    function moveTileToEmpty(tileNumber: number) {
        let tileIndex = (board?.indexOf(tileNumber) as number + 1) as number;
        let emptyTileIndex = (board?.indexOf(-1) as number + 1) as number;

        let newBoard = [...board as number[]];

        [newBoard[emptyTileIndex - 1], newBoard[tileIndex - 1]] = [
            newBoard[tileIndex - 1],
            newBoard[emptyTileIndex - 1],
        ];
    }

    useEffect(() => {
        generateBoard();
        window.addEventListener("keydown", (e) => {
            // @ts-ignore
            let position = convertIndexToPosition(selectedTileIndex);
            let newPosition;
            if (e.key === "ArrowUp") {
                newPosition = [position[0] - 1, position[1]];
            } else if (e.key === "ArrowDown") {
                newPosition = [position[0] + 1, position[1]];
            } else if (e.key === "ArrowLeft") {
                newPosition = [position[0], position[1] - 1];
            } else if (e.key === "ArrowRight") {
                newPosition = [position[0] + 1, position[1]];
            }
            if (!isValidPosition) {
                return;
            }
            if (isEmptyByPosition(newPosition)) {
                moveTileToEmpty(selectedTileIndex);
            }
            let newIndex = convertPositionToIndex(newPosition);
            setselectedTileIndex(newIndex);

            if (
                isValidPosition(newPosition) && isEmptyByPosition(newPosition)
            ) {
                moveTileToEmpty(selectedTileIndex);
            }
        });
    }, []);

    const handleTileClick = (tileNumber: number) => {
        let tileIndex = (board?.indexOf(tileNumber) as number + 1) as number;
        let emptyTileIndex = (board?.indexOf(-1) as number + 1) as number;

        let tilePosition = convertIndexToPosition(tileIndex);
        let emptyPosition = convertIndexToPosition(emptyTileIndex);

        let possibleMoves = [
            [emptyPosition[0] + 1, emptyPosition[1]], // sometimes the empty tile is not in the right position like -1 or 5,
            [emptyPosition[0] - 1, emptyPosition[1]],
            [emptyPosition[0], emptyPosition[1] + 1],
            [emptyPosition[0], emptyPosition[1] - 1],
        ];

        let possibleMove = possibleMoves.find((position) =>
            position[0] === tilePosition[0] && position[1] === tilePosition[1]
        );

        if (possibleMove) {
            let newBoard = [...board as number[]];
            [newBoard[emptyTileIndex - 1], newBoard[tileIndex - 1]] = [
                newBoard[tileIndex - 1],
                newBoard[emptyTileIndex - 1],
            ];
            setBoard(newBoard);
        }
        console.log(possibleMoves, possibleMove);
        return true;
    };

    const checkSolved = () => {
        return board?.every((tile, index) => tile === index);
    };

    return (
        <div className="puzzle-container">
            <h2 className="text-center text-xl font-bold">
                Use the arrow keys to move the tiles. Press Enter to make a
                move.
            </h2>
            <div className="flex items-center justify-center space-x-4">
                <label className="relative inline-block w-14 h-8">
                    <input
                        type="checkbox"
                        className="absolute opacity-0 w-0 h-0"
                        onChange={handleSwitch}
                    />
                    <span className="block w-14 h-8 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300">
                        <span
                            className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                width === 4 ? "translate-x-6" : "translate-x-0"
                            }`}
                        >
                        </span>
                    </span>
                </label>
                <p className="text-xl font-semibold">{width * width} Tiles</p>
            </div>
            <div
                className={[
                    "tiles-wrapper  ",
                    width == 3 ? "grid-cols-3" : "grid-cols-4",
                ].join("")}
            >
                {board?.map((tile, index) => {
                    if (tile === -1) {
                        return <div key={index} className="tile empty"></div>;
                    }
                    return (
                        <button
                            key={index}
                            className={`tile tile-${tile} ${
                                selectedTileIndex == index
                                    ? "selected-tile"
                                    : ""
                            } `}
                            onClick={() => handleTileClick(tile)}
                            disabled={checkSolved()}
                        >
                            {tile}
                        </button>
                    );
                })}
            </div>
            {checkSolved() && (
                <div>
                    <p className="text-center text-green-500 mt-4">
                        Congratulations, you solved the puzzle!
                    </p>
                    <button>Try again</button>
                </div>
            )}
        </div>
    );
}
