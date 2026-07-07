import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Microsoft 365",
  description: "Microsoft 365 migration, administration, tenant hardening, Exchange, Teams, SharePoint, and security support.",
};

export default function Microsoft365Page() {
  return <ServiceDetail service={servicePages["microsoft-365"]} />;
}
