interface LeaderboardEntryProps {
  rank: number;
  name: string;
  level: number;
}

export function LeaderboardEntry({ rank, name, level }: LeaderboardEntryProps) {
  return (
    <tr className="text-center even:bg-gray-800 odd:bg-gray-700">
      <td className="py-2">{rank}</td>
      <td className="py-2">{name}</td>
      <td className="py-2">{level}</td>
    </tr>
  );
}
