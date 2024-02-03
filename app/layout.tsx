import "@/styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "TOKENOPOLY - MLK DRIVE LNE",
  description: "Play a Monopoly-like game of Tokenopoly with real money.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
