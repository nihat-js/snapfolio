"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2.5 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <Sparkles 
                  size={20} 
                  className="text-white transition-transform duration-300 group-hover:rotate-12" 
                />
              </div>
            </div>
            <span className="font-bold text-gray-900 text-xl tracking-tight relative overflow-hidden group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              Nihat
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {[
                { name: "Home", href: "/" },
                { name: "Mini Games", href: "/games" },
                { name: "Learn", href: "/blogs" },
                { name: "Tools", href: "/tools" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative group px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                    {item.name}
                  </span>
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  {/* Active indicator */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-8 transition-all duration-300 rounded-full"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Notification */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <button 
                onClick={handleNotificationClick}
                className="relative p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
                aria-label="Notifications"
              >
                <Image
                  src="/notification.svg"
                  width={20}
                  height={20}
                  alt="notification"
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-gray-600"
                />
                {hasUnreadNotification && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white w-5 h-5 flex items-center justify-center text-xs rounded-full group-hover:animate-pulse shadow-lg">
                    1
                  </span>
                )}
              </button>
              
              {/* Notification dropdown */}
              {showNotification && !notificationDismissed && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 transform origin-top-right transition-all duration-300 overflow-hidden backdrop-blur-xl">
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <div className="font-bold text-lg">Welcome to my portfolio!</div>
                        <div className="text-sm opacity-90 mt-1">Thanks for visiting my space</div>
                      </div>
                      <button 
                        onClick={dismissNotification}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1.5 transition-all duration-200"
                        aria-label="Dismiss notification"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-xl">
                        <Image
                          src="/nav-logo.svg"
                          width={20}
                          height={20}
                          alt="notification icon"
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">Explore my projects</p>
                        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Discover innovative solutions, creative mini games, and insightful articles I've crafted</p>
                        <div className="mt-3 flex space-x-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            ✨ New
                          </span>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            🎮 Games
                          </span>
                        </div>
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
              className="relative p-3 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between relative">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Home
            </Link>
            <Link
              href="/games"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🎮 Mini Games
            </Link>
            <Link
              href="/blogs"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              📚 Learn
            </Link>
            <Link
              href="/tools"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              🛠️ Tools
            </Link>
            
            <div className="pt-2">
              <button 
                onClick={handleNotificationClick}
                className="flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src="/notification.svg"
                    width={20}
                    height={20}
                    alt="notification"
                    className="w-5 h-5"
                  />
                  {hasUnreadNotification && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white w-4 h-4 flex items-center justify-center text-xs rounded-full">
                      1
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">🔔 Notifications</span>
              </button>
            </div>
            
            {/* Mobile notification dropdown */}
            {showNotification && !notificationDismissed && (
              <div className="mt-3 mx-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 backdrop-blur-xl">
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="font-bold">Welcome to my portfolio!</div>
                      <div className="text-sm opacity-90 mt-1">Thanks for visiting my space</div>
                    </div>
                    <button 
                      onClick={dismissNotification}
                      className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-1.5 transition-all duration-200"
                      aria-label="Dismiss notification"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-2 rounded-xl">
                      <Image
                        src="/nav-logo.svg"
                        width={16}
                        height={16}
                        alt="notification icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">Explore my projects</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Discover innovative solutions and creative games</p>
                      <div className="mt-2 flex space-x-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          ✨ New
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          🎮 Games
                        </span>
                      </div>
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
