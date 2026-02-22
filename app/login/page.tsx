"use client";

import { useActionState } from "react";
import Link from "next/link";

import { login } from "@/actions/auth/login";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground mt-2 text-sm">Please enter your details to sign in</p>
        </div>

        <form action={action} className="space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                className={cn(state?.errors?.email && "border-red-500")}
              />
              {state?.errors?.email && (
                <p className="mt-1 text-sm text-red-500">{state.errors.email.errors[0]}</p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className={cn(state?.errors?.password && "border-red-500")}
              />
              {state?.errors?.password && (
                <p className="mt-1 text-sm text-red-500">{state.errors.password.errors[0]}</p>
              )}
            </Field>

            <Button type="submit" className="w-full" disabled={pending}>
              {pending ? "Signing in..." : "Sign in"}
            </Button>
          </FieldGroup>
        </form>

        <p className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
