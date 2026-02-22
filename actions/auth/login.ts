"use server";

import bcrypt from "@node-rs/bcrypt";
import { treeifyError } from "zod";

import { loginFormSchema } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { createSession } from "@/lib/session";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (_prevState: any, formData: FormData) => {
  const validationResult = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: treeifyError(validationResult.error).properties,
    };
  }

  const { email, password } = validationResult.data;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.verify(password, user.password))) {
    return {
      errors: {
        email: { errors: ["Invalid email or password."] },
      },
    };
  }

  await createSession(user.id);

  return { success: true };
};
