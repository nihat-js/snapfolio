import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nihat Abdullazade| Portfolio",
  description: "Nihat Abdullazade's Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<main>
					<div className="container max-w-screen-lg mx-auto px-4 py-8">
            <Navbar />
            <div className="" style={{ minHeight: "80vh" }}>
              {children}
            </div>
          </div>
					<Footer />
				</main> 
			</body>
		</html>
	);
}
