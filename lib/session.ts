import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { JWTPayload, jwtVerify, SignJWT } from "jose";

import "server-only";

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax" as const,
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: JWTPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string | undefined): Promise<JWTPayload | null> {
  if (!session) return null;
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(userId: number): Promise<void> {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires: expires.toISOString() });
  (await cookies()).set(cookie.name, session, { ...cookie.options, expires });
  redirect("/dashboard");
}

export async function verifySession(): Promise<{ userId: number }> {
  const userCookie = (await cookies()).get(cookie.name)?.value;
  const session = await decrypt(userCookie);
  if (!session?.userId || typeof session.userId !== "number") {
    redirect("/login");
  }
  return { userId: session.userId };
}

export async function deleteSession(): Promise<void> {
  (await cookies()).delete(cookie.name);
  redirect("/login");
}
