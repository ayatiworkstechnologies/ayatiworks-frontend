"use client";

import StickyContact from "./StickyContact";
import ScrollProgressBar from "./ScrollProgressBar";
import ScrollToggleButton from "./ScrollToggleButton";
import FestiveCelebration from "./FestiveCelebration";

export default function ClientEnhancements() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollToggleButton />
      <StickyContact />
      <FestiveCelebration />
    </>
  );
}
