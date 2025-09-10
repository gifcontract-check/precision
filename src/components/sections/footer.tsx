import { Logo } from "@/components/logo";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: "188 rue Solférino, Lille" },
    { icon: <Phone className="h-5 w-5" />, text: "06 12 34 56 78 (pour inscriptions)" },
    { icon: <Clock className="h-5 w-5" />, text: "Lundi-Samedi : 10h-18h | Dimanche : Fermé" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t py-12">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Le centre de formation d'excellence pour les métiers de la beauté.
          </p>
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Nos Coordonnées</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-center gap-3">
                        {info.icon}
                        <span>{info.text}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex flex-col gap-2">
             <h3 className="font-semibold text-lg">Suivez-nous</h3>
             <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
             </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Précision Institut. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
