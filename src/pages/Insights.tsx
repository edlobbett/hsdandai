import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { FileText } from "lucide-react";

const Insights = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                THOUGHTS
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Thinking on digital transformation, RevOps, and HubSpot.
              </p>
            </div>
          </div>
        </section>

        {/* Coming soon */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container text-center max-w-xl">
            <FileText className="h-12 w-12 text-accent/40 mx-auto mb-4" />
            <h2 className="font-serif text-2xl md:text-3xl font-600 text-foreground mb-3">
              Posts coming soon
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We're writing about the things we see every day — what actually works in HubSpot implementations, why most RevOps setups break, and how to think about digital transformation when you're not a giant enterprise.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Insights;
