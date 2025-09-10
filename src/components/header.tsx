"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#about", label: "Horaires" },
  { href: "#formations", label: "Formations" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"));

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative">
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-card/90 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo className={cn(isScrolled ? "text-primary" : "text-primary-foreground")} />
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary group",
                  isScrolled ? "text-foreground" : "text-primary-foreground hover:text-accent"
                )}
              >
                {link.label}
                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-primary": "text-primary-foreground hover:bg-white/10")}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex h-full flex-col p-6">
                  <div className="mb-8">
                    <Logo />
                  </div>
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <div className="relative h-screen w-full">
        <Image
          src="https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/4af3da12-d0b9-45e2-9a3e-d6b45a5c2bf5__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__929ce39e-dd23-4055-b7cf-e89bfad6d8fd.webp?t=1757513633280"
          alt="Bannière de l'institut"
          fill
          className="object-cover"
          priority
          data-ai-hint="beauty salon interior"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
              Précision Institut
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 md:text-xl">
              Votre centre de formation beauté d'excellence à Lille.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
