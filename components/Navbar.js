export default function Navbar() {
  return (
    <header className="nav">
      <a href="#top" className="nav-brand">Penguin World</a>
      <nav className="nav-links" aria-label="Main">
        <a href="#about">About</a>
        <a href="#species">Species</a>
        <a href="#globe">Globe</a>
        <a href="#facts">Facts</a>
      </nav>
    </header>
  );
}
