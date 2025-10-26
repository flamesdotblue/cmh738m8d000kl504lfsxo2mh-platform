import React from 'react';

export default function CTA() {
  return (
    <div id="features" className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-purple-600 blur-3xl" />
      </div>
      <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold">Built for immersive learning</h3>
          <p className="text-slate-300 text-sm md:text-base">
            Our 3D LMS reimagines how you interact with content: navigate virtual classrooms, interact with models, and collaborate in real time. Track progress, earn achievements, and stay motivated.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" /> Interactive 3D scenes
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-400" /> Progress tracking and badges
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" /> Community & mentorship
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400" /> Cross-platform access
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Your progress</p>
                <p className="text-2xl font-semibold">67%</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-300">Streak</p>
                <p className="text-2xl font-semibold">12 days</p>
              </div>
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600" style={{ width: '67%' }} />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition">
              Start learning
            </button>
            <button className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
