import React from 'react';
import { BookOpen, Play, Users } from 'lucide-react';

const courses = [
  {
    title: 'Intro to AI & Machine Learning',
    level: 'Beginner',
    lessons: 24,
    students: 1280,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: '3D Design for Education',
    level: 'Intermediate',
    lessons: 18,
    students: 890,
    color: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Web3 Fundamentals',
    level: 'Beginner',
    lessons: 20,
    students: 1043,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Advanced React & Animations',
    level: 'Advanced',
    lessons: 32,
    students: 760,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function CourseGrid() {
  return (
    <div id="courses">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Courses</h2>
          <p className="text-slate-300 text-sm md:text-base">Curated learning paths to accelerate your growth.</p>
        </div>
        <a href="#" className="hidden md:inline-flex px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 transition">View all</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <article key={i} className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className={`h-24 w-full bg-gradient-to-r ${course.color}`} />
            <div className="p-4 space-y-3">
              <h3 className="font-medium leading-snug">{course.title}</h3>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1"><BookOpen className="h-4 w-4" /> {course.level}</span>
                <span className="inline-flex items-center gap-1"><Play className="h-4 w-4" /> {course.lessons} lessons</span>
                <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> {course.students}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button className="px-3 py-2 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 transition">Enroll</button>
                <a href="#" className="text-xs text-slate-300 hover:text-white transition">Preview</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
