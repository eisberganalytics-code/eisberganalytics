import { Diamond } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-cream px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Diamond className="h-5 w-5 text-clearwater-500 fill-clearwater-500" />
          <span className="text-sm font-semibold text-charcoal">
            Eisberg Analytics
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-charcoal/50">
          <a href="#" className="hover:text-charcoal/80">
            Privacy
          </a>
          <a href="#" className="hover:text-charcoal/80">
            Terms
          </a>
          <span>&copy; 2026 Eisberg Analytics</span>
        </div>
      </div>
    </footer>
  );
}
