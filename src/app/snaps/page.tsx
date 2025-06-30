"use client";
import React, { useRef } from "react";
import Navbar from "./navbar";
import Heading from "./heading";
import Gallery from "./masonry";
import ThemeToggle from "@/components/toggle-theme";

export default function SecondPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  return (
    <main>
      <Navbar />
      <Heading galleryRef={galleryRef as React.RefObject<HTMLDivElement>} />
      <div ref={galleryRef} />
      {/* <ThemeToggle/> */}
      <Gallery />
    </main>
  );
}
