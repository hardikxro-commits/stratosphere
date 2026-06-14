"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut, User } from "lucide-react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        {session.user.image ? (
          <img
            src={session.user.image}
            alt=""
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <User size={16} className="text-white" />
        )}
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1.5 text-xs font-sans text-gray-400 hover:text-white transition-colors min-h-[44px]"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-1.5 text-xs font-sans text-gray-400 hover:text-white transition-colors min-h-[44px]"
    >
      <LogIn size={14} />
      Sign In
    </button>
  );
}
