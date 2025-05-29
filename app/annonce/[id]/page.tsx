import { prisma } from "../../../src/lib/prisma"; // chemin relatif corrigé
import { notFound } from "next/navigation";

export default async function AnnoncePage({ params }: { params: { id: string } }) {
  const annonce = await prisma.annonce.findUnique({
    where: { id: Number(params.id) },
  });

  if (!annonce) return notFound();

  return (
    <main className="min-h-screen bg-[#FFF8E1] text-[#424242] font-righteous p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{annonce.titre}</h1>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={annonce.image}
          alt={annonce.utilisateur}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg">👤 {annonce.utilisateur}</p>
          <p className="text-sm text-gray-600">📍 {annonce.localisation}</p>
        </div>
      </div>
      <p className="mb-2">
        📅 {new Date(annonce.date).toISOString().split("T")[0]} • ⏱ {annonce.duree}
      </p>
      <p className="mb-2">🛠 {annonce.categorie}</p>
      <p className="text-green-600 font-semibold mb-4">💶 {annonce.prix} €</p>
      <p className="bg-white p-4 rounded-xl shadow">{annonce.description}</p>
    </main>
  );
}
