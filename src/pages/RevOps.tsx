import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RevOpsStackDiagram from "@/components/RevOpsStackDiagram";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">

        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Revenue Operations
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-8 text-balance">
                RevOps - Making and measuring digital delivery
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  CRM as the operational core. Targeting and enrichment feeding the top of the funnel. Lifecycle automation and personalised experience closing the loop. Running a HubSpot partner agency meant building integrated digital stacks before anyone called it Revenue Operations — back when it required a dev team to connect the pieces and significant offline work to get the data right.
                </p>
                <p>
                  What's changed is who can do it. AI has moved the technical work into the hands of the commercial team. The architecture is the same. It's just faster, cheaper, and no longer dependent on a queue of dev tickets.
                </p>
              </div>
              <div className="mt-10">
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

        {/* How I work */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
                How I work
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The stack is a means to an end. What I care about is lead quality, alignment between what marketing promises and what sales closes, and outcomes that show up in revenue — not in a dashboard that nobody looks at.
              </p>
              <p>
                I build for the result first, then work backwards to the architecture that gets you there. The technology choices follow from that. The stack section below shows how the pieces typically fit together.
              </p>
            </div>
          </div>
        </section>

        {/* The stack */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container">
            <div className="max-w-3xl mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-4">
                The stack
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-3">
                Every business already has a stack. The question is whether it's deliberate or accidental.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                CRM, email, phone, web, messaging, finance — these have never all lived in one place, and they never will. The composable stack isn't a new idea; it's just what commercial technology looks like. What's changed is how easily the pieces connect, and what you can do with them when they do.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <RevOpsStackDiagram />
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
              The AI layer sits in infrastructure because that's where it belongs — it works when the foundations are right.{" "}
              <Link to="/digital-ai" className="underline underline-offset-4 hover:text-foreground transition-colors">
                More on that in the Digital & AI section →
              </Link>
            </p>
          </div>
        </section>

        {/* What I've built */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-8">
                What I've built
            </h2>
            <div className="space-y-8">
              {[
                {
                  label: "B2B services, scale-up",
                  body: "Full GTM redesign — HubSpot as operational core, integrated analytics, automated stage-gates and handoffs across marketing and sales. Pipeline data became trustworthy. Two consecutive years of ~50% revenue growth followed.",
                },
                {
                  label: "Build to Rent, start-up",
                  body: "CRM transformation alongside an API layer connecting sales, operations and investor reporting. ETL platform to de-silo data across departments. Real-time investor insight and integrated pipeline reporting where there had been none.",
                },
                {
                  label: "Fintech/crypto, start-up — CCO",
                  body: "HubSpot build and implementation supporting a global retail investor campaign and sales process. $4m raised.",
                },
                {
                  label: "B2B services, early stage",
                  body: "End-to-end workflow re-engineering in Zoho One — quoting, contracting, customer portal, integrated data dashboards. Client secured seed funding on the back of it.",
                },
                {
                  label: "Early-stage start-up",
                  body: "Apollo for company and contact data, custom signal enrichment and automation, proprietary email sequencing tooling with full CRM connectivity. GTM strategy through to technical build, with a full feedback loop into messaging and ICP development.",
                },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-accent/30 pl-5">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to work with me */}
        <section className="bg-[#F5F3F0] py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">Ways to work with me</p>
              <h2 className="font-serif text-4xl md:text-5xl font-600 leading-tight text-foreground mb-4">
                Three ways to work together
              </h2>
              <p className="text-slate-700 text-lg">
                As light or as embedded as the engagement requires.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-8 rounded-lg border border-[#E8E4DF] bg-white hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 italic">Employed / Retained</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Project, retained or fully employed. GTM strategy through to technical build — integration architecture, workflow automation, data design, CRM implementation. Build and run a full RevOps function, or come in on a specific part of it.
                </p>
              </div>
              <div className="p-8 rounded-lg border border-[#E8E4DF] bg-white hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 italic">Contract / Day Rate</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Day-rate or fixed-term. Interim Head of RevOps, GTM Engineer, CRM Lead. Available for embedded roles where the work needs someone who can operate commercially and build technically.
                </p>
              </div>
              <div className="p-8 rounded-lg border border-[#E8E4DF] bg-white hover:shadow-md transition-shadow">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 italic">HubSpot Sprints</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Fixed-price, fixed-scope HubSpot implementations. A specific problem, solved in days not months, with a clean handover.
                </p>
                <Link to="/hubspot-sprints" className="mt-4 text-sm font-medium text-accent hover:underline">
                  See HubSpot Sprints →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-surface-dark text-surface-dark-foreground">
          <div className="container max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4">
              Let's talk about what you need.
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
