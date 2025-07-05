"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleConnexion = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      // Connexion réussie → redirection vers la page d'accueil
      router.push("/");
    }
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

        {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

        <button
          type="submit"
          className="bg-[#424242] text-white px-4 py-2 rounded w-full hover:bg-[#333]"
        >
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
