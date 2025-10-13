import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MenuIcon from "../../public/icons/menu.svg";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

type PageType = "projects" | "about" | "skills";

interface HeaderProps {
  currentPage: PageType;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { id: "projects" as PageType, label: "(1) My Projects", href: "/projects" },
    { id: "about" as PageType, label: "(2) About", href: "/about" },
    { id: "skills" as PageType, label: "(3) Skills", href: "/skills" },
  ];

  const handleMenuClick = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex justify-between w-full">
        <div className="flex gap-8">
          <Link href="/projects">
            <Image
              src={
                mounted && theme === "light"
                  ? "/images/DHAFA-LIGHT.png"
                  : "/images/DHAFA.png"
              }
              alt="DHAFA"
              width={227}
              height={18}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex flex-col">
            <div className="flex flex-row gap-4">
              <span className="w-20">Name</span>
              <span className="text-muted">Dhafa Gustiadi Kurniawan</span>
            </div>
            <div className="flex flex-row gap-4">
              <span className="w-20">Location</span>
              <span className="text-muted">Bandung, Indonesia</span>
            </div>
            <div className="flex flex-row gap-4">
              <span className="w-20">Handle</span>
              <span className="text-muted">@dhafagk</span>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <Link
            href="https://www.figma.com/community/file/1417555189581721037"
            className="hidden sm:flex items-center h-fit gap-1 hover:underline"
            target="_blank"
          >
            <Image
              src="/images/clip.png"
              alt="figma"
              width={24}
              height={24}
              className={`${
                mounted && theme === "light" ? "invert-100" : ""
              } object-contain`}
            />
            <span className="text-link">Design by Alex Dimitrov</span>
          </Link>
          <Link
            href="#"
            className="hidden sm:flex items-center h-fit gap-1 hover:underline"
            target="_blank"
          >
            <Image
              src="/images/github.png"
              alt="github"
              width={24}
              height={24}
              className={`${
                mounted && theme === "light" ? "invert-100" : ""
              } object-contain`}
            />
            <span className="text-link">Github</span>
          </Link>
        </div>
      </div>

      <div className="bg-secondary-background w-full sm:bg-transparent sm:p-0">
        <div
          className="flex gap-1.5 py-0.5 pl-0.5 cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="w-6 h-6" />
          <span className="text-base">Menu</span>
        </div>

        <div
          className={`text-sm pt-1 pb-1 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:flex ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.href)}
              className={`text-left transition-colors ${
                currentPage === item.id
                  ? "dark:bg-white bg-black dark:text-black text-white py-1 sm:py-2 sm:px-3"
                  : "text-link hover:underline hover:cursor-pointer"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
