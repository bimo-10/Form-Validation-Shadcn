import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { HandMetal } from "lucide-react";

export default function NavbarComponent() {
  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <HandMetal className="w-12 h-12" />
          </Link>
        </h1>
        <ul className="flex items-center gap-8">
          <li>
            <Link className={buttonVariants()} href="/sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
