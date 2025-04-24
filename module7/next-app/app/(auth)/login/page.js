"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <Link href="/">
            <span className="text-2xl hover:text-blue-500">Return Home</span>
          </Link>

          <h1 className="text-7xl text-red-500 font-bold">Login Page</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}
