import { Button, Dialog } from "@radix-ui/themes";
import Link from "next/link";
import { HistoryEntryProps } from "./history-entry";
import { useEffect, useState } from "react";

interface GameOverModalProps {
  level: number;
}

type History = HistoryEntryProps[];

export function GameOverModal({ level }: GameOverModalProps) {
  const [personalBest, setPersonalBest] = useState(0);

  function updateHistory(level: number) {
    const history = localStorage.getItem("in.memory:history") ?? "[]";
    let parsedHistory: History = JSON.parse(history);

    if (parsedHistory.length < 10) {
      parsedHistory.unshift({ level, date: Date.now() });
    } else {
      parsedHistory = [{ level, date: Date.now() }, ...parsedHistory.slice(0, 9)];
    }

    localStorage.setItem("in.memory:history", JSON.stringify(parsedHistory));
  }

  useEffect(() => {
    let pb = localStorage.getItem("in.memory:personal-best");

    if (!pb || Number(pb) < level) {
      pb = String(level);
      localStorage.setItem("in.memory:personal-best", String(level));
    }

    updateHistory(level);
    setPersonalBest(Number(pb));
  }, []);

  return (
    <Dialog.Root open={true}>
      <Dialog.Content aria-describedby="Game over!" maxWidth="450px">
        <Dialog.Title>Game over!</Dialog.Title>

        <div className="flex flex-col gap-4 align-start">
          <span>Level: {level}</span>
          <span>Personal best: {personalBest}</span>

          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <Button color="teal" className="cursor-pointer w-full">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
