import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-900/80 pointer-events-none" />
        <div className="absolute -bottom-24 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </div>
      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="text-xs tracking-wide">Technology • Interactive • Futuristic</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Immerse into a 3D Learning Management System
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl">
            Explore courses within an interactive 3D environment. NeoLearn 3D blends education and cutting-edge technology to create engaging pathways for skill growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#courses" className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition">
              Browse Courses
            </a>
            <a href="#features" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 transition">
              How it works
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
