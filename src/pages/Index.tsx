import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const tracks = [
  {
    title: "HubSpot Sprints",
    description:
      "Fix HubSpot fast. Fixed-price, fixed-scope implementations in days, not months.",
    link: "/hubspot-sprints",
  },
  {
    title: "Revenue Operations",
    description:
      "Build the stack that connects your pipeline, data, and outreach. Apollo, CRM, enrichment, automation.",
    link: "/revops",
  },
  {
    title: "Digital & AI",
    description:
      "Digital transformation done properly — strategy, data, systems design, and AI when the foundations are right.",
    link: "/digital-ai",
  },
];

const trustItems = [
  "HubSpot Specialist",
  "Fixed-price, fixed-scope delivery",
  "Built systems for Housing Hand",
];

const personas = [
  {
    title: "Operations leads",
    description:
      "You're responsible for how the CRM, outreach, and data work together. You know what needs fixing but don't have the time or headcount to do it yourself.",
  },
  {
    title: "Growing teams (10–100 people)",
    description:
      "You've outgrown the startup setup. The CRM is in place but it's not configured for your stage — messy data, manual processes, reporting that nobody trusts.",
  },
  {
    title: "Founders scaling a function",
    description:
      "You're building a sales or customer operations function and need the systems right from the start. No legacy mess to untangle, but you want it done properly.",
  },
];

const outcomesList = [
  {
    title: "CRM that reflects how you actually sell",
    description:
      "Deal stages, pipelines, and properties configured for your business — not the default setup. Clean data, accurate forecasting.",
  },
  {
    title: "Outreach that runs itself",
    description:
      "Sequences, follow-ups, and task creation automated. Your team focuses on conversations, not clicking buttons.",
  },
  {
    title: "Reporting the business trusts",
    description:
      "Dashboards built on clean, connected data. Pipeline velocity, conversion rates, and team performance — not vanity metrics.",
  },
  {
    title: "Systems that talk to each other",
    description:
      "CRM connected to your operational stack — enrichment, finance tools — with data flowing where it should.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-white py-32">
          <div className="max-w-6xl mx-auto px-8">
            <div className="animate-fade-in-up">
              <div className="max-w-5xl mx-auto space-y-6">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-600 leading-tight text-foreground text-balance text-center">
                  RevOps | CRM | Digital Transformation
                </h1>
                <p className="text-base md:text-lg text-accent leading-relaxed max-w-3xl mx-auto text-center">
                  When data, process and stack flow together, RevOps becomes a feedback loop that guides and sharpens strategy. I design and build those systems.
                </p>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
                  A decade as agency founder and CCO — GTM partner to start-ups and scale-ups, and before that running global campaigns client-side. The work is the same either way: revenue systems that grow the business and sharpen the strategy. That's more achievable now than it's ever been — and more dependent on getting the architecture right.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button variant="hero" asChild>
                  <a href="mailto:ed.lobbett@thecakemix.co.uk">
                    Discuss a project →
                  </a>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/hubspot-sprints">
                    See how I work →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-[#F5F3F0] border-y border-border py-6">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-slate-700">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I work */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-4xl">
              <h2 className="font-serif text-4xl md:text-5xl font-600 leading-tight text-foreground mb-6">Ed Lobbett</h2>
              <div className="space-y-5 text-slate-700 text-lg leading-relaxed">
                <p>
                  CCO and agency founder who's spent years working directly with dev teams to connect campaigns to technology and data. That combination — commercial leadership and technical architecture — is what RevOps actually requires.
                </p>
                <p>
                  The discipline has a new name. The work isn't new. I've been doing it since CRM was emerging as an idea, not a product category.
                </p>
                <p>
                  That means I'm as comfortable in a trading meeting as I am specifying an API integration. After a decade doing both, that's the only way I know how to work.
                </p>
                <p>
                  In practice: I map where revenue is leaking, design the system that closes it, build it in a CRM and connect it to whatever else needs to talk to it. Apollo for prospecting and enrichment, Clay for data transformation and sequencing, CRM as the operational core. The AI layer sits on top of that — and works properly because the foundations are right.
                </p>
                <p>
                  What's changed is what's possible. Richer data, better enrichment, AI-driven execution — campaigns are more accurate, product and strategy can be fed by real customer signals in real time, and the integration work that once needed a technical team can now be done by the people running revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service tracks */}
        <section className="bg-[#FAF8F5] py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">What I do</p>
              <h2 className="font-serif text-4xl md:text-5xl font-600 leading-tight text-foreground mb-4">
                Three areas. One approach.
              </h2>
              <p className="text-slate-700 text-lg">
                Each engagement is scoped, priced, and delivered with a clear handover. No open-ended retainers.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tracks.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="p-8 rounded-lg border border-[#E8E4DF] bg-white hover:shadow-md transition-shadow group block"
                >
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-sm font-medium text-accent">
                    Learn more →
                  </p>
                </Link>
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
                  Learn more about HubSpot Sprints →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">What changes</p>
              <h2 className="font-serif text-4xl md:text-5xl font-600 leading-tight text-foreground mb-4">
                Systems that actually work for your business
              </h2>
              <p className="text-slate-700 text-lg">
                Most teams use a fraction of what their tools can do. I close that gap.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {outcomesList.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border border-border bg-[#FAF8F5] hover:shadow-md transition-shadow"
                >
                  <h3 className="font-serif text-lg font-600 text-foreground mb-2">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1C2B3A] py-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-600 mb-4 text-white">
                Let's talk about what you need
              </h2>
              <p className="text-lg text-white/70 mb-8">
                A short call to understand your setup. You'll get clear thoughts on what needs fixing and how I'd approach it. No pitch deck, no pressure.
              </p>
              <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
                <a href="https://calendly.com/thecakemix/15min">
                  Book a short call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
