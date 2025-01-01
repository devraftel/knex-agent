import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Documentation", href: "#docs" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About DevRaftel", href: "https://devraftel.com/about" },
    { name: "Blog", href: "https://devraftel.com/blog" },
    { name: "Other Products", href: "https://devraftel.com/products" },
  ],
  legal: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-xl font-semibold text-transparent"
            >
              Knex Agent
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The open-source solution for building AI-powered knowledge bases.
              Connect your content, chat naturally, and discover insights
              through intelligent graph relationships.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              A{" "}
              <Link
                href="https://devraftel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                DevRaftel
              </Link>{" "}
              product
            </p>
            <div className="mt-6 flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <Link
                  href="https://github.com/devraftel/knex-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-6 space-y-4">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-6 space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-6 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DevRaftel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
