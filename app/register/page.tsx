import { FaHandHoldingHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary-black text-primary-black-foreground flex size-6 items-center justify-center rounded-md">
              <FaHandHoldingHeart size={16} />
            </div>
            Kind Hands
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/register/vector.png"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
