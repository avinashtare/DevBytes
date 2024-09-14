"use client";
import React, { useEffect, useRef } from "react";
import { ModeToggle } from "@/components/ui/dark-button";
import { Input } from "@/components/ui/input";
import { MdKeyboardCommandKey } from "react-icons/md";
import "./style.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import { useTheme } from "next-themes";

const Nav = () => {
  const serachInput = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Event handler function for ctrl + k forucs on input
    const handleFoucs = (event: any) => {
      if (event.ctrlKey && event.key == "k") {
        event?.preventDefault();
        // foucs on input
        serachInput.current?.focus();
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleFoucs);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleFoucs);
    };
  }, []);
  return (
    <nav className="nav--bar w-full h-14  bg-foreground border border-border flex justify-between items-center px-20">
      <div className="logo text-foreground flex items-center">
        <div className="logo mr-8 text-2xl">
          <Image
            // className="mt-2 invert"
            className={`mt-2 ${theme == "dark" ? "invert" : ""}`}
            priority={true}
            src={"/images/logo.png"}
            width={160}
            height={20}
            alt="logo"
          />
        </div>
        <ul className="flex links">
          <li>
            <a href="/">Docs</a>
          </li>
          <li>
            <a href="/">Components</a>
          </li>
          <li>
            <a href="/">Blocks</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Demo</a>
          </li>
        </ul>
      </div>
      {/* right area */}
      <div className="right flex items-center">
        <div className="relative input mr-8 flex items-center">
          <Input
            ref={serachInput}
            className="w-64 pr-14"
            placeholder="Search anything..."
          />
          <div className="absolute right-2 shortcut flex items-center gap-1 bg-muted px-1 rounded-lg">
            <MdKeyboardCommandKey className="text-1xl" />
            <small>k</small>
          </div>
        </div>
        <ul className="social-media flex mr-4">
          <li>
            <a href="/">
              <FaGithub className="text-2xl mx-1" />
            </a>
          </li>
          <li>
            <a href="/">
              <CiLinkedin className="text-2xl mx-1" />
            </a>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
