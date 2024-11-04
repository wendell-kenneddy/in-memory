import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-gray-900 py-4 shadow-md">
      <div className="w-11/12 max-w-[720px] mx-auto flex items-center justify-center">
        <Link href="/">
          <Image src="/in-memory-logo.svg" alt="Logo" width={83} height={18} />
        </Link>
      </div>
    </header>
  );
}
