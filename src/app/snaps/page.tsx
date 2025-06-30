"use client";
import React, { useRef } from "react";
import Navbar from "./navbar";
import Heading from "./heading";
import Gallery from "./masonry";

export default function SecondPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  return (
    <main>
      <Navbar />
      <Heading galleryRef={galleryRef as React.RefObject<HTMLDivElement>} />
      <div ref={galleryRef} />
      <Gallery />
    </main>
  );
}
