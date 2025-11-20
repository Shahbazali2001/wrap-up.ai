import Link from "next/link";

export default function Header() {
  return (
    <nav className="container">
      <div>
        <Link href="/">WrapUp.ai</Link>
      </div>

      <div>
        <Link href="/#pricing">Pricing</Link>
      </div>
    </nav>
  );
}
