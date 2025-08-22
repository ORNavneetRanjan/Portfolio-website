import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />

        {/* Theme toggle */}
        <StarBackground />
        {/* Background effects */}
        <Navbar />
        {/* Navbar */}

        {/*Main content */}

        {/* Footer */}
      </div>
    </>
  );
}

export default Home;
