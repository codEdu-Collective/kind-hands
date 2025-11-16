import { JSX } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage(): Promise<JSX.Element> {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}