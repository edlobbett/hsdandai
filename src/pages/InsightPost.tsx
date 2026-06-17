import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "@/pages/NotFound";
import posts from "@/content/insights";

const InsightPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const paragraphs = post.body.split("\n\n").filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Back link */}
        <section className="pt-10 pb-0">
          <div className="container max-w-prose">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </div>
        </section>

        {/* Header */}
        <section className="py-10 md:py-14">
          <div className="container max-w-prose">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                <span className="text-accent font-semibold uppercase tracking-wider">
                  {post.series}
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-600 leading-tight text-foreground text-balance">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-16 md:pb-20">
          <div className="container max-w-prose">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {paragraphs.map((para, i) => {
                if (para.startsWith("## ")) {
                  const headingText = para.replace("## ", "");
                  return (
                    <h2
                      key={i}
                      className="font-serif text-2xl md:text-3xl font-600 text-foreground mt-10 mb-4"
                    >
                      {headingText}
                    </h2>
                  );
                }
                if (
                  para.startsWith("What specifically") ||
                  para.startsWith("Who decides") ||
                  para.startsWith("Does this")
                ) {
                  return (
                    <p
                      key={i}
                      className="text-base md:text-lg text-foreground leading-relaxed mb-3"
                    >
                      {para}
                    </p>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5"
                  >
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Author sign-off */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">
                Ed Lobbett
              </p>
            </div>
          </div>
        </section>

        {/* Bottom back link */}
        <section className="pb-16 md:pb-20">
          <div className="container max-w-prose">
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default InsightPost;
