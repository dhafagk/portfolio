import React, { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { useRouter } from "next/router";
import Head from "next/head";
import { Header, Terminal, Footer } from "@/components";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

type PageType = "projects" | "about" | "skills";

interface LayoutProps {
  children: ReactNode;
  currentPage: PageType;
}

const Layout = ({ children, currentPage }: LayoutProps) => {
  const router = useRouter();

  const getPageTitle = (page: PageType) => {
    const titles = {
      projects: "Projects | Dhafa Gustiadi Kurniawan",
      about: "About | Dhafa Gustiadi Kurniawan",
      skills: "Skills | Dhafa Gustiadi Kurniawan",
    };
    return titles[page];
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keyRoutes: Record<string, string> = {
      "1": "/projects",
      "2": "/about",
      "3": "/skills",
    };

    if (keyRoutes[e.key]) {
      e.preventDefault();
      router.push(keyRoutes[e.key]);
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle(currentPage)}</title>
      </Head>
      <div
        className={`${jetBrainsMono.className} text-sm font-mono p-2 h-dvh flex flex-col`}
      >
        <div
          className={`border border-solid flex-1 min-h-0 border-black dark:border-white px-3 pt-3 text-sm flex flex-col`}
          onKeyDown={handleKeyDown}
        >
          <main className="flex flex-col flex-1 min-h-0 overflow-y-auto sm:overflow-hidden">
            <Header currentPage={currentPage} />
            <div className="min-h-0 sm:overflow-y-auto overflow-visible flex-1 flex flex-col">
              {children}
            </div>
          </main>
          <Terminal />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
