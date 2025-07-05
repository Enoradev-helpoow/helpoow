"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface FormattedAnnonce {
  id: number;
  titre: string;
  description: string;
  date: string; // 👈 Date au format string
  duree: string;
  utilisateur: string;
  image: string;
  prix: number;
  localisation: string;
  categorie: string;
  createdAt: string; // 👈 Date au format string
}

export default function HomeClient({ annonces }: { annonces: FormattedAnnonce[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous">
      <header className="flex justify-between items-center p-4 relative">
        {/* Icône menu */}
        <div className="text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>

        {isMenuOpen && (
          <>
            <div
              className="absolute left-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-50 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="py-1">
                <li>
                  <Link href="/mon-compte" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                    Compte
                  </Link>
                </li>
                <li>
                  <Link href="/historique-des-annonces" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                    Historique des annonces
                  </Link>
                </li>
                <li>
                  <Link href="/deconnexion" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                    Déconnexion
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fixed inset-0 z-40" onClick={closeMenu} />
          </>
        )}

        {/* Titre centré */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">Helpoow</h1>

        {/* Icônes de droite + Connexion */}
        <div className="flex items-center space-x-4 text-2xl">
          <Link href="/connexion">
            <span className="text-sm hover:underline">Connexion</span>
          </Link>
          <span>👤</span>
          <span>💬</span>
        </div>
      </header>

      {/* Barre de recherche */}
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

      {/* Catégories */}
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
          ].map((categorie, index) => (
            <div
              key={index}
              className="min-w-[160px] min-h-[60px] bg-[#424242] text-white flex items-center justify-center text-center p-4 rounded-2xl font-righteous shadow"
            >
              {categorie}
            </div>
          ))}
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
                    📅 {annonce.date} • ⏱ {annonce.duree}
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

      {/* Bouton publier */}
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
