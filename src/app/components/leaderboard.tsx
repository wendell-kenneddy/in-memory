import { LeaderboardEntry } from "./leaderboard-entry";

export function Leaderboard() {
  return (
    <table className="w-full mt-6">
      <thead>
        <tr>
          <th className="py-2 bg-gray-900 rounded-tl-md">Rank</th>
          <th className="py-2 bg-gray-900">Name</th>
          <th className="py-2 bg-gray-900">Level</th>
        </tr>
      </thead>

      <tbody>
        <LeaderboardEntry rank={1} name="Adam" level={99} />
        <LeaderboardEntry rank={2} name="Odysseus" level={98} />
        <LeaderboardEntry rank={3} name="Calypso" level={97} />
        <LeaderboardEntry rank={4} name="Eurilochus" level={96} />
        <LeaderboardEntry rank={5} name="Persefone" level={95} />
        <LeaderboardEntry rank={6} name="Hades" level={94} />
        <LeaderboardEntry rank={7} name="Ares" level={93} />
        <LeaderboardEntry rank={8} name="Athena" level={92} />
        <LeaderboardEntry rank={9} name="Hermes" level={91} />
        <LeaderboardEntry rank={10} name="Zeus" level={90} />
      </tbody>
    </table>
  );
}
