import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, text: "188 rue Solférino, Lille" },
    { icon: <Phone className="h-5 w-5" />, text: "07 62 23 69 51 (pour inscriptions)" },
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
             <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
             </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 pt-8 border-t flex flex-col items-center text-center">
        <div className="relative h-24 w-full max-w-lg mb-4">
            <Image 
                src="https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/1fd7f938-4e60-4158-a3e4-8b493f8b13f2__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__803ca42b-eca1-4351-a08d-d5c980ca829c.webp?t=1757606574554"
                alt="Certification"
                fill
                className="object-contain"
            />
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Formation précision. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
