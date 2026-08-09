import {
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500">
            <ShieldCheck size={21} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Civic<span className="text-blue-400">Fix</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#why-civicfix" className="transition hover:text-white">
            Why CivicFix
          </a>
        </div>

        <button className="hidden rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-500/10 sm:block">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 text-center lg:px-8 lg:pb-32 lg:pt-28">
          <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <Sparkles size={15} />
            AI-powered civic reporting
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            See a problem?
            <br />
            <span className="text-blue-400">Report it smarter.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            Turn a photo of a pothole, broken streetlight, garbage overflow,
            or other civic issue into a structured, AI-powered report in
            seconds.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Report an Issue
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="#how-it-works"
              className="rounded-full border border-slate-700 px-7 py-3.5 font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              See how it works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mx-auto mt-14 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              AI issue detection
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              Smart prioritization
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              Ready-to-submit reports
            </span>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1829] shadow-2xl shadow-black/30">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-400/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-400/80" />

            <div className="ml-4 flex-1 rounded-lg bg-[#07111F] px-4 py-2 text-xs text-slate-500">
              civicfix.ai/report/CF-1042
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-5">
            {/* Upload area */}
            <div className="border-b border-slate-800 p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">New Report</p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Upload an issue
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Camera size={22} />
                </div>
              </div>

              <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-[#07111F] p-8 text-center">
                <div className="mb-4 rounded-2xl bg-slate-800 p-4">
                  <Camera size={28} className="text-slate-400" />
                </div>

                <p className="font-medium">Drop a photo here</p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Upload a photo of a pothole, damaged infrastructure,
                  overflowing garbage, or another civic issue.
                </p>

                <button className="mt-5 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200">
                  Choose image
                </button>
              </div>
            </div>

            {/* AI analysis preview */}
            <div className="p-8 lg:col-span-2">
              <p className="text-sm text-slate-500">AI Analysis</p>

              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Severity</span>

                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                    HIGH
                  </span>
                </div>

                <div className="mt-4 text-4xl font-bold">87/100</div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[87%] rounded-full bg-red-500" />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-[#07111F] p-4">
                  <p className="text-xs text-slate-500">Detected issue</p>
                  <p className="mt-1 font-medium">Large road pothole</p>
                </div>

                <div className="rounded-xl bg-[#07111F] p-4">
                  <p className="text-xs text-slate-500">Category</p>
                  <p className="mt-1 font-medium">Road Infrastructure</p>
                </div>

                <div className="rounded-xl bg-[#07111F] p-4">
                  <p className="text-xs text-slate-500">Potential risk</p>
                  <p className="mt-1 font-medium">
                    Vehicle & pedestrian hazard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-y border-slate-800 bg-[#091522]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Simple workflow
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From photo to report in three steps.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              CivicFix removes the friction between noticing a civic problem
              and creating a useful report.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              icon={<Camera size={22} />}
              title="Upload"
              description="Take a photo of the civic issue and upload it to CivicFix."
            />

            <StepCard
              number="02"
              icon={<Sparkles size={22} />}
              title="Analyze"
              description="AI identifies the issue, category, severity, risks, and recommended action."
            />

            <StepCard
              number="03"
              icon={<FileText size={22} />}
              title="Report"
              description="Generate a clear, structured complaint ready for submission."
            />
          </div>
        </div>
      </section>

      {/* Why CivicFix */}
      <section id="why-civicfix" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why CivicFix
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Reporting a problem shouldn't be another problem.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Most people can identify a civic issue. The friction comes after
              that — figuring out what it is, how serious it is, and how to
              describe it clearly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              title="AI Vision"
              description="Understand what is visible in the uploaded image."
            />

            <FeatureCard
              title="Smart Priority"
              description="Convert the detected issue into a meaningful severity score."
            />

            <FeatureCard
              title="Clear Reports"
              description="Turn observations into structured civic complaints."
            />

            <FeatureCard
              title="Evidence First"
              description="Keep the uploaded image attached to every report."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-500 px-8 py-14 text-center shadow-2xl shadow-blue-500/20 sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See it. Report it. Fix it.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Start with a photo. Let CivicFix handle the reporting work.
          </p>

          <button className="mt-8 rounded-full bg-white px-7 py-3.5 font-semibold text-blue-600 transition hover:bg-blue-50">
            Report an Issue
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © 2026 CivicFix. AI-powered civic issue reporting.
          </p>

          <p>Built for Hack Devengers 1.0</p>
        </div>
      </footer>
    </main>
  );
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-[#0B1829] p-7 transition hover:-translate-y-1 hover:border-blue-500/40">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
          {icon}
        </div>

        <span className="text-sm font-medium text-slate-600">{number}</span>
      </div>

      <h3 className="mt-7 text-xl font-semibold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#0B1829] p-6">
      <div className="mb-4 h-2 w-10 rounded-full bg-blue-500" />

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
