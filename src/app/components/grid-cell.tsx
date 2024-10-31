export interface GridCellProps {
  selected: boolean;
  highlight: boolean;
  canMove: boolean;
  onClick: () => void;
}

export function GridCell({ selected, highlight, canMove, onClick }: GridCellProps) {
  const hoverCss = canMove ? "hover:bg-teal-200" : "";

  function handleClick() {
    if (canMove) {
      onClick();
    }
  }

  return highlight || selected ? (
    <div className="w-8 h-8 rounded-md bg-teal-200 cursor-not-allowed" onClick={onClick}></div>
  ) : (
    <div
      className={`w-8 h-8 rounded-md bg-teal-600 cursor-pointer transition-colors ${hoverCss}`}
      onClick={handleClick}
    ></div>
  );
}
