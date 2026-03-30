import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold text-foreground tracking-tight">
          Digital & AI
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/property" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Property
          </Link>
          <Button variant="cta" size="sm" asChild>
            <a href="mailto:hello@digitalandai.co.uk">Get in touch</a>
          </Button>
        </nav>
        <Button variant="cta" size="sm" className="md:hidden" asChild>
          <a href="mailto:hello@digitalandai.co.uk">Get in touch</a>
        </Button>
      </div>
    </header>
  );
};

export default SiteHeader;
