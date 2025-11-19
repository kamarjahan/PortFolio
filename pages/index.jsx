import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import BlogList from '../components/BlogList';
import Contact from '../components/Contact';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const pq = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
        const psnap = await getDocs(pq);
        setProjects(psnap.docs.map(d => ({ id: d.id, ...d.data() })));

        const bq = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const bsnap = await getDocs(bq);
        setPosts(bsnap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) { console.log('load error', e); }
    }
    load();
  }, []);

  const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind', 'Firebase', 'Accounting'];

  return (
    <main className="min-h-screen bg-white text-black">
      <Header onAdminClick={() => window.location.href = '/admin'} />
      <Hero name="Kamarjahan" tagline="Product-minded dev · finance student · builder" />
      <Skills skills={skills} />
      <Projects projects={projects.length ? projects : [{ id: 'sample-1', title: 'E-Commerce Mock', description: 'A fast PWA shop demo', tags: ['Next.js','Stripe'] }]} />
      <BlogList posts={posts.length ? posts : [{ id: 'sample-post', title: 'Hello world', excerpt: 'My first post' }]} />
      <Contact />
      <footer className="w-full max-w-5xl mx-auto p-6 text-sm text-gray-500">© {new Date().getFullYear()} Kamarjahan — Built with Next.js</footer>
    </main>
  );
}
