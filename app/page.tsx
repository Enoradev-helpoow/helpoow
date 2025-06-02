export const runtime = "nodejs";

import { prisma } from "../src/lib/prisma";
import { Annonce } from '@prisma/client';
import HomeClient from "./HomeClient";

interface FormattedAnnonce extends Omit<Annonce, 'date' | 'createdAt'> {
  date: string;
  createdAt: string;
}

export default async function HomePage() {
  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL n'est pas défini !");
    return <div>Erreur de configuration</div>;
  }

  const annonces: Annonce[] = await prisma.annonce.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formattedAnnonces: FormattedAnnonce[] = annonces.map((annonce: Annonce) => ({
    ...annonce,
    date: annonce.date.toISOString(),
    createdAt: annonce.createdAt.toISOString()
  }));

  return <HomeClient annonces={formattedAnnonces} />;
}
