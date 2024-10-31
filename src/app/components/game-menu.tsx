import { Button } from "@radix-ui/themes";
import Link from "next/link";

export function GameMenu() {
  return (
    <div className="w-full max-w-[185px] mx-auto flex flex-col items-center gap-2 mt-6">
      <h2 className="text-lg">How to play</h2>

      <p className="text-sm">
        A pattern will be shown, and you must correctly replicate it in order to advance in the
        game.
      </p>

      <p className="text-sm">
        Each few levels, the grid grows and the pattern as well. Keep track of it!
      </p>

      <Link href="/play" className="w-full">
        <Button color="teal" size="3" className="w-full cursor-pointer">
          Play
        </Button>
      </Link>
    </div>
  );
}
