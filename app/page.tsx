import { prisma } from "../src/lib/prisma";
import type { Annonce } from "@prisma/client";
import HomeClient from "./HomeClient";

export default async function HomePage() {
  const annoncesPrisma = await prisma.annonce.findMany({
    orderBy: { createdAt: "desc" },
  });

  const annonces = annoncesPrisma.map((annonce: Annonce) => ({
    ...annonce,
    date: annonce.date.toISOString(),
  }));

  return <HomeClient annonces={annonces} />;
}
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL n'est pas défini !");
}
