import Link from "next/link";

export function GameMenu() {
  return (
    <div className="w-full max-w-[185px] mx-auto flex flex-col items-center gap-2 mt-6">
      <h2 className="text-lg">How to play</h2>

      <p className="text-sm">
        A pattern will be shown, and you must correctly replicate it in order to advance in the
        game.
      </p>

      <p className="text-sm">Each few levels, the grid gets bigger, and the game harder.</p>

      <Link href="/play" className="w-full">
        <button className=" bg-teal-600 hover:bg-teal-400 transition-colors font-medium py-2 px-4 rounded-md flex items-center justify-center w-full max-w-[212px]">
          Play
        </button>
      </Link>
    </div>
  );
}
