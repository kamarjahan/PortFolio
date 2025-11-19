import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await addDoc(collection(db, 'contacts'), { name, email, message: msg, createdAt: new Date() });
      setStatus('sent'); setName(''); setEmail(''); setMsg('');
    } catch (err) {
      console.error(err); setStatus('error');
    }
  }

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-4 my-8">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 max-w-md">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="p-3 border rounded-md" />
        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="p-3 border rounded-md" />
        <textarea required value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message" className="p-3 border rounded-md" rows={5} />
        <button className="px-4 py-2 rounded-md bg-black text-white">Send</button>
        {status === 'sending' && <div>Sending...</div>}
        {status === 'sent' && <div className="text-green-600">Message sent — thank you!</div>}
        {status === 'error' && <div className="text-red-600">Error sending message.</div>}
      </form>
    </section>
  );
}
