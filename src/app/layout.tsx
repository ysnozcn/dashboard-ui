import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/ThemeToggle/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Dashboard UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextTopLoader showSpinner={false} />
          <Providers>{children}</Providers>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
