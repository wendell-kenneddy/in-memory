"use client";

import { useEffect, useState } from "react";
import { GridCell, GridCellProps } from "./grid-cell";
import { GameOverModal } from "./game-over-modal";

interface GridConfig {
  size: number;
  columnsCss: string;
  rowsCss: string;
}

interface GridCell extends Omit<GridCellProps, "onClick"> {
  composesPattern: boolean;
}

// 5//5 = 1 = 5x5 grid, so on
const GRID_SIZE_BY_FIVE_LEVELS: Record<number, GridConfig> = {
  0: { columnsCss: "grid-cols-4", size: 4, rowsCss: "grid-rows-4" },
  1: { columnsCss: "grid-cols-5", size: 5, rowsCss: "grid-rows-5" },
  2: { columnsCss: "grid-cols-6", size: 6, rowsCss: "grid-rows-6" },
  3: { columnsCss: "grid-cols-7", size: 7, rowsCss: "grid-rows-7" },
  4: { columnsCss: "grid-cols-8", size: 8, rowsCss: "grid-rows-8" },
  5: { columnsCss: "grid-cols-9", size: 9, rowsCss: "grid-rows-9" },
  6: { columnsCss: "grid-cols-10", size: 10, rowsCss: "grid-rows-10" },
};

export function GameScreen() {
  const [level, setLevel] = useState<{ index: number; tries: number }>({ index: 1, tries: 1 });
  const [grid, setGrid] = useState<GridCell[] | []>([]);
  const [actionCount, setActionCount] = useState(0);
  const [canMove, setCanMove] = useState(false);
  const [lifes, setLifes] = useState(3);
  const levelByFive = level.index >= 30 ? 6 : Math.floor(level.index / 5);
  const { columnsCss, rowsCss, size } = GRID_SIZE_BY_FIVE_LEVELS[levelByFive];
  const patternSize = 3 + levelByFive;

  function buildNewGrid(size: number): GridCell[] {
    const newGrid: GridCell[] = [];

    for (let i = 0; i < size ** 2; i++) {
      newGrid.push({ composesPattern: false, canMove: false, selected: false, highlight: false });
    }

    for (let i = 0; i < patternSize; i++) {
      let randomIndex = Math.floor(Math.random() * newGrid.length);
      let alreadyMarked = newGrid[randomIndex].composesPattern == true;

      while (alreadyMarked) {
        randomIndex = Math.floor(Math.random() * newGrid.length);
        alreadyMarked = newGrid[randomIndex].composesPattern == true;
      }

      newGrid[randomIndex].composesPattern = true;
      newGrid[randomIndex].highlight = true;
    }

    return newGrid;
  }

  useEffect(() => {
    const newGrid = buildNewGrid(size);
    setGrid(newGrid);
    const timeout = setTimeout(() => {
      setGrid((prev) => prev.map((v) => ({ ...v, highlight: false })));
      setCanMove(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [level]);

  useEffect(() => {
    if (actionCount == patternSize) {
      const correctGuesses = grid.filter((c) => c.selected && c.composesPattern);
      if (correctGuesses.length == patternSize) {
        setLevel((prev) => ({ index: prev.index + 1, tries: 1 }));
        setActionCount(0);
        setCanMove(false);
        return;
      }

      setActionCount(0);
      setCanMove(false);
      setLevel((prev) => ({ index: prev.index, tries: prev.tries + 1 }));
      setLifes((prev) => prev - 1);
    }
  }, [actionCount]);

  function handleCellSelect(index: number) {
    if (grid[index].selected || actionCount == patternSize) return;
    setGrid((prev) => prev.map((v, i) => (i == index ? { ...v, selected: true } : v)));
    setActionCount((prev) => prev + 1);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span>LEVEL: {level.index}</span>
          <span>LIFES: {lifes}</span>
        </div>

        <div className={`grid ${columnsCss} ${rowsCss} gap-1`}>
          {grid.map((c, i) => (
            <GridCell
              selected={c.selected}
              highlight={c.highlight}
              canMove={canMove}
              onClick={() => handleCellSelect(i)}
              key={i}
            />
          ))}
        </div>
      </div>

      {lifes == 0 && <GameOverModal level={level.index} />}
    </>
  );
}
