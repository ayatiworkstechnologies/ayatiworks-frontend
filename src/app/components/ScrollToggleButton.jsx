"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ScrollToggleButton() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setShowUp(scrollTop > 200); // show up arrow if scrolled down
      setShowDown(scrollTop + windowHeight < fullHeight - 200); // show down arrow if not near bottom
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={showUp ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-4 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition-all z-50"
    >
      {showUp ? (
        <ChevronUpIcon className="w-6 h-6" />
      ) : showDown ? (
        <ChevronDownIcon className="w-6 h-6" />
      ) : null}
    </button>
  );
}
