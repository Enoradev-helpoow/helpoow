// Fichier : app/Menu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
              <Link href="/historique" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                Historique
              </Link>
            </li>
            <li>
              <Link href="/mes-annonces" className="block px-3 py-1.5 hover:bg-gray-100" onClick={closeMenu}>
                Annonces
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isMenuOpen && <div className="fixed inset-0 z-40" onClick={closeMenu} />}
    </div>
  );
}
