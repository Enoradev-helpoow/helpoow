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

  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  if (!slug) {
    slug = 'categorie-inconnue';
  }

  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);

  const descriptions: { [key: string]: string } = {
    électricité: `⚡ Besoin d’un coup de jus à la maison ?
Installation de prises, remplacement de luminaires, dépannage électrique... Décrivez votre besoin précisément, l’état de votre installation, le matériel fourni, et le temps estimé.\n\n

Vous êtes électricien ou bricoleur averti ? Consultez les annonces autour de chez vous pour proposer votre aide.\n\n

💰 Indiquez le tarif souhaité. Recommandation : 20€ à 35€/h.`,

    plomberie: `🚰 Une fuite ou un souci d'évacuation ?
Postez une annonce claire en précisant l’origine du problème (robinet, siphon, WC, canalisation), son urgence, et si vous avez le matériel.\n\n

Vous savez manier une clé à molette ? Répondez à une demande d’aide près de chez vous.\n\n

💰 Tarifs conseillés : 25€ à 40€/h.`,

    animaux: `🐶 Besoin d’aide pour garder ou promener vos animaux ?
Précisez le type d’animal, ses habitudes, son tempérament, les horaires souhaités et la fréquence.\n\n

Vous aimez les animaux ? Trouvez ici des annonces proches de chez vous à quatre pattes !\n\n

💰 Recommandation : 8€ à 15€/h.`,

    jardinage: `🌿 Votre jardin a besoin d’un bon coup de propre ?
Ramassage de feuilles, tonte, taille de haies ou entretien classique ? Donnez la surface, les outils disponibles, et les détails utiles.\n\n

Vous avez la main verte ? Répondez à des annonces locales et proposez votre aide !\n\n

💰 Tarifs conseillés : 15€ à 25€/h.`,

    nettoyage: `🧼 Envie d’un grand ménage ?
Décrivez le type de nettoyage (sols, vitres, cuisine…), la surface à traiter, les produits disponibles, et le temps estimé.\n\n

Vous êtes efficace et organisé ? Consultez les annonces pour aider à faire place nette.\n\n

💰 Prix recommandé : 15€ à 20€/h.`,

    rangement: `📦 Besoin d’un coup de main pour mettre de l’ordre ?
Organiser un garage, trier des affaires, ranger un dressing ? Indiquez le volume, les contraintes, et si vous avez une méthode.\n\n

Vous aimez organiser et trier ? Aidez vos voisins à y voir plus clair chez eux.\n\n

💰 Suggestion tarifaire : 12€ à 20€/h.`,

    "vide maison": `🏠 Besoin d’aide pour vider une maison ou un appartement ?
Donnez le contexte : succession, déménagement, débarras... Précisez le volume, les objets à conserver/évacuer, et si un véhicule est nécessaire.\n\n

Vous êtes dispo pour aider à trier et porter ? Consultez les annonces proches.\n\n

💰 Estimation : 20€ à 35€/h selon le volume.`,

    "charges lourdes": `🏋️‍♂️ Besoin de bras pour porter un objet encombrant ?
Précisez le poids approximatif, les étages, s’il faut un diable, et combien de personnes sont nécessaires.\n\n

Vous êtes costaud ? Répondez aux annonces dans votre secteur.\n\n

💰 Tarif recommandé : 20€ à 30€/h.`,

    "travaux d’extérieur": `🌳 Un projet à l’extérieur ?
Clôture, terrasse, potager, abri de jardin... Décrivez le projet, les matériaux à disposition et l’espace concerné.\n\n

Vous aimez bricoler dehors ? Aidez vos voisins à aménager leur extérieur.\n\n

💰 Suggestion : 20€ à 35€/h.`,

    "travaux d’intérieur": `🛠️ Vous avez des petits travaux à faire ?
Peinture, carrelage, réparation murale, pose de parquet… Indiquez la nature exacte des travaux, les surfaces, et si vous avez le matériel.\n\n

Vous êtes à l’aise avec les outils ? Proposez votre aide dans les annonces locales.\n\n

💰 Estimation : 20€ à 40€/h.`,

    "cours particuliers": `📚 Besoin de cours ou de soutien scolaire ?
Indiquez la matière, le niveau, la fréquence souhaitée, et si les cours sont à domicile ou en visio.\n\n

Vous aimez transmettre vos connaissances ? Consultez les demandes proches de vous.\n\n

💰 Tarifs moyens : 15€ à 35€/h selon la matière et le niveau.`,

    meubles: `🪑 Monter ou déplacer des meubles ?
Donnez les dimensions, s’il s’agit d’un montage neuf, d’un démontage ou d’un simple déplacement. Précisez les accès (étage, ascenseur...).\n\n

Habitué à l’assemblage ? Aidez quelqu’un près de chez vous.\n\n

💰 Tarif conseillé : 15€ à 25€/h.`,

    livraisons: `🚚 Besoin de faire livrer ou récupérer un objet ?
Précisez le point de départ, d’arrivée, l’objet à transporter, la taille et l’urgence. Indiquez si vous avez besoin d’un véhicule.\n\n

Vous avez de la place dans votre coffre ? Répondez à une annonce !\n\n

💰 Estimation : 10€ à 25€, selon la distance.`,

    déménagement: `📦 Vous organisez un déménagement ?
Indiquez la date, le nombre de cartons, meubles, l’étage, et si un camion est fourni. Soyez précis sur la durée estimée.\n\n

Vous êtes habitué aux déménagements ? Proposez votre aide dans les annonces.\n\n

💰 Tarif recommandé : 20€ à 30€/h par personne.`,
  };

  useEffect(() => {
    const fetchAnnonces = async () => {
      const { data, error } = await supabase
        .from('annonces')
        .select('*')
        .ilike('categorie', slug);

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

      {/* Description simple pleine largeur sans fond, retours à la ligne simples */}
      <div className="mt-6 px-4 text-gray-800 text-sm"
      style={{ lineHeight: '1.1' }}>
        {description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
</div>

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

      {/* Bouton publier */}
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
