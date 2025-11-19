import React from 'react';
import { motion } from 'framer-motion';

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 my-8">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <motion.a key={p.id} href={p.link || '#'} target="_blank" rel="noreferrer" className="p-4 border rounded-md hover:shadow-sm interaction-smooth" whileHover={{ scale: 1.02 }}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
            <div className="mt-3 text-sm text-gray-500">{p.tags?.join(' · ')}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
