import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Networking",
  description: "Business networking, firewalls, switching, secure Wi-Fi installation, VPN access, and network documentation.",
};

export default function NetworkingPage() {
  return <ServiceDetail service={servicePages.networking} />;
}
