import React from 'react';
export default function Skills({ skills = [] }) {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 my-8">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div key={s} className="p-3 rounded-md border interaction-smooth">{s}</div>
        ))}
      </div>
    </section>
  );
}
