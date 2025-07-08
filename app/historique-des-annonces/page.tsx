'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../src/lib/supabaseClient';
import Link from 'next/link';

interface Annonce {
  id: number;
  titre: string;
  date: string;
  duree: string;
  prix: number;
  localisation: string;
  image: string;
}

export default function HistoriqueDesAnnonces() {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAnnonces = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push('/connexion');
        return;
      }

      const { data, error } = await supabase
        .from('annonces')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false });

      if (!error && data) {
        setAnnonces(data);
      }

      setLoading(false);
    };

    fetchAnnonces();
  }, [router]);

  if (loading) return <p>Chargement...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Historique de mes annonces</h1>
      {annonces.length === 0 ? (
        <p>Aucune annonce publiée pour le moment.</p>
      ) : (
        <ul className="space-y-4">
          {annonces.map((annonce) => (
            <li key={annonce.id} className="border p-4 rounded">
              <h2 className="font-semibold">{annonce.titre}</h2>
              <p>Date : {annonce.date}</p>
              <p>Durée : {annonce.duree}</p>
              <p>Prix : {annonce.prix} €</p>
              <p>Lieu : {annonce.localisation}</p>
              <Link href={`/annonce/${annonce.id}`} className="text-blue-600 underline">Voir l’annonce</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
