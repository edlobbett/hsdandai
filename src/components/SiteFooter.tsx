import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold mb-2">Digital & AI</p>
            <p className="text-sm opacity-70">
              HubSpot specialists for teams that need it to actually work.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Pages</p>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/property" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Property</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Contact</p>
            <a href="mailto:ed.lobbett@thecakemix.co.uk" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              ed.lobbett@thecakemix.co.uk
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-surface-dark-foreground/10 text-xs opacity-50">
          © {new Date().getFullYear()} Digital & AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
