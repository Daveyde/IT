import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Newsletter } from "@/components/sections/Newsletter";
import { CTASection } from "@/components/sections/CTASection";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Professional IT insights across cybersecurity, networking, Microsoft, cloud, business IT, and tutorials.",
};

const categories = ["Cybersecurity", "Networking", "Microsoft", "Cloud", "Business IT", "Tutorials"];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Technology guidance for leaders who need clear decisions."
        text="Security, networking, Microsoft, cloud, business IT, and tutorials without unnecessary jargon."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:px-8 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="space-y-5">
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-white">Categories</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-white/65">
                  {category}
                </span>
              ))}
            </div>
          </GlassCard>
          <Newsletter />
        </aside>
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <GlassCard key={post.title} className="group p-6">
              <p className="text-xs font-semibold uppercase text-limitless-blue">{post.category}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/62">{post.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-limitless-blue">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </GlassCard>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
