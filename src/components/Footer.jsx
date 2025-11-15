export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Amanda de Mello Ferreira.</p>
        <p className="footer-small">Desenvolvedora full-stack em formação.</p>
      </div>
    </footer>
  );
}
