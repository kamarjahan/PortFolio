import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => { const unsub = auth.onAuthStateChanged(u => setUser(u)); loadProjects(); return () => unsub(); }, []);

  async function loadProjects() { const snap = await getDocs(collection(db, 'projects')); setProjects(snap.docs.map(d => ({ id: d.id, ...d.data() }))); }
  async function handleLogin(e) { e.preventDefault(); await signInWithEmailAndPassword(auth, email, pass); }
  async function handleCreateProject(e) { e.preventDefault(); await addDoc(collection(db, 'projects'), { title, description: desc, createdAt: serverTimestamp() }); setTitle(''); setDesc(''); await loadProjects(); }
  async function handleDelete(id) { await deleteDoc(doc(db, 'projects', id)); await loadProjects(); }

  return (
    <main className="min-h-screen p-6 bg-gray-50 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        {!user ? (
          <form onSubmit={handleLogin} className="mt-4 grid gap-3">
            <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin email" className="p-3 border rounded-md" />
            <input required type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="password" className="p-3 border rounded-md" />
            <div className="flex gap-3"><button className="px-4 py-2 bg-black text-white rounded-md">Login</button></div>
          </form>
        ) : (
          <div className="mt-4">
            <div className="flex justify-between items-center"><div>Signed in as {user.email}</div><button onClick={() => signOut(auth)} className="px-3 py-1 border rounded-md">Sign out</button></div>
            <form onSubmit={handleCreateProject} className="mt-4 grid gap-2">
              <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Project title" className="p-3 border rounded-md" />
              <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description" className="p-3 border rounded-md" />
              <button className="px-4 py-2 bg-black text-white rounded-md">Create project</button>
            </form>
            <div className="mt-6">
              <h3 className="font-semibold">Existing projects</h3>
              <ul className="mt-2">
                {projects.map(p => (
                  <li key={p.id} className="flex justify-between items-center p-2 border rounded-md my-2">
                    <div><div className="font-semibold">{p.title}</div><div className="text-sm text-gray-600">{p.description}</div></div>
                    <div className="flex gap-2"><button onClick={() => handleDelete(p.id)} className="px-3 py-1 border rounded-md">Delete</button></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
