import { JSX } from "react";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <SignUp
        signInUrl="/sign-in"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg w-full max-w-lg",
            headerTitle: "text-2xl font-bold",
            headerSubtitle: "text-base",
            socialButtonsBlockButton: "text-base py-3 px-4 h-12",
            socialButtonsBlockButtonText: "text-base font-medium",
            formFieldInput: "text-base py-3 h-12",
            formFieldLabel: "text-base",
            formButtonPrimary: "text-base py-3 h-12 font-medium",
            formFieldInputShowPasswordButton: "text-base",
          },
        }}
      />
    </div>
  );
}
