import { JSX, type ReactNode } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}