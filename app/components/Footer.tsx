import Link from "next/link";
import { links } from "../config/settings";

// Footer Component
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Footer Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/your-ip"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Your IP
                </Link>
              </li>
        
              <li>
                <Link
                  href="/cv-nihat.pdf"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Download CV
                </Link>
              </li>
              {/* <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Contact Me
                </a>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/tools"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  All Tools
                </a>
              </li>
              <li>
                <a
                  href="/games"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  All Games
                </a>
              </li>
              {/* <li>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Blog Archive
                </a>
              </li> */}
              {/* <li>
                <a
                  href="/resources"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Resources
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social Media or Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Follow Me</h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href={links.find((link) => link.platform === "Github")!.url}
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={links.find((link) => link.platform === "LinkedIn")!.url}
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Nihat
          </p>
        </div>
      </div>
    </footer>
  );
}
