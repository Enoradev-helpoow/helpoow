'use client'

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

function PublierInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categorieParam = searchParams.get("categorie") || "";
  const [categorie, setCategorie] = useState(categorieParam);

  const [titre, setTitre] = useState("");
  const [duree, setDuree] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (categorieParam) {
      setCategorie(categorieParam);
    }
  }, [categorieParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Récupérer la session utilisateur Supabase
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      alert("Tu dois être connecté pour publier une annonce");
      return;
    }

    const token = session.access_token;

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("categorie", categorie);
    formData.append("duree", duree);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("localisation", localisation);
    formData.append("prix", prix);
    formData.append("image", image);

    const res = await fetch("/api/annonces", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      router.push("/");
    } else {
      const errorData = await res.json();
      alert("Erreur lors de la publication : " + (errorData.error || "Erreur inconnue"));
    }
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous p-6">
      <h1 className="text-3xl mb-6 text-center">Publier une annonce</h1>
      <form className="space-y-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre de l'annonce"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
        />
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
        >
          <option value="">Choisir une catégorie</option>
          <option>Électricité</option>
          <option>Plomberie</option>
          <option>Animaux</option>
          <option>Jardinage</option>
          <option>Nettoyage</option>
          <option>Meubles</option>
          <option>Livraisons</option>
          <option>Déménagement</option>
        </select>
        <input
          type="text"
          placeholder="Durée estimée"
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
        />
        <textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-lg bg-white h-32"
          required
        />
        <input
          type="text"
          placeholder="Localisation"
          value={localisation}
          onChange={(e) => setLocalisation(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
        />
        <input
          type="number"
          placeholder="Prix (€)"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
          required
          min={0}
          step={0.01}
        />
        <input
          type="text"
          placeholder="URL de l’image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 rounded-lg bg-white"
        />
        <button
          type="submit"
          className="bg-[#424242] text-white px-6 py-3 rounded-lg w-full"
        >
          Publier l&apos;annonce
        </button>
      </form>
    </main>
  );
}

export default function PublierPage() {
  return (
    <Suspense>
      <PublierInner />
    </Suspense>
  );
}
