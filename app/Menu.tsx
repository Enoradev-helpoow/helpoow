"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../src/lib/supabaseClient"; // adapte le chemin

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/connexion");  // Redirige vers page de connexion après déconnexion
    } else {
      console.error("Erreur lors de la déconnexion:", error.message);
    }
  };

  return (
    <div className="text-2xl cursor-pointer relative" onClick={toggleMenu}>
      <span>☰</span>
      {isMenuOpen && (
        <div
          className="absolute left-0 top-full mt-1 w-40 bg-white rounded-md shadow-lg z-50 text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="py-1">
            <li>
              <Link href="/mon-compte" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                Compte
              </Link>
            </li>
            <li>
              <Link href="/historique-des-annonces" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                Historique des annonces
              </Link>
            </li>
            <li>
              {/* Déconnexion est un bouton car on veut exécuter une fonction */}
              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-100"
              >
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      )}
      {isMenuOpen && <div className="fixed inset-0 z-40" onClick={closeMenu} />}
    </div>
  );
}
