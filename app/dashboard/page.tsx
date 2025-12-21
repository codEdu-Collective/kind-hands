import { verifySession } from "@/lib/session";

export default async function DashboardPage() {
  const { userId } = await verifySession();
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, User {userId}!</h2>
    </div>
  );
}
