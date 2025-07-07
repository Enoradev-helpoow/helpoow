'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../src/lib/supabaseClient';
import Link from 'next/link';
import Menu from '../../Menu';

interface Annonce {
  id: number;
  titre: string;
  description: string;
  date: string;
  duree: string;
  prix: number;
  localisation: string;
  image: string;
  categorie: string;
}

export default function Page() {
  const params = useParams();
  let slug = params.slug;

  // Gestion du cas où slug est un tableau (ex: catch-all route)
  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  // Valeur par défaut si slug est undefined
  if (!slug) {
    slug = 'categorie-inconnue';
  }

  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);

  const descriptions: { [key: string]: string } = {
    électricité: "Besoin d’un coup de jus ? Nos bricoleurs experts en électricité sont là pour vous aider ⚡",
    plomberie: "Une fuite ? Un évier bouché ? Trouvez un pro de la plomberie en un clin d’œil 🚰",
    animaux: "Besoin d’aide pour garder ou promener vos animaux ? Nos Helpoowers sont là 🐶🐱",
    jardinage: "Envie d’un jardin au top ? Nos jardiniers vous prêtent main verte 🌿",
    nettoyage: "Un grand ménage ? On vous envoie du renfort pour tout briquer 🧼",
    rangement: "Besoin de mettre de l’ordre ? Trouvez un coup de main pour tout organiser 📦",
    'vide maison': "Besoin d’aide pour vider un logement ? On s’en occupe avec vous 🏠",
    'charges lourdes': "Un objet trop lourd ? Nos costauds sont prêts à le soulever 🏋️‍♂️",
    'travaux d’extérieur': "Besoin d’un coup de main dehors ? On a ce qu’il vous faut 🌳",
    'travaux d’intérieur': "Un chantier chez vous ? Nos bricoleurs sont sur le coup 🛠️",
    'cours particuliers': "Besoin de soutien scolaire ou d’apprendre quelque chose ? 📚",
    meubles: "Besoin d’aide pour monter, démonter ou déplacer des meubles ? 🪑",
    livraisons: "Un colis à récupérer ou à livrer ? Trouvez un Helpoower 🚚",
    déménagement: "Besoin d’un coup de main pour déménager ? On est là pour ça 📦",
  };

  useEffect(() => {
    const fetchAnnonces = async () => {
      const { data, error } = await supabase
        .from('annonces')
        .select('*')
        .ilike('categorie', slug); // filtre insensible à la casse

      if (!error && data) {
        setAnnonces(data);
      }
      setLoading(false);
    };

    fetchAnnonces();
  }, [slug]);

  const categoryName = slug.replace(/-/g, ' ');
  const description = descriptions[categoryName.toLowerCase()] || '';

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous">
      {/* Header */}
      <header className="flex justify-between items-center p-4 relative">
        <Menu />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">
          Helpoow
        </h1>
        <div className="flex items-center space-x-4 text-2xl">
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

      {/* Titre de la catégorie */}
      <h2 className="text-center text-2xl mt-8 capitalize">{categoryName}</h2>

      {/* Description */}
      <p className="text-center max-w-xl mx-auto mt-4 text-lg px-4">
        {description}
      </p>

      {/* Liste des annonces */}
      <div className="px-4 mt-8 space-y-4 pb-20">
        {loading ? (
          <p className="text-center">Chargement...</p>
        ) : annonces.length === 0 ? (
          <p className="text-center">Aucune annonce pour cette catégorie.</p>
        ) : (
          annonces.map((annonce) => (
            <div
              key={annonce.id}
              className="bg-white p-4 rounded-2xl shadow text-[#424242]"
            >
              <h3 className="text-xl font-semibold">{annonce.titre}</h3>
              <p className="mt-1">{annonce.description}</p>
              <p className="mt-2 text-sm">
                📍 {annonce.localisation} | ⏳ {annonce.duree} | 💰 {annonce.prix} €
              </p>
              <Link
                href={`/annonce/${annonce.id}`}
                className="block text-right text-blue-700 mt-2 hover:underline"
              >
                Voir l’annonce →
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Bouton publier spécifique à la catégorie */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Link href={`/publier?categorie=${encodeURIComponent(slug)}`}>
          <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
            + Publier une annonce de {slug.toLowerCase()}
          </button>
        </Link>
      </div>
    </main>
  );
}
