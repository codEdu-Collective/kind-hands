"use server";

import bcrypt from "@node-rs/bcrypt";
import { treeifyError } from "zod";

import { registerFormSchema } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { createSession } from "@/lib/session";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async (_prevState: any, formData: FormData) => {
  const validationResult = registerFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    return {
      errors: treeifyError(validationResult.error).properties,
    };
  }

  const { name, email, password } = validationResult.data;

  if (await prisma.user.findUnique({ where: { email } })) {
    return {
      errors: {
        email: { errors: ["A user with this email already exists."] },
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const user = data;

  await createSession(user.id);

  return { success: true };
};
