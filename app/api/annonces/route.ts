import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const annonce = await prisma.annonce.create({
    data: {
      titre: formData.get("titre") as string,
      categorie: formData.get("categorie") as string,
      duree: formData.get("duree") as string,
      date: new Date(formData.get("date") as string),
      description: formData.get("description") as string,
      localisation: formData.get("localisation") as string,
      prix: parseFloat(formData.get("prix") as string),
      image: formData.get("image") as string,
      utilisateur: "Utilisateur inconnu", // modifie si tu as un système d’authentification
    },
  });

  return NextResponse.json(annonce);
}
