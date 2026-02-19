"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const tabs = [
  {
    id: "etl",
    label: "ELT Pipeline",
    image: "/elt-pipeline.png",
    title: "Intelligent data processing for batch and real time",
    description:
      "Implement a single solution for all of your ELT use cases that automatically adapts to help ensure data quality.",
    bullets: [
      "Simple workflow authoring for batch and streaming",
      "End-to-end pipeline monitoring",
      "Hands-off reliability and optimization at scale",
    ],
  },
  {
    id: "warehouse",
    label: "Data Warehouse",
    image: "/data-warehouse.png",
    title: "Clean, structured data for every use case",
    description:
      "Achieve better price/performance for SQL and BI workloads by moving from legacy data sources to a modern cloud warehouse.",
    bullets: [
      "Serverless for simplified management",
      "AI-optimized query execution",
      "Open formats and APIs to avoid lock-in",
    ],
  },
  {
    id: "rag",
    label: "RAG & Vectors",
    image: "/rag-vectors.png",
    title: "Vectorized unstructured data for AI retrieval",
    description:
      "Transform documents, images, and unstructured content into searchable vector embeddings that power intelligent AI retrieval.",
    bullets: [
      "Automated document chunking and embedding",
      "Semantic search across all data types",
      "Real-time index updates as data changes",
    ],
  },
  {
    id: "ai",
    label: "AI Analytics",
    image: "/ai-analytics.png",
    title: "Build better AI with a data-centric approach",
    description:
      "Great models are built with great data. Maintain quality, control and data privacy across the entire AI workflow.",
    bullets: [
      "Create, tune and deploy your own AI models",
      "Automate experiment tracking and governance",
      "Deploy and monitor models at scale",
    ],
  },
  {
    id: "insights",
    label: "Data Insights",
    image: "/data-insights.png",
    title: "Ask questions, get answers from your data",
    description:
      "Empower business users to discover insights using natural language — no SQL or technical expertise required.",
    bullets: [
      "Natural language query interface",
      "Automated chart and report generation",
      "Context-aware answers from your data warehouse",
    ],
  },
];

export function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState("etl");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="services" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-clearwater-500">
            Our Services
          </span>
        </div>
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
          Unify all your data + AI
        </h2>

        {/* Tab pills */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-clearwater-500 text-white shadow-md"
                  : "border border-charcoal/15 bg-white text-charcoal hover:border-clearwater-500/40 hover:text-clearwater-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: text content */}
          <div>
            <h3 className="mb-4 text-2xl font-bold leading-snug text-charcoal md:text-3xl">
              {current.title}
            </h3>
            <p className="mb-8 text-base leading-relaxed text-charcoal/60">
              {current.description}
            </p>
            <ul className="mb-10 space-y-3">
              {current.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-clearwater-500" />
                  <span className="text-sm font-medium text-charcoal/80">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="#contact">
                <Button className="rounded-md bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal/90">
                  See How
                </Button>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 text-sm font-semibold text-clearwater-500 transition-colors hover:text-clearwater-600"
              >
                Watch demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: tab image */}
          <div className="flex items-center justify-center">
            <img
              src={current.image}
              alt={current.label}
              className="w-full max-w-lg rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
