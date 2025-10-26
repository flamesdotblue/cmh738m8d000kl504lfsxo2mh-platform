import React from 'react';
import { BookOpen, User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-wide">NeoLearn 3D</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#courses" className="hover:text-cyan-300 transition">Courses</a>
          <a href="#features" className="hover:text-cyan-300 transition">Features</a>
          <a href="#community" className="hover:text-cyan-300 transition">Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">
            <User className="h-4 w-4" />
            <span className="text-sm">Sign in</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition">
            <Settings className="h-4 w-4" />
            <span className="text-sm">Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  );
}
