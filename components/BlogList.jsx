import React from 'react';
export default function BlogList({ posts = [] }) {
  return (
    <section id="blog" className="w-full max-w-5xl mx-auto px-4 my-8">
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="mt-4 grid gap-4">
        {posts.map(p => (
          <a key={p.id} href={`/blog/${p.id}`} className="p-4 border rounded-md interaction-smooth">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-1">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
