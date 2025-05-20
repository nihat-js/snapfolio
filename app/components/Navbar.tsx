"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <span className="bg-blue-500 rounded-full p-1 shadow-md">
              <Image
                src="/nav-logo.svg"
                width={24}
                height={24}
                alt="logo"
                className="w-5 h-5"
              />
            </span>
            <span className="font-bold text-gray-900 text-lg">Nihat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/games"
                rel="noreferrer"
                className="text-gray-900 hover:text-blue-600 hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
              >
                Mini Games
              </Link>
              <Link
                href="/blogs"
                className="text-gray-900 hover:text-blue-600 hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
              >
                Learn
              </Link>
              <Link
                href="/tools"
                className="text-gray-900 hover:text-blue-600 hover:scale-105 transition-all px-3 py-2 text-sm font-medium"
              >
                Tools
              </Link>
            </div>
          </div>

          {/* Notification */}
          <div className="hidden lg:flex items-center">
            <div className="relative cursor-pointer group">
              <div className="p-2 rounded-full hover:bg-gray-100 transition-all">
                <Image
                  src="/notification.svg"
                  width={24}
                  height={24}
                  alt="notification"
                  className="w-6 h-6"
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full group-hover:animate-pulse">
                  1
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <Image
                src="/mobile-menu.svg"
                width={24}
                height={24}
                alt="menu"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/games"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Mini Games
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/tools"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <div className="flex items-center px-3 py-2">
              <div className="relative cursor-pointer">
                <Image
                  src="/notification.svg"
                  width={24}
                  height={24}
                  alt="notification"
                  className="w-6 h-6"
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full">
                  1
                </span>
              </div>
              <span className="ml-3 text-sm text-gray-700">Notifications</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
