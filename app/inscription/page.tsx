'use client';

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Inscription() {
  const supabase = createClientComponentClient();
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          nom: form.nom,
          prenom: form.prenom,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('✅ Un email de confirmation t’a été envoyé !');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow max-w-md w-full space-y-4">
        <h2 className="text-2xl text-center">Créer un compte</h2>

        <input
          name="prenom"
          placeholder="Prénom"
          value={form.prenom}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
          required
        />

        <input
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
          required
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#424242] text-white px-4 py-2 rounded w-full hover:bg-[#333]"
        >
          {loading ? 'Envoi en cours...' : 'Créer le compte'}
        </button>
      </form>
    </main>
  );
}
