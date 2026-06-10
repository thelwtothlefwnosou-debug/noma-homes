import Link from "next/link";

export default function Header() {
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <span className="mark" />
        <span>Noma Homes</span>
      </Link>

      <nav className="navlinks">
        <Link href="/#homes">Homes</Link>
        <Link href="/#how">How it works</Link>
        <Link href="/#corporate">Corporate</Link>
        <Link href="/host">List your home</Link>
        <Link href="/login" className="pill mobileKeep">Get started</Link>
      </nav>
    </header>
  );
}
