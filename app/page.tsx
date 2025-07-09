export const runtime = "nodejs";

import { prisma } from "../src/lib/prisma";
import HomeClient from "./HomeClient";
import { FormattedAnnonce } from "../src/types/annonce";

export default async function HomePage() {
  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL n'est pas défini !");
    return <div>Erreur de configuration</div>;
  }

  const annonces = await prisma.annonce.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      utilisateur: true,
    },
  });

  const formattedAnnonces: FormattedAnnonce[] = annonces.map((annonce) => ({
    ...annonce,
    date: annonce.date.toISOString(),
    createdAt: annonce.createdAt.toISOString(),
    utilisateur: annonce.utilisateur.email, // ou prenom si disponible
  }));

  return <HomeClient annonces={formattedAnnonces} />;
}
