"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Contact form submitted:", {
      name: formData.get("name"),
      organization: formData.get("organization"),
      email: formData.get("email"),
    });
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-charcoal">
          Get in Touch
        </h2>
        <p className="mb-10 text-center text-base text-charcoal/60">
          Ready to transform your data? Let&apos;s talk.
        </p>

        {submitted ? (
          <div className="rounded-xl bg-clearwater-50 p-8 text-center ring-1 ring-clearwater-200/40">
            <p className="text-lg font-semibold text-clearwater-700">
              Thank you!
            </p>
            <p className="mt-2 text-sm text-charcoal/60">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label
                htmlFor="name"
                className="mb-1.5 text-sm font-medium text-charcoal"
              >
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="bg-white"
              />
            </div>
            <div>
              <Label
                htmlFor="organization"
                className="mb-1.5 text-sm font-medium text-charcoal"
              >
                Organization
              </Label>
              <Input
                id="organization"
                name="organization"
                type="text"
                placeholder="Your organization"
                required
                className="bg-white"
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="mb-1.5 text-sm font-medium text-charcoal"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="bg-white"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-md bg-clearwater-500 py-3 text-sm font-semibold text-white hover:bg-clearwater-600"
            >
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
