import { JSX } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}