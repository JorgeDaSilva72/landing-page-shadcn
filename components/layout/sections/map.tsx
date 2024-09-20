"use client";

import { LeafletMap } from "@/components/LeafletMap";

export default function MapSection() {
  return (
    <section id="map" className="max-w-[75%] mx-auto ">
      <LeafletMap />
    </section>
  );
}
