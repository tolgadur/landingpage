import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { ThemeProvider } from "@/components/common/theme-provider";

export const metadata: Metadata = {
  title: "Landingpage",
  description: "This is my landingpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <Analytics />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className={`flex min-h-screen flex-col`}>
            <Header />
            <div className="flex flex-1 justify-center w-full">
              <div className="flex w-full max-w-[1280px] h-full">
                {children}
              </div>
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
