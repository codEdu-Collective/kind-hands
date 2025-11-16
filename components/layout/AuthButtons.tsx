import { JSX, Suspense } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function AuthButtons(): JSX.Element {
  return (
    <Suspense>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "28px",
                height: "28px",
              },
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton
          appearance={{
            elements: {
              modalContent: "flex items-center justify-center min-h-screen",
              modal: "flex items-center justify-center",
              modalBackdrop: "flex items-center justify-center",
              rootBox: "flex items-center justify-center",
              card: "w-full max-w-lg shadow-2xl",
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
          mode="modal"
        >
          <button className="font-work bg-accent-800 text-white px-6 py-2 rounded-[3rem] font-medium radius-full opacity-100 cursor-pointer transition duration-300 hover:bg-accent-900">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
    </Suspense>
  );
}
