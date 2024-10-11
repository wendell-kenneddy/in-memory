import { Metadata } from "next";
import { GameScreen } from "@/components/game-screen";

export const metadata: Metadata = {
  title: "in.memory | Play",
  description: "Its memorization time!",
};

export default function Home() {
  return (
    <main className="w-11/12 max-w-[720px] mx-auto">
      <GameScreen />
    </main>
  );
}
