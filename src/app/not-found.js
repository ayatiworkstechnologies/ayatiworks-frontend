"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      {/* Unified Card */}
      <div className="p-8 sm:p-10 mt-10 w-full flex flex-col items-center justify-center">
        
        {/* 404 Video */}
        <Link href="/" className="block group w-full">
          <video
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/404.mp4"  // ✅ place file inside /public/banner/404.mp4
            aria-label="404 animation"
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto w-full h-100 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Button */}
        <Link
          href="/"
          className="mt-10 inline-block px-10 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:bg-[#241564] transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
