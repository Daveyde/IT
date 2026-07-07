import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Backup & Disaster Recovery",
  description: "Backup and disaster recovery planning, immutable backups, recovery testing, continuity planning, and server restore.",
};

export default function BackupDisasterRecoveryPage() {
  return <ServiceDetail service={servicePages["backup-disaster-recovery"]} />;
}
