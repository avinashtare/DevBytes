import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "DevBytes",
  description:
    "Helping developers master the art of coding one byte at a time. DevBytes offers comprehensive coding tutorials, insightful development tips, and the latest trends in technology. Our platform provides bite-sized, practical lessons designed to elevate your programming skills, whether you're a novice or an experienced developer. Dive into concise, high-quality content that simplifies complex coding concepts and keeps you up-to-date with the ever-evolving tech landscape. Join us in transforming your coding journey into a seamless and enriching experience. #CodingTips #DeveloperTutorials #TechTrends #ProgrammingSkills #CodeMastery #TechInsights #DevCommunity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
          disableTransitionOnChange
        >
          <Nav />
          <div className="container m-auto flex mt-16 py-6">
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
