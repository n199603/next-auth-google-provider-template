"use client";

import { signIn, signOut } from "next-auth/react";

type Props = {
  type: "signin" | "signout";
};

export default function AuthButon({ type }: Props) {
  return type === "signin" ? (
    <button
      className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-orange-600 to-violet-600 hover:from-violet-600 hover:to-orange-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
      onClick={() => signIn("google")}
    >
      Sign In
      <svg
        className="w-3 h-3"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  ) : (
    <button onClick={() => signOut()} className="text-red-600">
      Sign Out
    </button>
  );
}
