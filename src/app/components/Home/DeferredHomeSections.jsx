"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

function Box({ h = "h-[360px]" }) {
  return <div className={`${h} w-full rounded-3xl bg-neutral-100 animate-pulse`} />;
}

function LazySection({
  Component,
  placeholderHeight = "h-[360px]",
  rootMargin = "300px",
}) {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  if (shouldRender) {
    return <Component />;
  }

  return (
    <div ref={ref}>
      <Box h={placeholderHeight} />
    </div>
  );
}

const GoogleAdsSection = dynamic(() => import("./GoogleAdsSection"), {
  ssr: false,
  loading: () => <Box />,
});

const CaasEdgeSection = dynamic(() => import("./CaasEdgeSection"), {
  ssr: false,
  loading: () => <Box h="h-[520px]" />,
});

const WhatAyati = dynamic(() => import("./WhatAyati"), {
  ssr: false,
  loading: () => <Box h="h-[720px]" />,
});

const PartnersInClimb = dynamic(() => import("./PartnersInClimb"), {
  ssr: false,
  loading: () => <Box h="h-[460px]" />,
});

const PixelsPerfected = dynamic(() => import("./PixelsPerfected"), {
  ssr: false,
  loading: () => <Box h="h-[560px]" />,
});

const VideoTestimonials = dynamic(() => import("./VideoTestimonials"), {
  ssr: false,
  loading: () => <Box h="h-[520px]" />,
});

const HomeFAQSection = dynamic(() => import("./FAQsection"), {
  ssr: false,
  loading: () => <Box h="h-[520px]" />,
});

const DottedWorldMap = dynamic(() => import("./MapLocation"), {
  ssr: false,
  loading: () => <Box h="h-[640px]" />,
});

const Connection = dynamic(() => import("./Connection"), {
  ssr: false,
  loading: () => <Box h="h-[300px]" />,
});

export default function DeferredHomeSections() {
  return (
    <>
      <LazySection Component={GoogleAdsSection} />
      <LazySection Component={CaasEdgeSection} placeholderHeight="h-[520px]" />
      <LazySection Component={WhatAyati} placeholderHeight="h-[720px]" />
      <LazySection Component={PartnersInClimb} placeholderHeight="h-[460px]" />
      <LazySection Component={PixelsPerfected} placeholderHeight="h-[560px]" />
      <LazySection Component={VideoTestimonials} placeholderHeight="h-[520px]" />
      <LazySection Component={HomeFAQSection} placeholderHeight="h-[520px]" />
      <LazySection Component={DottedWorldMap} placeholderHeight="h-[640px]" />
      <LazySection Component={Connection} placeholderHeight="h-[300px]" />
    </>
  );
}
