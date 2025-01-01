"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Documentation", href: "#docs" },
  { name: "Pricing", href: "#pricing" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-xl font-semibold text-transparent"
            >
              Knex Agent
            </Link>
            <div className="hidden gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden gap-4 md:flex">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <SheetHeader>
                  <SheetTitle className="text-left">Knex Agent</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" asChild className="justify-start">
                      <Link href="/login">Sign in</Link>
                    </Button>
                    <Button
                      asChild
                      className="justify-start bg-gradient-to-r from-primary to-purple-600"
                    >
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
