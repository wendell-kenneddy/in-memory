import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-11/12 max-w-[720px] mx-auto flex items-ceter justify-center text-gray-100/60">
      <span>
        Made by{" "}
        <Link
          href="https://github.com/wendell-kenneddy"
          className="underline transition-colors hover:text-gray-100"
        >
          Wendell Kenneddy
        </Link>
      </span>
    </footer>
  );
}
