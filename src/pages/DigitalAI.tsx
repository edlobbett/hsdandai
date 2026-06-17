import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FivePillarsDiagram from "@/components/FivePillarsDiagram";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
                Digital & AI
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Digital Transformation | Integration | Automation
              </h1>
              <p className="text-base md:text-lg text-accent leading-relaxed mb-6">
                When systems are connected and decisions are automated, growth stops depending on adding more people.
              </p>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most businesses already run on a connected stack — CRM, web, email, messaging, finance, and a handful of specialist tools — whether that's a deliberate choice or an accidental one. The work is making that stack talk to itself: clean data flowing between systems, manual steps replaced with rules, and a foundation solid enough that AI can be layered on top without guesswork. I've been doing this since 2006, across RevOps, CRM implementation, and digital transformation more broadly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button variant="hero" asChild>
                  <a href="mailto:ed.lobbett@thecakemix.co.uk">
                    Discuss a project →
                  </a>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/revops">
                    See how I work →
                  </Link>
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
                <strong>Strategy first.</strong> Before any system gets touched, I want a clear answer to one question: what outcome is this meant to produce? Without that, integration work just moves the mess around faster.
              </p>
              <p>
                <strong>Data is the thread.</strong> Whether it's there from day one or builds up over time, data is what tells you if the strategy is working. Every connected system should make that thread stronger, not harder to follow.
              </p>
              <p>
                <strong>Design for what's possible, not what's already there.</strong> Digitising an existing process just makes the old process faster. The better question is what the process would look like if it were designed today, with the tools available today.
              </p>
              <p>
                <strong>Change happens at the right points, with the right people.</strong> Technology decisions that bypass the people who'll actually use the system don't stick. I build in feedback points deliberately rather than treating rollout as a one-way push.
              </p>
              <p>
                <strong>Technology is the enabler, not the starting point.</strong> Every business already has a composable stack — CRM, web, messaging, phone, finance — whether or not that's been a conscious decision. The question isn't whether to integrate; it's whether you're doing it deliberately.
              </p>
            </div>
          </div>
        </section>

        {/* Five Pillars diagram */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-10">
              The five pillars
            </h2>
            <div className="max-w-2xl mx-auto">
              <FivePillarsDiagram />
            </div>
          </div>
        </section>

        {/* What about AI? */}
        <section className="py-16 md:py-20 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-600 text-foreground mb-6">
              What about AI?
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                AI isn't a separate initiative sitting next to digital transformation. For most small and mid-sized businesses, it's a component of it — already showing up as desk-level productivity tools, service bots, and AI features embedded directly inside the CRM itself.
              </p>
              <p>
                What's coming next is agents and workflow automation, extending the exception management that traditional automation has always done — but now able to work on unstructured data too: emails, notes, free text. The shift is significant. The requirement underneath it isn't: AI still needs clean, connected data to work with.
              </p>
              <p>
                I use AI extensively in my own systems, including this one, and build it into client implementations the same way.
              </p>
              <p className="text-sm text-muted-foreground italic">
                A fuller piece on this is coming soon.
              </p>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
};

export default DigitalAI;
