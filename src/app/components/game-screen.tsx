"use client";

import { useState } from "react";

interface GridConfig {
  columns: string;
  rows: string;
}

// 5//5 = 1 = 5x5 grid, so on
const GRID_SIZE_BY_FIVE_LEVELS: Record<number, GridConfig> = {
  0: { columns: "grid-cols-4", rows: "grid-rows-4" },
  1: { columns: "grid-cols-5", rows: "grid-rows-5" },
  2: { columns: "grid-cols-6", rows: "grid-rows-6" },
  3: { columns: "grid-cols-7", rows: "grid-rows-7" },
  4: { columns: "grid-cols-8", rows: "grid-rows-8" },
  5: { columns: "grid-cols-9", rows: "grid-rows-9" },
  6: { columns: "grid-cols-10", rows: "grid-rows-10" },
};

export function GameScreen() {
  const [level] = useState(33);
  const levelByFive = level >= 30 ? 6 : Math.floor(level / 5);
  const { columns, rows } = GRID_SIZE_BY_FIVE_LEVELS[levelByFive];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span>LEVEL: {level}</span>
        <span>TIME: 00:00</span>
      </div>

      <div className={`grid ${columns} ${rows} gap-1`}>
        {new Array((4 + levelByFive) ** 2).fill(Math.random() * 101).map((v) => (
          <div
            className="w-8 h-8 rounded-md bg-teal-600 cursor-pointer transition-colors hover:bg-teal-200"
            key={v}
          ></div>
        ))}
      </div>
    </div>
  );
}
