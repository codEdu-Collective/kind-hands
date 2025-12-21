import { Suspense } from "react";

import { verifySession } from "@/lib/session";

export default async function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading user info...</p>}>
        <UserInfo />
      </Suspense>
    </div>
  );
}

const UserInfo = async () => {
  const { userId } = await verifySession();
  return <h2>Welcome, User {userId}!</h2>;
};
