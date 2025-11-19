import React from 'react';

export default function Post({}) {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Post</h1>
      <p className="mt-4">This page will render your blog posts. For simplicity, posts are stored in Firestore and pulled by `id`.</p>
    </main>
  );
}
