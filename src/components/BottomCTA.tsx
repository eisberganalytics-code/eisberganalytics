"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function BottomCTA() {
  return (
    <section className="bg-gradient-to-b from-clearwater-50 to-cream px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Label */}
        <span className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-clearwater-500">
          The Data Intelligence Systems
        </span>

        {/* Heading */}
        <h2 className="mb-2 text-4xl font-black tracking-tight text-charcoal md:text-5xl lg:text-6xl">
          ALL YOUR DATA.
        </h2>
        <h2 className="mb-6 text-4xl font-black tracking-tight text-clearwater-500 md:text-5xl lg:text-6xl">
          ONE INTELLIGENT SYSTEMS.
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-xl text-base text-charcoal/60">
          Turn enterprise data into instant insights with Eisberg
          Intelligence.
        </p>

        {/* Decorative search bar */}
        <div className="mx-auto mb-12 max-w-2xl">
          <div className="flex items-center rounded-full bg-white px-6 py-4 shadow-lg ring-1 ring-black/5">
            <span className="flex-1 text-left text-base text-charcoal/40">
              What&apos;s our real ROI by channel?
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-clearwater-50 px-3 py-1.5">
                <Sparkles className="h-4 w-4 text-clearwater-500" />
                <span className="text-xs font-medium text-clearwater-600">
                  Extended thinking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button className="rounded-full bg-clearwater-500 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-clearwater-600">
            Learn More About Eisberg Intelligence
          </Button>
        </div>
      </div>
    </section>
  );
}
