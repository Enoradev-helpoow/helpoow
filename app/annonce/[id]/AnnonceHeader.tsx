"use client";

import Menu from "../../Menu";
import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

export default function AnnonceHeader() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, []);

  return (
    <header className="flex justify-between items-center p-4 relative bg-[#FFC107] text-[#424242] font-righteous">
      <Menu />
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl">Helpoow</h1>
      <div className="flex items-center space-x-4 text-2xl">
        {!loading ? (
          user ? (
            <span className="text-sm font-medium">👋 {user.user_metadata?.prenom || user.email}</span>
          ) : (
            <Link href="/connexion">
              <span className="text-sm hover:underline cursor-pointer">Connexion</span>
            </Link>
          )
        ) : null}
        <span>👤</span>
        <Link href="/messages">
          <span className="cursor-pointer hover:underline">💬</span>
        </Link>
      </div>
    </header>
  );
}
