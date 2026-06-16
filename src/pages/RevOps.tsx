import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevOpsStackDiagram from "@/components/RevOpsStackDiagram";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const RevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — Placeholder */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                REVENUE OPERATIONS
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                The stack that connects your revenue operations
              </h1>
              <div className="border-2 border-dashed border-accent/30 rounded-lg p-8 bg-warm/50">
                <p className="text-muted-foreground text-base leading-relaxed italic">
                  [Hero copy — approx 2 sentences, peer-level tone. To be replaced.]
                </p>
              </div>
              <div className="mt-8">
                <Button variant="hero" asChild>
                  <a href="mailto:ed.lobbett@thecakemix.co.uk">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The stack — interactive diagram */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">The stack</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Everything connected
              </h2>
              <p className="text-muted-foreground text-lg">
                Strategy, data, execution, and infrastructure — each cluster feeds the next. Click any node to see it highlighted.
              </p>
            </div>
            <RevOpsStackDiagram />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Ready to build your revenue stack?
            </h2>
            <p className="text-lg opacity-70 mb-8">
              A short call to understand your setup. You'll get clear thoughts on what needs building and how I'd approach it. No pitch deck, no pressure.
            </p>
            <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
              <a href="https://calendly.com/thecakemix/15min">
                Book a short call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default RevOps;
