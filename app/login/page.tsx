import type { Metadata } from "next";
import AuthForm from "../components/auth-form";
import Swatch from "../components/swatch";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in or create your Nulebal account.",
};

export default function LoginPage() {
  return (
    <div className="grid min-h-[100svh] pt-[var(--header-h)] lg:grid-cols-2">
      {/* Form side */}
      <div className="flex flex-col justify-center px-5 py-16 sm:px-12 lg:px-20">
        <p className="label">Account</p>
        <h1 className="display mt-3 mb-10 text-5xl sm:text-6xl">
          Welcome back
        </h1>
        <AuthForm />
      </div>

      {/* Visual side */}
      <div className="relative hidden lg:block">
        <Swatch
          tone={["hsl(40 12% 90%)", "hsl(38 12% 72%)"]}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <p className="display text-4xl text-ink/90">
            Members get first access to every drop.
          </p>
          <p className="label mt-4">Nulebal — S/S 2026</p>
        </div>
      </div>
    </div>
  );
}
