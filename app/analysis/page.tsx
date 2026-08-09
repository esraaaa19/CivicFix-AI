"use client";

import { useEffect, useState } from "react";

export default function AnalysisPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("civicfix-analysis");

    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <main className="min-h-screen bg-[#07111F] p-10 text-white">
        <h1 className="text-3xl font-bold">
          No analysis found
        </h1>

        <p className="mt-3 text-slate-400">
          Please go back and analyze an image first.
        </p>
      </main>
    );
  }

  const analysis = data.analysis;

  return (
    <main className="min-h-screen bg-[#07111F] p-6 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <p className="text-sm font-semibold text-green-400">
            ✓ AI ANALYSIS COMPLETE
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Civic Issue Identified
          </h1>

          <p className="mt-2 text-slate-400">
            CivicFix analyzed your uploaded image.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0B1829]">
            <img
              src={data.image}
              alt="Uploaded civic issue"
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-5">

            <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-6">
              <p className="text-sm text-slate-500">
                Detected Issue
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {analysis.issue}
              </h2>

              <p className="mt-2 text-blue-400">
                {analysis.category}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-5">
                <p className="text-sm text-slate-500">
                  Severity
                </p>

                <p className="mt-2 text-3xl font-bold text-orange-400">
                  {analysis.severity}/100
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-5">
                <p className="text-sm text-slate-500">
                  Priority
                </p>

                <p className="mt-2 text-2xl font-bold text-red-400">
                  {analysis.priority}
                </p>
              </div>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-6">
              <p className="text-sm text-slate-500">
                Description
              </p>

              <p className="mt-2 leading-7 text-slate-300">
                {analysis.description}
              </p>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="text-sm font-semibold text-red-400">
                Potential Risk
              </p>

              <p className="mt-2 leading-7 text-slate-300">
                {analysis.risk}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-6">
              <p className="text-sm text-slate-500">
                Recommended Action
              </p>

              <p className="mt-2 leading-7 text-slate-300">
                {analysis.recommendedAction}
              </p>

              <div className="mt-5 border-t border-slate-800 pt-5">
                <p className="text-sm text-slate-500">
                  Responsible Authority
                </p>

                <p className="mt-1 font-semibold">
                  {analysis.authority}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
