import { Metadata } from "next";
import { Tabs } from "./components/tabs";
import { GameMenu } from "./components/game-menu";
import { Leaderboard } from "./components/leaderboard";

export const metadata: Metadata = {
  title: "in.memory",
  description: "Test your memorization skills with in.memory!",
};

export default function Home() {
  return (
    <main className="w-11/12 max-w-[720px] mx-auto">
      <Tabs
        entries={[
          { value: "Play", component: <GameMenu /> },
          { value: "Leaderboard", component: <Leaderboard /> },
        ]}
        defaultValue="Play"
      />
    </main>
  );
}
