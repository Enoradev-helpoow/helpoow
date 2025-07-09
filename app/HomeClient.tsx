"use client";

import Menu from "./Menu";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabaseClient";
import type { Session } from "@supabase/supabase-js";
import Link from "next/link";
import Image from "next/image";

import { FormattedAnnonce } from "../src/types/annonce";


interface HomeClientProps {
  annonces: FormattedAnnonce[];
}

export default function HomeClient({ annonces }: HomeClientProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // On supprime la gestion locale des annonces et du chargement
  // const [annonces, setAnnonces] = useState<FormattedAnnonce[]>([]);
  // const [loadingAnnonces, setLoadingAnnonces] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // On ne fait plus le fetch ici car les annonces sont passées en props

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous">
      <header className="flex justify-between items-center p-4 relative">
        <Menu />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">Helpoow</h1>
        <div className="flex items-center space-x-4 text-2xl">
          {!loading ? (
            user ? (
              <span className="text-sm font-medium">
                👋 {user.user_metadata?.prenom || user.email}
              </span>
            ) : (
              <Link href="/connexion">
                <span className="text-sm hover:underline">Connexion</span>
              </Link>
            )
          ) : null}
          <span>👤</span>
          <Link href="/messages">
            <span className="cursor-pointer hover:underline">💬</span>
          </Link>
        </div>
      </header>

      <div className="flex justify-center mt-6 px-4">
        <div className="flex items-center w-full max-w-md bg-white rounded-full shadow px-4 py-2">
          <span className="text-xl mr-2">🔍</span>
          <input
            type="text"
            placeholder="code postal..."
            className="w-full bg-white text-[#424242] placeholder-[#424242]/60 font-righteous outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-6 px-4">
        <div className="flex space-x-4 w-max">
          {[
            "Électricité",
            "Plomberie",
            "Animaux",
            "Jardinage",
            "Nettoyage",
            "Rangement",
            "Vide Maison",
            "Charges lourdes",
            "Travaux d’extérieur",
            "Travaux d’intérieur",
            "Cours particuliers",
            "Meubles",
            "Livraisons",
            "Déménagement",
          ].map((categorie, index) => {
            const slug = categorie
              .toLowerCase()
              .replace(/\s+/g, "-")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            return (
              <Link key={index} href={`/categories/${slug}`}>
                <div className="min-w-[160px] min-h-[60px] bg-[#424242] text-white flex items-center justify-center text-center p-4 rounded-2xl font-righteous shadow hover:bg-[#333] transition cursor-pointer">
                  {categorie}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Liste des annonces */}
      <div className="mt-10 px-4 space-y-6 max-w-2xl mx-auto">
        {annonces.length === 0 ? (
          <p className="text-center text-gray-700">Aucune annonce trouvée.</p>
        ) : (
          annonces.map((annonce) => (
            <Link key={annonce.id} href={`/annonce/${annonce.id}`}>
              <div className="cursor-pointer bg-white p-4 rounded-xl shadow flex items-start space-x-4 border border-gray-200 hover:bg-gray-100 transition">
                <Image
                  src={annonce.image}
                  alt={annonce.utilisateur}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{annonce.titre}</h2>
                  <p className="text-sm text-gray-600">
                    📅{" "}
                    {new Date(annonce.date).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    • ⏱ {annonce.duree}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    👤 {annonce.utilisateur} • 📍 {annonce.localisation}
                  </p>
                  <p className="text-sm font-semibold text-green-600 mt-2">
                    💶 {annonce.prix} €
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Link href="/publier">
          <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
            + Publier une annonce
          </button>
        </Link>
      </div>
    </main>
  );
}
