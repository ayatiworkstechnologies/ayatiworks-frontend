import React from "react";
import { notFound } from "next/navigation";
import ApexCaseStudy from "../../components/Case Study/Details/ApexCaseStudy";
import VolvoCaseStudy from "../../components/Case Study/Details/VolvoCaseStudy";
import JeepCaseStudy from "../../components/Case Study/Details/JeepCaseStudy";
import NippoCaseStudy from "../../components/Case Study/Details/NippoCaseStudy";
import SpaarcCaseStudy from "../../components/Case Study/Details/SpaarcCaseStudy";
import NewSpaarcCaseStudy from "../../components/Case Study/Details/NewSpaarcCaseStudy";
import { caseStudies } from "../../lib/casestudy-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Ayatiworks Case Study",
      description: "Ayatiworks Case Study",
    };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: `https://www.ayatiworks.com/case-study/${slug}` },
  };
}

export default async function CaseStudyDetail({ params }) {
  const { slug } = await params;

  const componentMap = {
    "pan-india-brand-growth-for-spaarc-wellness": NewSpaarcCaseStudy,
    "branding-and-digital-transformation-for-tmt-brands": ApexCaseStudy,
    "how-Ayatiworks-propelled-Volvos-digital-presence-by-250-percentage-increase-in-impressions": VolvoCaseStudy,
    "Jeep-India-Independence-Day-Merchandise-Sales-Campaign": JeepCaseStudy,
    "Reposition-Nippo-and-Brand-Awareness-Campaign": NippoCaseStudy,
    // "spaarc-case-study-from-1-clinic-to-50-centers": NewSpaarcCaseStudy,
  };

  const CaseStudyContent = componentMap[slug];

  if (!CaseStudyContent) return notFound();

  return <CaseStudyContent />;
}

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}
