import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-divider">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight text-heading">
            MC Leads
          </div>
          <a 
            href="mailto:mario@mceleads.com"
            className="text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            mario@mceleads.com
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-heading leading-tight">
            AI-Powered B2B Outreach
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            We help SaaS companies and marketing agencies book qualified sales conversations.
          </p>
          <p className="mt-4 text-sm text-text-secondary">
            Founder-led. Results-focused.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-divider" />
      </div>

      {/* What We Do Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-heading mb-6">
            What We Do
          </h2>
          <p className="text-text-secondary leading-relaxed">
            MC Leads runs personalized outbound email campaigns designed to start real conversations—not fill inboxes with noise. We focus on quality leads and genuine connections, helping early-stage SaaS teams and agencies build predictable pipelines without the spam.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-divider" />
      </div>

      {/* Who It's For Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-heading mb-6">
            Who It's For
          </h2>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>SaaS founders (Seed–Series A)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>Digital & marketing agencies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <span>B2B service businesses</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-divider" />
      </div>

      {/* Founder Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-heading mb-6">
            Founder
          </h2>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-lg font-medium text-heading shrink-0">
              ME
            </div>
            <div>
              <h3 className="font-semibold text-heading">Mario Ezeh</h3>
              <p className="text-sm text-text-secondary mt-0.5">Founder, MC Leads</p>
              <p className="text-text-secondary mt-3 leading-relaxed">
                Computer science student focused on AI-driven growth systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="border-t border-divider" />
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-semibold text-heading mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a 
              href="mailto:mario@mceleads.com"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              mario@mceleads.com
            </a>
            <Button asChild>
              <a 
                href="#calendly" 
                className="inline-flex items-center gap-2"
              >
                Book a quick intro call
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-divider py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} MC Leads — All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
