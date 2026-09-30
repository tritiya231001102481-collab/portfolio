function Navbar() {
  const links = [
    { name: "About", target: "#about" },
    { name: "Education", target: "#education" },
    { name: "Skills", target: "#skills" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="logo" href="#home">
        My Portfolio
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.target}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
