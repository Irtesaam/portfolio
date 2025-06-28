import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SplashDialog() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`p-8 rounded-lg shadow-2xl bg-white/80 dark:bg-black/80 flex flex-col items-center transition-all duration-700 ease-out
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      style={{ minWidth: 320 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center animate-gradient bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        Welcome to Irtesaam Atfi’s Portfolio
      </h1>
      <div className="flex gap-6 mt-2">
        <Link href="/dev">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-transform duration-200 shadow-md">
            Developer Portfolio
          </button>
        </Link>
        <Link href="/snaps">
          <button className="px-6 py-3 bg-pink-600 text-white rounded-lg text-lg font-semibold hover:bg-pink-700 hover:scale-105 transition-transform duration-200 shadow-md">
            Photography Portfolio
          </button>
        </Link>
      </div>
    </div>
  );
}
