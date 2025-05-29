"use client";

import { useState } from "react";
import Link from "next/link";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Connexion simulée avec : " + email);
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous flex items-center justify-center">
      <form onSubmit={handleConnexion} className="bg-white p-8 rounded-2xl shadow max-w-md w-full space-y-4">
        <h2 className="text-2xl text-center">Connexion</h2>

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-[#FFF3CD] text-[#424242] outline-none"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-[#FFF3CD] text-[#424242] outline-none"
          required
        />

        <button type="submit" className="bg-[#424242] text-white px-4 py-2 rounded w-full hover:bg-[#333]">
          Se connecter
        </button>

        <p className="text-sm text-center">
          Pas encore inscrit ?{" "}
          <Link href="/inscription" className="underline text-[#424242]">
            Créer un compte
          </Link>
        </p>
      </form>
    </main>
  );
}
