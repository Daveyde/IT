import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description: "Proactive managed IT support, monitoring, patching, help desk, server management, and vendor coordination.",
};

export default function ManagedItPage() {
  return <ServiceDetail service={servicePages["managed-it"]} />;
}
