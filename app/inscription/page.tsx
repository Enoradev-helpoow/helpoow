'use client';

import { useState } from "react";

export default function Inscription() {
  const [step, setStep] = useState<"form" | "code">("form");
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleInscription = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return setError("Email invalide");
    if (form.password !== form.confirmPassword) return setError("Les mots de passe ne correspondent pas");
    if (!form.nom || !form.prenom || !form.pseudo) return setError("Tous les champs sont obligatoires");

    setError("");
    const newCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(newCode);
    console.log("✉️ Code simulé envoyé :", newCode);
    setStep("code");
  };

  const handleCodeVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (code !== generatedCode) return setError("Code incorrect");
    setError("");
    alert(`✅ Compte créé pour ${form.prenom} ${form.nom} (${form.email})`);
    // Tu pourras enregistrer tout ça en base plus tard
  };

  return (
    <main className="min-h-screen bg-[#FFC107] text-[#424242] font-righteous flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow max-w-lg w-full space-y-4">
        <h2 className="text-2xl text-center">
          {step === "form" ? "Créer un compte" : "Vérifie ton adresse e-mail"}
        </h2>

        {step === "form" ? (
          <form onSubmit={handleInscription} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="prenom"
                placeholder="Prénom"
                value={form.prenom}
                onChange={handleChange}
                className="p-2 rounded bg-[#FFF3CD] outline-none"
                required
              />
              <input
                name="nom"
                placeholder="Nom"
                value={form.nom}
                onChange={handleChange}
                className="p-2 rounded bg-[#FFF3CD] outline-none"
                required
              />
            </div>

            <input
              name="pseudo"
              placeholder="Pseudo"
              value={form.pseudo}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Adresse email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
              required
            />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmer le mot de passe"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#FFF3CD] outline-none"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full"
            />
            {photo && (
              <p className="text-sm">📷 {photo.name}</p>
            )}

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="bg-[#424242] text-white px-4 py-2 rounded w-full hover:bg-[#333]"
            >
              Valider et envoyer le code
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeVerification} className="space-y-4">
            <p className="text-sm">
              Un code à 6 chiffres a été envoyé à <strong>{form.email}</strong>
              <br />
              (⚠️ ici c’est simulé dans la console)
            </p>
            <input
              type="text"
              placeholder="Entrez le code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-2 rounded bg-[#FFF3CD] text-[#424242] outline-none"
              required
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-[#424242] text-white px-4 py-2 rounded w-full hover:bg-[#333]"
            >
              Vérifier mon compte
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
