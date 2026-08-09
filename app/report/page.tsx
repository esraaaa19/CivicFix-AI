"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ImagePlus,
  MapPin,
  X,
} from "lucide-react";
import Link from "next/link";

export default function ReportPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

 function handleImageChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  const file = event.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    setImage(reader.result as string);
    setError(null);
  };

  reader.readAsDataURL(file);
}

  function removeImage() {
    setImage(null);
    setError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

async function analyzeIssue() {
  if (!image) return;

  try {
    setIsAnalyzing(true);
    setError(null);

    const [header, base64] = image.split(",");

    if (!base64) {
      throw new Error("Could not process the image.");
    }

    const mimeType =
      header.match(/data:(.*);base64/)?.[1] || "image/jpeg";

    const apiResponse = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: base64,
        mimeType,
        description,
      }),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(
        data.error || "AI analysis failed."
      );
    }

    sessionStorage.setItem(
      "civicfix-analysis",
      JSON.stringify({
        image,
        description,
        analysis: data.analysis,
      })
    );

    window.location.href = "/analysis";
  } catch (err) {
    console.error(err);

    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong during analysis."
    );

    setIsAnalyzing(false);
  }
}

  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500">
              <Camera size={20} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Civic<span className="text-blue-400">Fix</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </nav>

      {/* Main */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
            <Camera size={14} />
            New civic report
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Report a civic issue
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Upload a photo and let CivicFix identify the problem,
            assess its severity, and prepare a structured report.
          </p>
        </div>

        {/* Upload Card */}
        <div className="rounded-3xl border border-slate-800 bg-[#0B1829] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Evidence photo
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A clear photo helps the AI make a better assessment.
              </p>
            </div>

            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <ImagePlus size={21} />
            </div>
          </div>

          {/* Upload / Preview */}
          {!image ? (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex min-h-72 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-[#07111F] px-6 text-center transition hover:border-blue-500/50 hover:bg-blue-500/5"
            >
              <div className="mb-5 rounded-2xl bg-slate-800 p-4">
                <Camera size={30} className="text-slate-400" />
              </div>

              <p className="font-semibold">
                Upload a photo of the issue
              </p>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Potholes, broken streetlights, garbage overflow,
                damaged sidewalks, water leaks, and more.
              </p>

              <span className="mt-6 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white">
                Choose image
              </span>
            </button>
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#07111F]">
              <img
                src={image}
                alt="Uploaded civic issue"
                className="max-h-[500px] w-full object-contain"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-4 top-4 rounded-full bg-black/70 p-2 text-white backdrop-blur transition hover:bg-red-500"
              >
                <X size={18} />
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* Description */}
          <div className="mt-8">
            <label
              htmlFor="description"
              className="text-sm font-semibold"
            >
              Additional details{" "}
              <span className="font-normal text-slate-500">
                (optional)
              </span>
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: This pothole has been here for several days and is causing vehicles to swerve..."
              rows={4}
              className="mt-3 w-full resize-none rounded-xl border border-slate-700 bg-[#07111F] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          {/* Location */}
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-800 bg-[#07111F] px-4 py-3">
            <MapPin size={18} className="text-blue-400" />

            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-xs text-slate-500">
                Location will be added to the report
              </p>
            </div>

            <span className="ml-auto rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-500">
              Prototype
            </span>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Analyze */}
          <button
            onClick={analyzeIssue}
            disabled={!image || isAnalyzing}
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-600"
          >
            {isAnalyzing ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Analyzing image...
              </>
            ) : (
              <>
                Analyze with AI
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </>
            )}
          </button>

          {!image && (
            <p className="mt-3 text-center text-xs text-slate-600">
              Upload an image to continue
            </p>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center text-xs leading-5 text-slate-600">
          AI analysis provides an assessment based on visible
          evidence and does not replace official verification.
        </div>
      </section>
    </main>
  );
}
