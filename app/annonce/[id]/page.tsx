export const runtime = "nodejs";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import Menu from "../../Menu"; // ✅ adapte ce chemin si besoin

export default async function AnnoncePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const id = Number(awaitedParams.id);

  if (isNaN(id)) {
    return <div>ID invalide</div>;
  }

  const annonce = await prisma.annonce.findUnique({
    where: { id },
    include: { utilisateur: true },
  });

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  const formattedAnnonce = {
    ...annonce,
    date: annonce.date.toISOString(),
    utilisateurId: annonce.utilisateurId,
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous">
      {/* ✅ Header */}
      <header className="flex justify-between items-center p-4 relative">
        <Menu />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">Helpoow</h1>
        <Link href="/messages">
          <span className="text-2xl cursor-pointer">💬</span>
        </Link>
      </header>

      {/* ✅ Contenu de l’annonce */}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{formattedAnnonce.titre}</h1>
        <p>Catégorie : {formattedAnnonce.categorie}</p>
        <p>Durée estimée : {formattedAnnonce.duree}</p>
        <p>Date : {new Date(formattedAnnonce.date).toLocaleDateString()}</p>
        <p>Description : {formattedAnnonce.description}</p>
        <p>Localisation : {formattedAnnonce.localisation}</p>
        <p>Prix : {formattedAnnonce.prix} €</p>

        {formattedAnnonce.image && (
          <Image
            src={formattedAnnonce.image}
            alt={formattedAnnonce.titre}
            width={400}
            height={300}
            className="mt-4 rounded-lg object-cover"
          />
        )}
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Link href={`/messages/new?to=${formattedAnnonce.utilisateurId}`}>
          <button className="bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
            Contacter L&apos;annonceur
          </button>
        </Link>
      </div>
       </div>
    </main>
  );
}

