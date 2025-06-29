import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <SignUp fallbackRedirectUrl="/" />
    </div>
  );
}
