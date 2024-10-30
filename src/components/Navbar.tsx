"use client";
import React, { useState } from "react";
import { User } from "next-auth";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { AlignRight, ArrowDownWideNarrow } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const user: User = session?.user;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 md:p-6">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Mystery Message
          </Link>
          <nav className="hidden md:block ">
            <div className="flex flex-col items-center md:flex-row md:ml-auto md:gap-10 justify-between">
              <Link
                className="text-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-5 py-2 hover:rounded-lg transition-all duration-200"
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className="text-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-5 py-2 hover:rounded-lg transition-all duration-200"
                href="/how_it_works"
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                className="text-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-5 py-2 hover:rounded-lg transition-all duration-200"
                href="/faqs"
                onClick={() => setMenuOpen(false)}
              >
                Faq&#39;s
              </Link>
            </div>
          </nav>
          <button className="text-gray-700 md:hidden" onClick={toggleMenu}>
            {
              menuOpen ?  <AlignRight /> : <ArrowDownWideNarrow />
            }
          </button>
          <div className="mt-4 md:mt-0 hidden md:block ">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm md:text-base text-gray-700">
                  Welcome, {user.username || user.email}
                </span>
                <Button className="md:mx-auto" onClick={() => signOut()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/sign-in">
                <Button className="w-full md:w-auto md:mx-auto">Login</Button>
              </Link>
            )}
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden block md:hidden transition-max-height transition-all ease-in-out w-full flex-col md:w-auto mt-4 md:mt-0`}
        >
          <nav className="flex flex-col md:flex-row md:ml-auto md:gap-6">
            <Link
              className="text-sm hover:bg-gray-100 hover:px-5 py-2 hover:rounded-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-200"
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="text-sm hover:bg-gray-100 hover:px-5 py-2 hover:rounded-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-200"
              href="/how_it_works"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              className="text-sm hover:bg-gray-100 hover:px-5 py-2 hover:rounded-lg font-medium text-gray-700 hover:text-gray-900 transition-all duration-200"
              href="/faqs"
              onClick={() => setMenuOpen(false)}
            >
              Faq&#39;s
            </Link>
          </nav>
          <div className="mt-4 md:mt-0 flex items-center">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm md:text-base text-gray-700">
                  Welcome, {user.username || user.email}
                </span>
                <Button className="md:mx-auto" onClick={() => signOut()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/sign-in">
                <Button className="w-full md:w-auto md:mx-auto">Login</Button>
              </Link>
            )}
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
