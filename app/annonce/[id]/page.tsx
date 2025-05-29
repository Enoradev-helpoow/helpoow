/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function AnnoncePage({ params }: any) {
  const annonce = await prisma.annonce.findUnique({
    where: { id: Number(params.id) },
  });

  if (!annonce) {
    return <div>Annonce non trouvée</div>;
  }

  const formattedAnnonce = {
    ...annonce,
    date: annonce.date.toISOString(),
  };

  return (
    <main className="min-h-screen p-6 bg-[#FFC107] text-[#424242] font-righteous">
      <h1 className="text-3xl font-bold mb-4">{formattedAnnonce.titre}</h1>
      <p>Catégorie : {formattedAnnonce.categorie}</p>
      <p>Durée estimée : {formattedAnnonce.duree}</p>
      <p>Date : {new Date(formattedAnnonce.date).toLocaleDateString()}</p>
      <p>Description : {formattedAnnonce.description}</p>
      <p>Localisation : {formattedAnnonce.localisation}</p>
      <p>Prix : {formattedAnnonce.prix} €</p>
      <Image
        src={formattedAnnonce.image}
        alt={formattedAnnonce.titre}
        width={400}
        height={300}
        className="mt-4 rounded-lg object-cover"
      />
    </main>
  );
}
