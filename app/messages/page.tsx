"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

type Message = {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUserId(user.id);

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setMessages(data);
      }
    };

    fetchMessages();
  }, []);

  const getOtherUserId = (msg: Message) =>
    msg.sender_id === userId ? msg.receiver_id : msg.sender_id;

  const groupedByUser = Object.values(
    messages.reduce((acc, msg) => {
      const otherId = getOtherUserId(msg);
      if (!acc[otherId]) acc[otherId] = msg;
      return acc;
    }, {} as Record<string, Message>)
  );

  return (
    <main className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Mes conversations</h1>
      <ul className="space-y-4">
        {groupedByUser.map((msg) => (
          <li key={msg.id} className="border p-4 rounded shadow">
            <Link href={`/messages/chat?with=${getOtherUserId(msg)}`}>
              <span className="block font-semibold">
                Utilisateur ID : {getOtherUserId(msg)}
              </span>
              <span className="text-gray-600">
                Dernier message : {msg.content}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
