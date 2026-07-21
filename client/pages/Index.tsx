import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  AudioLines,
  Check,
  CirclePlay,
  Headphones,
  Mic2,
  MoveRight,
  SlidersHorizontal,
  Sparkles,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    icon: Mic2,
    title: "Recording & production",
    text: "Clean capture, considered tones, and mixes that keep the energy of your performance intact.",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Live sound systems",
    text: "Reliable FOH and monitor rigs for clubs, tours, launches, and everything in between.",
  },
  {
    number: "03",
    icon: Headphones,
    title: "Equipment rental",
    text: "Production-ready microphones, outboard, consoles, and monitoring—available when you need them.",
  },
];

const highlights = ["Studio-grade equipment", "Engineers who listen", "Flexible rental periods"];

export default function Index() {
  return (
    <div className="overflow-hidden bg-studio-950 text-studio-50">
      <section className="relative isolate min-h-[680px] border-b border-white/10 px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(178,223,219,0.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(0,96,100,0.28),transparent_35%)]" />
        <div className="absolute right-[-10%] top-16 -z-10 h-[520px] w-[520px] rounded-full border border-brand-mist/20 sm:right-[3%]" />
        <div className="absolute right-[5%] top-28 -z-10 h-[360px] w-[360px] rounded-full border border-brand-mist/10" />
        <div className="mx-auto grid max-w-7xl items-end gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
              <span className="h-px w-10 bg-brand-mist" />
              Sound engineering / Prague
            </div>
            <h1 className="max-w-4xl font-display text-6xl font-semibold leading-[0.94] tracking-[-0.06em] sm:text-8xl lg:text-[7.4rem]">
              Make it <span className="text-brand-mist">sound</span> like you mean it.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-studio-300 sm:text-xl">
              BLAME is an audio engineering studio and gear room for artists, producers, venues, and ambitious productions.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/products">
                <Button size="lg" className="group h-14 w-full rounded-full bg-brand-mist px-7 text-studio-950 hover:bg-white sm:w-auto">
                  Explore the gear
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
              <a href="mailto:hello@blame.cz" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-studio-100 transition hover:border-brand-mist hover:text-brand-mist">
                Talk to an engineer
              </a>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[420px]">
            <div className="absolute bottom-2 left-0 right-0 rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7 lg:bottom-10">
              <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-studio-400">
                <span>BLAME / signal chain</span>
                <span className="flex items-center gap-2 text-brand-mist"><span className="h-2 w-2 animate-pulse rounded-full bg-brand-mist" /> Live</span>
              </div>
              <div className="flex h-28 items-center gap-1 overflow-hidden text-brand-mist">
                {[18, 34, 12, 42, 66, 28, 54, 78, 35, 58, 92, 43, 72, 30, 60, 88, 40, 18, 52, 76, 32, 66, 45, 82, 24, 56, 90, 42, 70, 34, 58, 78, 28, 64, 45, 84, 30, 52, 74, 38, 68, 48, 26, 60].map((height, index) => (
                  <span key={index} className="min-w-[3px] flex-1 rounded-full bg-current opacity-80" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-studio-400">
                <span>Input / vocal chain 01</span>
                <span>48 kHz · 24 bit</span>
              </div>
            </div>
            <div className="absolute right-4 top-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal text-brand-mist shadow-2xl shadow-brand-teal/30 sm:right-16 sm:top-8">
              <CirclePlay className="h-7 w-7" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-studio-900 px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-4 text-sm text-studio-300 sm:justify-between">
          {highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-mist" />{highlight}</div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">What we do</p>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">The technical side of your creative <span className="text-studio-400">vision.</span></h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-studio-400 lg:justify-self-end">From the first microphone choice to the final master, we bring calm process and serious sonic detail to every room.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {services.map(({ number, icon: Icon, title, text }) => (
              <div key={number} className="group bg-studio-950 p-7 transition hover:bg-studio-900 sm:p-9">
                <div className="mb-16 flex items-start justify-between"><Icon className="h-7 w-7 text-brand-mist" /><span className="font-mono text-sm text-studio-500">{number}</span></div>
                <h3 className="mb-4 font-display text-2xl font-semibold">{title}</h3>
                <p className="leading-7 text-studio-400">{text}</p>
                <MoveRight className="mt-8 h-5 w-5 text-studio-600 transition group-hover:translate-x-2 group-hover:text-brand-mist" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist px-5 py-20 text-studio-950 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-teal"><Waves className="h-4 w-4" /> Your next session starts here</div>
            <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Good sound is a feeling you can build.</h2>
          </div>
          <Link to="/products"><Button size="lg" className="group h-14 rounded-full bg-studio-950 px-7 text-white hover:bg-brand-teal">Browse rentals & digital tools <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Button></Link>
        </div>
      </section>
    </div>
  );
}
