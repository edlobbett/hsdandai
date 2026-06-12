import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Network, Cpu } from "lucide-react";

const areas = [
  {
    icon: Lightbulb,
    title: "Strategy and systems design",
    description:
      "Most businesses digitise what they already do. We help you redesign for what technology makes possible — starting with what your business actually needs, not what your current tools dictate.",
  },
  {
    icon: Network,
    title: "Data architecture and connectivity",
    description:
      "Systems only work when data flows properly between them. We design the architecture that connects your CRM, operations, and analytics tools into a coherent whole.",
  },
  {
    icon: Cpu,
    title: "AI implementation (when the stack is ready)",
    description:
      "AI doesn't replace digital transformation — it extends it. The businesses that get AI right are the ones that got the foundations right first. We make sure the foundations are solid before adding intelligence.",
  },
];

const DigitalAI = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                DIGITAL & AI
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Digital transformation done properly
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                AI doesn't replace digital transformation — it extends it. The businesses that get AI right are the ones that got the foundations right first.
              </p>
              <Button variant="hero" asChild>
                <a href="mailto:ed.lobbett@thecakemix.co.uk">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Three areas */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What we do</p>
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                Three areas. One approach.
              </h2>
              <p className="text-muted-foreground text-lg">
                Each engagement is scoped, priced, and delivered with a clear handover. No open-ended retainers.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {areas.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <item.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thesis */}
        <section className="py-20 md:py-24">
          <div className="container max-w-3xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our view</p>
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
              Redesign for what's possible, not what you already do
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                Most businesses try to digitise what they already do rather than redesign for what technology makes possible. They bolt automation onto broken processes, add AI to messy data, and wonder why the return doesn't materialise.
              </p>
              <p>
                We take a different approach. We start with what your business actually needs — the outcomes, the workflows, the decisions your people make every day. Then we design the systems that support that reality.
              </p>
              <p>
                Technology follows function. AI follows foundations. When the stack is right, intelligence is an addition — not a gamble.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container text-center max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Let's talk about your digital strategy
            </h2>
            <p className="text-lg opacity-70 mb-8">
              A short call to understand where you are and where you need to be. No pitch deck, no pressure.
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

export default DigitalAI;
