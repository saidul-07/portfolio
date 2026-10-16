import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sayedul.me"),
  title: {
    default: "Md Sayedul Islam | Computer Vision & Efficient AI Researcher in Training",
    template: "%s | Md Sayedul Islam",
  },
  description:
    "Personal portfolio of Md Sayedul Islam, an undergraduate Computer Science & Engineering student at DUET researching Computer Vision, Deep Learning, and Efficient AI for resource-constrained devices.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Sayedul Islam | Computer Vision & Efficient AI Researcher in Training",
    description:
      "Undergraduate Computer Science & Engineering student at DUET researching Computer Vision, Deep Learning, and Efficient AI for resource-constrained devices.",
    url: "https://www.sayedul.me",
    siteName: "Md Sayedul Islam Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Md Sayedul Islam - DUET Computer Vision Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sayedul Islam | Computer Vision & Efficient AI Researcher in Training",
    description:
      "Undergraduate Computer Science & Engineering student at DUET researching Computer Vision, Deep Learning, and Efficient AI for resource-constrained devices.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
