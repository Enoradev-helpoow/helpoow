import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const runtime = "nodejs";

export async function GET() {
  try {
    const annonces = await prisma.annonce.findMany({
      include: { utilisateur: true },
      orderBy: { createdAt: "desc" },
    });

    const formattedAnnonces = annonces.map((a) => ({
      id: a.id,
      titre: a.titre,
      description: a.description,
      date: a.date.toISOString(),
      duree: a.duree,
      utilisateur: a.utilisateur.email, // ou autre champ utilisateur
      image: a.image,
      prix: a.prix,
      localisation: a.localisation,
      categorie: a.categorie,
      createdAt: a.createdAt.toISOString(),
    }));

    return NextResponse.json(formattedAnnonces);
  } catch (err) {
    console.error("Erreur GET annonces:", err);
    return NextResponse.json({ error: "Erreur serveur lors de la récupération" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  // Récupération du token d'authentification depuis le header Authorization
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "Token manquant" }, { status: 401 });
  }

  // Vérification du token auprès de Supabase pour récupérer l'utilisateur
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser(token);

  if (userError || !user) {
    return NextResponse.json({ error: "Token invalide ou utilisateur non trouvé" }, { status: 401 });
  }

  // Récupération des données du formulaire
  const formData = await req.formData();

  // Extraction et validation des champs obligatoires
  const titre = formData.get("titre") as string | null;
  const categorie = formData.get("categorie") as string | null;
  const duree = formData.get("duree") as string | null;
  const dateStr = formData.get("date") as string | null;
  const description = formData.get("description") as string | null;
  const localisation = formData.get("localisation") as string | null;
  const prixStr = formData.get("prix") as string | null;
  const image = formData.get("image") as string | null;

  if (
    !titre ||
    !categorie ||
    !duree ||
    !dateStr ||
    !description ||
    !localisation ||
    !prixStr ||
    !image
  ) {
    return NextResponse.json({ error: "Tous les champs sont obligatoires" }, { status: 400 });
  }

  // Conversion des types
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return NextResponse.json({ error: "Date invalide" }, { status: 400 });
  }

  const prix = parseInt(prixStr, 10);
  if (isNaN(prix)) {
    return NextResponse.json({ error: "Prix invalide" }, { status: 400 });
  }

  try {
    // Création de l'annonce liée à l'utilisateur authentifié
    const annonce = await prisma.annonce.create({
      data: {
        titre,
        categorie,
        duree,
        date,
        description,
        localisation,
        prix,
        image,
        utilisateurId: user.id,
      },
    });

    return NextResponse.json(annonce, { status: 201 });
  } catch (err) {
    console.error("Erreur création annonce:", err);
    return NextResponse.json({ error: "Erreur serveur lors de la création de l'annonce" }, { status: 500 });
  }
}
