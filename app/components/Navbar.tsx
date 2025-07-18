"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
  const [notificationDismissed, setNotificationDismissed] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const notificationRead = localStorage.getItem("notificationRead") === "true";
    setHasUnreadNotification(!notificationRead);
  }, []);

  // Handle notification click
  const handleNotificationClick = () => {
    setShowNotification(!showNotification);

    // Mark notification as read when opened
    if (!showNotification && hasUnreadNotification) {
      setHasUnreadNotification(false);
      localStorage.setItem("notificationRead", "true");
    }
  };

  // Handle notification dismiss
  const dismissNotification = (e) => {
    e.stopPropagation();
    setShowNotification(false);
    setNotificationDismissed(true);
    setHasUnreadNotification(false);
    localStorage.setItem("notificationRead", "true");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <span className="bg-blue-500 rounded-full p-1 shadow-md group-hover:shadow-blue-300/50 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/nav-logo.svg"
                width={24}
                height={24}
                alt="logo"
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              />
            </span>
            <span className="font-bold text-gray-900 text-lg relative overflow-hidden group-hover:text-blue-600 transition-colors duration-300">
              Nihat
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Mini Games", href: "/games" },
                { name: "Learn", href: "/blogs" },
                { name: "Tools", href: "/tools" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-900 relative group px-3 py-2 text-sm font-medium"
                >
                  <span className="relative z-10 transform-gpu transition-transform duration-200 group-hover:scale-110 inline-block">
                    {item.name}
                  </span>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-4/5 transition-all duration-300"></span>
                  <span className="absolute inset-0 -z-10 scale-75 rounded-full bg-blue-100 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Notification */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <button 
                onClick={handleNotificationClick}
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
                aria-label="Notifications"
              >
                <Image
                  src="/notification.svg"
                  width={24}
                  height={24}
                  alt="notification"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
                {hasUnreadNotification && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full group-hover:animate-bounce">
                    1
                  </span>
                )}
              </button>
              
              {/* Notification dropdown */}
              {showNotification && !notificationDismissed && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 transform origin-top-right transition-all duration-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex justify-between items-start">
                    <div>
                      <div className="font-bold">Welcome to my portfolio!</div>
                      <div className="text-sm opacity-90">Thanks for visiting</div>
                    </div>
                    <button 
                      onClick={dismissNotification}
                      className="text-white opacity-70 hover:opacity-100 transition-opacity"
                      aria-label="Dismiss notification"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Image
                          src="/nav-logo.svg"
                          width={20}
                          height={20}
                          alt="notification icon"
                          className="w-5 h-5"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Explore my projects</p>
                        <p className="text-xs text-gray-500 mt-1">Check out my work and mini games</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-all duration-300"
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
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
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/games"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Mini Games
            </Link>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link
              href="/tools"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <div className="flex items-center px-3 py-2">
              <button 
                onClick={handleNotificationClick}
                className="flex items-center space-x-3 w-full text-left"
              >
                <div className="relative">
                  <Image
                    src="/notification.svg"
                    width={24}
                    height={24}
                    alt="notification"
                    className="w-6 h-6"
                  />
                  {hasUnreadNotification && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
                      1
                    </span>
                  )}
                </div>
                <span className="ml-3 text-sm text-gray-700">Notifications</span>
              </button>
            </div>
            
            {/* Mobile notification dropdown */}
            {showNotification && !notificationDismissed && (
              <div className="mt-2 mx-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 flex justify-between items-start">
                  <div>
                    <div className="font-bold">Welcome to my portfolio!</div>
                    <div className="text-sm opacity-90">Thanks for visiting</div>
                  </div>
                  <button 
                    onClick={dismissNotification}
                    className="text-white opacity-70 hover:opacity-100 transition-opacity"
                    aria-label="Dismiss notification"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                      <Image
                        src="/nav-logo.svg"
                        width={16}
                        height={16}
                        alt="notification icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Explore my projects</p>
                      <p className="text-xs text-gray-500 mt-0.5">Check out my work and mini games</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
