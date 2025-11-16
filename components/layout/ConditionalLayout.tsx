import { JSX, type ReactNode } from "react";
import { headers } from "next/headers";
import { Footer, Header } from "@/components/layout";

export default async function ConditionalLayout({
  children,
}: {
  children: ReactNode;
}): Promise<JSX.Element> {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isAuthPage =
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
