import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cybersecurity",
  description: "Cybersecurity services for email, identity, endpoint, network protection, monitoring, and incident response.",
};

export default function CybersecurityPage() {
  return <ServiceDetail service={servicePages.cybersecurity} />;
}
