"use client";

import { useActionState } from "react";

import { createUser } from "@/actions/create/createUser";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  const [state, action, pending] = useActionState(createUser, undefined);
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} action={action}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="John Doe" required />
          {state?.errors?.name && (
            <p className="mt-2 text-red-500">{state.errors.name.errors[0]}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" name="email" placeholder="m@example.com" required />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email with anyone else.
          </FieldDescription>
          {state?.errors?.email && (
            <p className="mt-2 text-red-500">{state.errors.email.errors[0]}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" name="password" required />
          <FieldDescription>Must be at least 8 characters long.</FieldDescription>
          {state?.errors?.password && (
            <p className="mt-2 text-red-500">{state.errors.password.errors[0]}</p>
          )}
        </Field>
        <Field>
          <Button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Create an account"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
