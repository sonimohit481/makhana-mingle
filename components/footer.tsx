import type { FooterSection } from "@/types";

interface FooterProps {
  sections: FooterSection[];
}

export function Footer({ sections }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Makhana Mingle</h3>
          <p>
            A modern Indian food brand shaping healthier snacking through
            makhana, recipes, and slow-crafted pantry experiences.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="LinkedIn">
              🔗
            </a>
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}</h4>
            {section.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Makhana Mingle.</p>
      </div>
    </footer>
  );
}
