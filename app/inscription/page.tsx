"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Inscription() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInscription = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    // Validation simple
    if (!form.nom || !form.prenom || !form.pseudo) {
      setError("Tous les champs nom, prénom et pseudo sont obligatoires.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    // Inscription via Supabase
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setMessage(
        "Compte créé ! Un email de confirmation a été envoyé. Pense à vérifier ta boîte de réception."
      );
      // Optionnel : enregistrer nom, prénom, pseudo dans une table utilisateurs séparée
      // Ou tu peux étendre la logique ici
      // Pour l’instant on reste simple
      // Puis rediriger après un délai, par exemple vers la connexion
      setTimeout(() => router.push("/connexion"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous flex items-center justify-center">
      <form
        onSubmit={handleInscription}
        className="bg-white p-8 rounded-2xl shadow max-w-lg w-full space-y-6"
      >
        <h2 className="text-2xl text-center">Créer un compte</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="prenom"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            className="p-2 rounded bg-[#FFF3CD] outline-none"
            required
          />
          <input
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            className="p-2 rounded bg-[#FFF3CD] outline-none"
            required
          />
        </div>

        <input
          name="pseudo"
          placeholder="Pseudo"
          value={form.pseudo}
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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmer le mot de passe"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
          required
        />

        {error && <p className="text-red-600 text-center">{error}</p>}
        {message && <p className="text-green-600 text-center">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 rounded text-white ${
            loading ? "bg-gray-400" : "bg-[#424242] hover:bg-[#333]"
          }`}
        >
          {loading ? "Création en cours..." : "Créer mon compte"}
        </button>
      </form>
    </main>
  );
}
