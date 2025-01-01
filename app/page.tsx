"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  GitGraph,
  MessageSquare,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { Section } from "@/components/ui/section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        {/* Hero Section */}
        <Section className="relative pt-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e363f40,transparent)]" />
          </div>
          <div className="container flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                Your Knowledge, <GradientText>Connected & Alive</GradientText>
              </h1>
              <p className="mb-12 max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                Build intelligent knowledge bases that understand context. Turn
                your content into an interactive AI assistant that learns,
                connects, and evolves with your data.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Features Section */}
        <Section className="bg-muted/50" id="features">
          <div className="container">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Everything you need to build a{" "}
                <GradientText>smart knowledge base</GradientText>
              </h2>
              <p className="text-muted-foreground">
                Powerful features to help you manage and interact with your
                knowledge graph effectively.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon={Upload}
                title="Easy Content Upload"
                description="Import your existing content seamlessly. Support for multiple formats including Markdown, PDF, and more."
              />
              <FeatureCard
                icon={GitGraph}
                title="Intelligent Graph"
                description="Automatically organize your content into a connected knowledge graph for better context and understanding."
              />
              <FeatureCard
                icon={MessageSquare}
                title="Natural Conversations"
                description="Chat with your knowledge base using natural language. Get accurate answers with source references."
              />
              <FeatureCard
                icon={Brain}
                title="AI-Powered Insights"
                description="Leverage advanced AI to extract insights, identify patterns, and enhance your knowledge base."
              />
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section>
          <div className="container">
            <div className="relative rounded-[2rem] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                  Ready to enhance your knowledge base?
                </h2>
                <p className="mb-12 text-lg text-muted-foreground">
                  Get started with Knex Agent today. Easy to integrate, powerful
                  to use.
                </p>
                <Button size="lg" className="gap-2">
                  Start Building <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
    </>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border bg-background p-8 transition-all hover:shadow-lg">
      <div className="mb-6 inline-block rounded-lg bg-primary/10 p-3 text-primary ring-8 ring-primary/5">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
