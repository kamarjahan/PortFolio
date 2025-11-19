import React from 'react';
import IconLink from './IconLink';

export default function Header({ onAdminClick }) {
  return (
    <header className="w-full max-w-5xl mx-auto py-6 flex items-center justify-between">
      <div className="text-lg font-semibold">Kamarjahan</div>
      <nav className="flex items-center gap-4">
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <button onClick={onAdminClick} className="px-3 py-1 rounded-md border text-sm interaction-smooth">Admin</button>
      </nav>
    </header>
  );
}
