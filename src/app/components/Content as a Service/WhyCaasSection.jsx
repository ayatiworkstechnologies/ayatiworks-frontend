"use client";

import React from "react";

export default function WhyCaasSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 section-container">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 section-title">
            Why Businesses Need <span className="text-primary">CaaS</span> Today
          </h2>
        </div>

        {/* Section Content */}
        <div className="space-y-6 text-black/80 text-lg leading-relaxed">
          <p className="text-secondary">
            The way brands create content has changed dramatically. What worked
            five years ago , a monthly campaign and a few social posts , is no
            longer enough. Today, content is the backbone of marketing, driving
            everything from brand awareness to lead generation and customer
            retention.
          </p>

          <p className="font-semibold text-gray-900">But here’s the problem:</p>

          {/* Problems List */}
          <ul className="list-disc list-inside space-y-2 text-black/80">
            <li>In-house teams are often limited by bandwidth.</li>
            <li>Agencies can be too rigid or slow to respond.</li>
            <li>Freelancers may lack consistency and strategic alignment.</li>
          </ul>

          <p className="text-secondary">
            This gap leaves businesses struggling to keep up with the speed and
            scale the digital landscape demands.
          </p>

          <p className="text-secondary">
            <span className="font-semibold text-primary">
              Content as a Service (CaaS)
            </span>{" "}
            solves this challenge by offering a flexible, scalable, and
            on-demand solution. Instead of being locked into static models,
            brands can produce exactly what they need, when they need it.
          </p>

          {/* Use-case Examples */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <p className="font-medium text-gray-900 mb-2">
              Examples of how CaaS adapts:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold text-primary">
                  Launching a new product?
                </span>{" "}
                Scale content output instantly.
              </li>
              <li>
                <span className="font-semibold text-primary">
                  Running a short campaign?
                </span>{" "}
                Reduce volume to match.
              </li>
            </ul>
          </div>

          <p className="text-secondary">
            For businesses in{" "}
            <span className="font-semibold text-primary">
              Chennai and across Tamil Nadu
            </span>
            , where competition is fierce and audiences are diverse, CaaS is
            more than just a convenience , it’s a{" "}
            <span className="font-semibold text-primary">
              competitive advantage
            </span>
            .
          </p>

          <p className="text-secondary">
            With CaaS, businesses no longer chase deadlines.{" "}
            <span className="font-medium text-gray-900">They set the pace.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
