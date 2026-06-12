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
              <Link to="/hubspot-sprints" className="text-sm opacity-70 hover:opacity-100 transition-opacity">HubSpot Sprints</Link>
              <Link to="/revops" className="text-sm opacity-70 hover:opacity-100 transition-opacity">RevOps</Link>
              <Link to="/digital-ai" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Digital &amp; AI</Link>
              <Link to="/property" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Property</Link>
              <Link to="/insights" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Insights</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3"></p>
            <a href="mailto:ed.lobbett@thecakemix.co.uk" className="text-sm opacity-70 hover:opacity-100 transition-opacity"></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-surface-dark-foreground/10 text-xs opacity-50">
          © 2026 Thin Layer Consulting Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
