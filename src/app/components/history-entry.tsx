export interface HistoryEntryProps {
  level: number;
  date: number;
}

export function HistoryEntry({ level, date }: HistoryEntryProps) {
  return (
    <tr className="text-center even:bg-gray-800 odd:bg-gray-700">
      <td className="py-2">{level}</td>
      <td className="py-2">{new Date(date).toLocaleDateString()}</td>
    </tr>
  );
}
