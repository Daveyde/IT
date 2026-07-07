import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cloud Services",
  description: "Cloud services for hosting, Azure support, cloud backup, access control, and cost optimization.",
};

export default function CloudServicesPage() {
  return <ServiceDetail service={servicePages["cloud-services"]} />;
}
