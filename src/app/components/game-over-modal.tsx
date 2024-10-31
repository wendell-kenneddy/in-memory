"use client";

import { Button, Dialog } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GameOverModalProps {
  level: number;
}

export function GameOverModal({ level }: GameOverModalProps) {
  const [hasSavedToLeaderboard, setHasSavedToLeaderboard] = useState(false);
  const [personalBest, setPersonalBest] = useState("");

  useEffect(() => {
    let pb = localStorage.getItem("in.memory:personal-best");

    if (!pb || Number(pb) < level) {
      pb = String(level);
      localStorage.setItem("in.memory:personal-best", String(level));
    }

    setPersonalBest(pb);
  }, []);

  function saveToLeaderboard() {
    setHasSavedToLeaderboard(true);
  }

  return (
    <Dialog.Root open={true}>
      <Dialog.Content aria-describedby="Game over!" maxWidth="450px">
        <Dialog.Title>Game over!</Dialog.Title>

        <div className="flex flex-col gap-4 align-start">
          <span>Level: {level}</span>
          <span>Personal best: {personalBest}</span>

          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <Button color="teal" className="cursor-pointer">
                Home
              </Button>
            </Link>

            <Button
              onClick={saveToLeaderboard}
              disabled={hasSavedToLeaderboard}
              color="teal"
              className="cursor-pointer"
            >
              Submit to leaderboards
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
