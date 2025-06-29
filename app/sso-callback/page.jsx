'"use client";'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    // Wait for Clerk to handle auth, then redirect to homepage (or fallback URL)
    router.push("/");
  }, [router]);

  return <div className="p-10 text-center">Finishing sign in...</div>;
}
