import {
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  DatabaseBackup,
  Headset,
  Laptop,
  LockKeyhole,
  LucideIcon,
  MessageCircle,
  Network,
  PanelsTopLeft,
  PhoneCall,
  Router,
  Server,
  ShieldCheck,
  Wifi,
  Zap,
} from "lucide-react";

export type Service = {
  title: string;
  href: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const coreServices: Service[] = [
  {
    title: "Managed IT Services",
    href: "/services/managed-it",
    icon: Headset,
    summary: "Proactive endpoint, server, vendor, and user support for teams that need technology to stay quiet and reliable.",
    details: ["24/7 monitoring", "Patch management", "Help desk support", "Vendor coordination"],
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
    summary: "Modern protection for identities, devices, email, networks, and cloud applications.",
    details: ["Threat monitoring", "Email security", "MFA rollout", "Incident response"],
  },
  {
    title: "Microsoft 365",
    href: "/services/microsoft-365",
    icon: PanelsTopLeft,
    summary: "Secure Microsoft 365 migrations, administration, training, and governance for growing organizations.",
    details: ["Tenant hardening", "Exchange migration", "Teams setup", "SharePoint design"],
  },
  {
    title: "Cloud Services",
    href: "/services/cloud-services",
    icon: Cloud,
    summary: "Cloud hosting, modernization, storage, and administration designed around uptime and cost control.",
    details: ["Azure support", "Cloud backup", "Access control", "Cost optimization"],
  },
  {
    title: "Business Networking",
    href: "/services/networking",
    icon: Network,
    summary: "High-performance wired networks, secure Wi-Fi, firewalls, switching, and remote access.",
    details: ["Firewall setup", "Switching", "Wi-Fi installation", "VPN access"],
  },
  {
    title: "Backup & Disaster Recovery",
    href: "/services/backup-disaster-recovery",
    icon: DatabaseBackup,
    summary: "Tested recovery plans, encrypted backups, and business continuity for critical systems.",
    details: ["Recovery testing", "Immutable backup", "Server restore", "Continuity planning"],
  },
];

export const additionalServices: Service[] = [
  {
    title: "Wi-Fi Installation",
    href: "/services/networking",
    icon: Wifi,
    summary: "Business-grade wireless design with coverage planning, secure access, and guest networks.",
    details: ["Site surveys", "Access points", "Guest portals", "Roaming optimization"],
  },
  {
    title: "Remote Support",
    href: "/services/managed-it",
    icon: Laptop,
    summary: "Fast, secure remote troubleshooting for users, workstations, software, and peripherals.",
    details: ["Same-day triage", "Secure sessions", "User training", "Ticket tracking"],
  },
  {
    title: "IT Consulting",
    href: "/services/managed-it",
    icon: BriefcaseBusiness,
    summary: "Roadmaps, audits, budgeting, and vendor guidance for better technology decisions.",
    details: ["IT roadmap", "Risk review", "Budget planning", "Vendor selection"],
  },
  {
    title: "Cloud Backup",
    href: "/services/backup-disaster-recovery",
    icon: Cloud,
    summary: "Encrypted cloud backup for endpoints, servers, Microsoft 365, and critical business data.",
    details: ["Retention policy", "Restore testing", "M365 backup", "Encrypted storage"],
  },
  {
    title: "Disaster Recovery",
    href: "/services/backup-disaster-recovery",
    icon: Zap,
    summary: "Recovery plans built around measurable uptime goals and clear response playbooks.",
    details: ["RTO planning", "RPO planning", "Failover plans", "Tabletop tests"],
  },
  {
    title: "Server Management",
    href: "/services/managed-it",
    icon: Server,
    summary: "Server monitoring, maintenance, backup verification, and lifecycle planning.",
    details: ["Windows Server", "Virtualization", "Storage health", "Access reviews"],
  },
  {
    title: "VoIP Solutions",
    href: "/services/networking",
    icon: PhoneCall,
    summary: "Voice systems, call routing, number porting, and hybrid office communication.",
    details: ["Phone setup", "Call queues", "Auto attendants", "Carrier support"],
  },
  {
    title: "Firewall Management",
    href: "/services/cybersecurity",
    icon: LockKeyhole,
    summary: "Firewall deployment, policy cleanup, VPN security, and ongoing protection.",
    details: ["Policy review", "VPN hardening", "Traffic rules", "Threat filtering"],
  },
  {
    title: "Network Hardware",
    href: "/services/networking",
    icon: Router,
    summary: "Professional installation and support for switches, routers, cabling, and racks.",
    details: ["Rack cleanup", "Switch config", "Cabling", "Documentation"],
  },
];

export const servicePages = {
  "managed-it": coreServices[0],
  cybersecurity: coreServices[1],
  "microsoft-365": coreServices[2],
  networking: coreServices[4],
  "cloud-services": coreServices[3],
  "backup-disaster-recovery": coreServices[5],
};

export const pricingPlans = [
  {
    name: "Residential Support",
    price: "$99",
    cadence: "per visit",
    description: "Responsive help for home offices, families, and independent professionals.",
    features: ["Remote support", "Device cleanup", "Wi-Fi troubleshooting", "Microsoft setup"],
  },
  {
    name: "Business Support",
    price: "$750",
    cadence: "per month",
    description: "Reliable help desk and maintenance for small teams that need dependable coverage.",
    features: ["Unlimited remote support", "Patch management", "Security baseline", "Monthly reporting"],
    featured: true,
  },
  {
    name: "Managed IT Plans",
    price: "$125",
    cadence: "per user/month",
    description: "Full-service IT operations with proactive monitoring and security controls.",
    features: ["24/7 monitoring", "Endpoint protection", "Cloud administration", "Quarterly reviews"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "quote",
    description: "Advanced support, compliance alignment, and multi-site infrastructure programs.",
    features: ["Dedicated roadmap", "Security program", "SLA options", "Executive reporting"],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "years of technical leadership" },
  { value: 24, suffix: "/7", label: "monitoring and response options" },
  { value: 98, suffix: "%", label: "remote tickets resolved quickly" },
  { value: 300, suffix: "+", label: "endpoints supported" },
];

export const testimonials = [
  {
    quote: "Limitless made our network faster, our Microsoft environment cleaner, and our team calmer. Their response time is the reason we keep expanding the partnership.",
    name: "Erin Wallace",
    role: "Operations Director, Meridian Health Group",
  },
  {
    quote: "They explain complex security decisions in plain language and execute without drama. It feels like having an enterprise IT team without hiring one.",
    name: "Marcus Lee",
    role: "Partner, Strata Advisory",
  },
  {
    quote: "The disaster recovery plan was the first one we could actually understand, test, and trust.",
    name: "Priya Shah",
    role: "Controller, Northline Manufacturing",
  },
];

export const faqs = [
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes. We offer 24/7 monitoring and after-hours response options for managed business and enterprise clients.",
  },
  {
    question: "Can you support Microsoft 365 and cybersecurity together?",
    answer: "Yes. Identity, email, endpoint, and Microsoft 365 security are often managed together so policies stay consistent.",
  },
  {
    question: "Do you work with residential clients?",
    answer: "Yes. Residential support is available for home offices, Wi-Fi, devices, and Microsoft setup.",
  },
  {
    question: "How fast can you start?",
    answer: "Most support engagements begin with a discovery call, environment review, and prioritized first-response plan.",
  },
  {
    question: "Can you replace our current IT provider?",
    answer: "Yes. We can coordinate a clean transition, document the environment, stabilize urgent issues, and build a long-term roadmap.",
  },
];

export const blogPosts = [
  {
    title: "How Small Businesses Can Reduce Microsoft 365 Risk",
    category: "Microsoft",
    excerpt: "A practical checklist for identity, email, MFA, backups, and admin role hygiene.",
  },
  {
    title: "The Real Cost of Untested Backups",
    category: "Business IT",
    excerpt: "Why backup success notifications are not the same as recovery confidence.",
  },
  {
    title: "Firewall Rules Worth Reviewing Every Quarter",
    category: "Cybersecurity",
    excerpt: "Simple policy checks that reduce exposure without slowing the business.",
  },
  {
    title: "Wi-Fi Design for Hybrid Offices",
    category: "Networking",
    excerpt: "Coverage, roaming, segmentation, and access point placement for reliable offices.",
  },
  {
    title: "Cloud Costs That Quietly Drift",
    category: "Cloud",
    excerpt: "Common cloud spend leaks and how to build a monthly optimization habit.",
  },
  {
    title: "Remote Support Etiquette for Teams",
    category: "Tutorials",
    excerpt: "How to make support sessions faster, safer, and less disruptive for users.",
  },
];

export const values = [
  { title: "Experience", icon: BadgeCheck, text: "Senior technical guidance across infrastructure, Microsoft, security, and support." },
  { title: "Fast Response", icon: Zap, text: "Clear triage, prioritized escalation, and practical fixes that protect productivity." },
  { title: "Certified Technicians", icon: ShieldCheck, text: "Professional standards, documented work, and security-aware implementation." },
  { title: "24/7 Support", icon: MessageCircle, text: "Monitoring and response options for organizations that cannot afford downtime." },
];

export const partners = ["Microsoft", "Cisco", "Cloudflare", "CrowdStrike", "Palo Alto", "Datto"];

export const contactMethods = [
  { label: "Phone", value: "(555) 018-2048" },
  { label: "Email", value: "support@limitlesstech.example" },
  { label: "Hours", value: "Mon-Fri 8:00 AM - 6:00 PM" },
  { label: "Emergency", value: "24/7 managed client hotline" },
];
