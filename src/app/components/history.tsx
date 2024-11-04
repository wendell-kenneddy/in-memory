"use client";

import { useEffect, useState } from "react";
import { HistoryEntry, HistoryEntryProps } from "./history-entry";

export function History() {
  const [history, setHistory] = useState<HistoryEntryProps[] | null>(null);

  useEffect(() => {
    const json = localStorage.getItem("in.memory:history");
    if (json) {
      const parsedHistory: HistoryEntryProps[] = JSON.parse(json);
      setHistory(parsedHistory);
    }
  }, []);

  return (
    <div className="w-full">
      <table className="w-full mt-6">
        <thead>
          <tr className="w-full">
            <th className="py-2 bg-gray-900">Level</th>
            <th className="py-2 bg-gray-900">Date</th>
          </tr>
        </thead>

        <tbody>
          {history &&
            history.map(({ level, date }) => (
              <HistoryEntry level={level} date={date} key={level + date} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
