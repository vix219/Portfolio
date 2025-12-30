import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-link">Home</Link>
      <Link href="/dashboard" className="nav-link">Dashboard</Link>
      <Link href="/about" className="nav-link">About</Link>
    </nav>
  );
}
