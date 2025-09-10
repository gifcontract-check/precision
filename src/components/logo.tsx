import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("relative h-12 w-48", className)}>
      <Image
        src="https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/434e06c0-a246-47a1-a8f7-0026feac7798__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__8e69c470-691b-4a80-92a0-a19981fedf76.webp?t=1757518304890"
        alt="Précision Institut Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}
