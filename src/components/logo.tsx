import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("text-xl font-bold tracking-tight text-primary", className)}>
      Précision Institut
    </Link>
  );
}
