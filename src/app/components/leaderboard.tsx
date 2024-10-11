import { LeaderboardEntry } from "./leaderboard-entry";

export function Leaderboard() {
  return (
    <table className="w-full mt-6">
      <thead>
        <tr>
          <th className="py-2 bg-gray-900 rounded-tl-md">Rank</th>
          <th className="py-2 bg-gray-900">Name</th>
          <th className="py-2 bg-gray-900">Level</th>
          <th className="py-2 bg-gray-900 rounded-tr-md">Time</th>
        </tr>
      </thead>

      <tbody>
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
        <LeaderboardEntry rank={1} name="Adam" level={19} clearTime="01:30" />
      </tbody>

      <tfoot>
        <tr className="text-center text-gray-100/60">
          <td colSpan={4}>Oredered by highest level and lowest clear time.</td>
        </tr>
      </tfoot>
    </table>
  );
}
