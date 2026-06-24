"use client";

import { useState } from "react";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const isLogin = mode === "login";

  return (
    <div className="w-full max-w-md">
      {/* Tabs */}
      <div className="mb-8 flex border-b border-hairline">
        {(["login", "register"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`label flex-1 border-b-2 pb-3 transition-colors ${
              mode === m
                ? "border-ink text-ink"
                : "border-transparent hover:text-ink"
            }`}
          >
            {m === "login" ? "Sign in" : "Create account"}
          </button>
        ))}
      </div>

      <form
        className="flex flex-col gap-5"
        action="#"
        onSubmit={(e) => e.preventDefault()}
      >
        {!isLogin && (
          <Field label="Name" type="text" name="name" autoComplete="name" />
        )}
        <Field
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
        />
        <Field
          label="Password"
          type="password"
          name="password"
          autoComplete={isLogin ? "current-password" : "new-password"}
        />

        {isLogin && (
          <button
            type="button"
            className="label text-ink -mt-1 self-end hover:text-accent"
          >
            Forgot password?
          </button>
        )}

        <button className="mt-2 bg-ink py-4 text-sm font-medium text-paper transition-colors hover:bg-accent">
          {isLogin ? "Sign in" : "Create account"}
        </button>
      </form>

      <p className="label mt-6 text-center">
        {isLogin ? "New to Nulebal? " : "Already have an account? "}
        <button
          onClick={() => setMode(isLogin ? "register" : "login")}
          className="text-ink underline underline-offset-2"
        >
          {isLogin ? "Create an account" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="label mb-2 block">{label}</span>
      <input
        required
        {...props}
        className="w-full border-b border-ink bg-transparent py-3 text-sm outline-none transition-colors focus:border-accent placeholder:text-muted"
      />
    </label>
  );
}
