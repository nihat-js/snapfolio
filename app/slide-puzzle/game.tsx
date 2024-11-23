"use client";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import index from "../games/page";
export default function Game() {
    const [board, setBoard] = useState<number[]>();
    const [width, setWidth] = useState(4);
    const [selectedTileIndex, setselectedTileIndex] = useState<number>(0);

    const [isMoving, setIsMoving] = useState(false);

    const startMoving = () => {
        setIsMoving(true);
        console.log("animationstarterd");
        setTimeout(() => {
            setIsMoving(false); // Stop the animation after it completes
        }, 500); // 500ms matches the animation duration
    };

    const boardRef = useRef(board);

    const handleSwitch = () => {
        setWidth(width == 3 ? 4 : 3);
    };

    function convertIndexToPosition(index: number) {
        let y = Math.max(Math.ceil(index / width), 1);
        let x = index - (y - 1) * width + 1;
        return [y, x];
    }
    function convertPositionToIndex(position: number[]) {
        return (position[0] - 1) * width + position[1] - 1;
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

    useEffect(() => {
        generateBoard();
    }, []);

    useEffect(() => {
        // Update the ref whenever board state changes
        boardRef.current = board;
    }, [board]);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            const isEmptyByPosition = function (position: number[]) {
                let index = convertPositionToIndex(position);
                // console.log({index})
                return board![index] === -1;
            };

            let position = convertIndexToPosition(selectedTileIndex);
            console.log(selectedTileIndex);
            let newPosition;
            if (e.key === "ArrowUp") {
                newPosition = [position[0] - 1, position[1]];
            } else if (e.key === "ArrowDown") {
                newPosition = [position[0] + 1, position[1]];
            } else if (e.key === "ArrowLeft") {
                newPosition = [position[0], position[1] - 1];
            } else if (e.key === "ArrowRight") {
                newPosition = [position[0], position[1] + 1];
            }

            if (!isValidPosition(newPosition)) {
                return;
            }

            if (isEmptyByPosition(newPosition)) {
                // console.log("geldim bura");
                // let emptyTileIndex = board?.indexOf(-1) as number;
                // const newBoard = [...board as number[]];
                // [newBoard[emptyTileIndex], newBoard[selectedTileIndex]] = [
                //     newBoard[selectedTileIndex],
                //     newBoard[emptyTileIndex],
                // ];
                // setBoard(newBoard);
                // setselectedTileIndex(convertPositionToIndex(newPosition));
                return;
            }

            let newIndex = convertPositionToIndex(newPosition);
            console.log(newIndex);
            setselectedTileIndex(newIndex);
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [board, selectedTileIndex]);

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
        if (!possibleMove) {
            return;
        }

        let newBoard = [...board as number[]];
        [newBoard[emptyTileIndex - 1], newBoard[tileIndex - 1]] = [
            newBoard[tileIndex - 1],
            newBoard[emptyTileIndex - 1],
        ];
        setBoard(newBoard);
        startMoving();
        return true;
    };

    const checkSolved = () => {
        return board?.every((tile, index) => tile === index);
    };

    return (
        <div className="puzzle-container">
            <div className="mb-8">
                <p className="text-center text-md  text-gray-800">
                    Use the arrow keys to move the tiles. Press Enter to make a
                    move.
                </p>
                <div className=" flex items-center justify-end mt-10">
                    <label
                        className="relative inline-block w-16"
                        style={{ height: "32px" }}
                    >
                        <input
                            type="checkbox"
                            className="absolute opacity-0 w-0 h-0"
                            onChange={handleSwitch}
                        />
                        <span className="block w-12 h-7 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full cursor-pointer transition-colors duration-300">
                            <span
                                className={`block w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                    width === 4
                                        ? "translate-x-6"
                                        : "translate-x-0"
                                }`}
                            />
                        </span>
                    </label>

                    <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                        {width * width} Tiles
                    </p>
                </div>
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
                            } 
                            ${isMoving ? "moving" : ""}        
                            `}
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
