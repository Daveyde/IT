import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://limitlesstechnologysolutions.com"),
  title: {
    default: "Limitless Technology Solutions | Managed IT, Cybersecurity, Cloud",
    template: "%s | Limitless Technology Solutions",
  },
  description:
    "Limitless Technology Solutions provides managed IT services, cybersecurity, Microsoft 365, networking, cloud services, and backup disaster recovery.",
  keywords: [
    "managed IT",
    "cybersecurity",
    "Microsoft 365",
    "business networking",
    "cloud services",
    "backup disaster recovery",
    "IT support",
  ],
  openGraph: {
    title: "Limitless Technology Solutions",
    description: "Enterprise-grade IT support, cybersecurity, cloud, and networking without limits.",
    type: "website",
    images: ["/images/enterprise-technology.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
