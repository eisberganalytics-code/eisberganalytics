"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Maximize2, TrendingDown, ArrowRight } from "lucide-react";

const valueProps = [
  {
    icon: Sparkles,
    title: "Succeed with AI",
    description:
      "Deploy AI-powered analytics on your data without sacrificing privacy, security, or control.",
  },
  {
    icon: Maximize2,
    title: "Democratize Insights",
    description:
      "Empower everyone in your organization to discover insights from your data using natural language.",
  },
  {
    icon: TrendingDown,
    title: "Drive Down Costs",
    description:
      "Gain efficiency and simplify complexity by unifying your approach to data, AI, and governance.",
  },
];

export function HeroSection() {
  return (
    <section className="px-6 pb-20 pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-clearwater-500">
            Systems
          </span>
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
          The Eisberg Analytics
          <br />
          Data Intelligence Systems
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-charcoal/60">
          Eisberg brings AI to your data to help you bring intelligence to
          your business.
        </p>

        {/* Chatbox GIF */}
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl">
          <img
            src="/video/ChatboxV6.gif"
            alt="AI-powered chatbox demo"
            className="w-full block"
          />
        </div>

        {/* Value proposition cards */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
          {valueProps.map((prop) => (
            <div key={prop.title}>
              <prop.icon className="mb-4 h-8 w-8 text-clearwater-500" />
              <h3 className="mb-3 text-xl font-bold text-charcoal">
                {prop.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/60">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <Button className="rounded-md bg-charcoal px-7 py-3 text-sm font-semibold text-white hover:bg-charcoal/90">
            Explore the Systems
          </Button>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-clearwater-500 transition-colors hover:text-clearwater-600"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
