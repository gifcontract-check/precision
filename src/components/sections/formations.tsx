import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const formations = [
  {
    title: "Extensions de Cils",
    image: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/0b74d3cd-afd8-4de4-8fa9-975a87bed60f__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__aa0c2872-7ea5-45b1-b64e-69673e9c20c9.webp?t=1757514240037",
    hint: "eyelash extensions",
    pdfLink: "https://drive.google.com/file/d/10iRhh4ZHD_oMGk3sZuDov2pfMD1I3rMx/view?usp=sharing"
  },
  {
    title: "Réhaussement de Cils",
    image: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/7c0d513c-eee0-4bcb-9a35-21385cfeb5be__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__4ceb02fa-35ae-4db9-bed7-3083359d812a.webp?t=1757514295959",
    hint: "lash lift",
    pdfLink: "#"
  },
  {
    title: "Onglerie",
    image: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/c49fa422-ac7a-4037-b28c-3c6f168e38cd__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__cdeb0a4a-ec7d-4827-911a-162ae8af5b05.webp?t=1757514347384",
    hint: "manicure nails",
    pdfLink: "#"
  },
  {
    title: "Manucure Russe",
    image: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/45835d26-80cf-42be-9cc3-780f2901bbbd__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__cb049eac-563a-4c5a-a5c6-4cbf014713ce.webp?t=1757514372159",
    hint: "russian manicure",
    pdfLink: "https://drive.google.com/file/d/189PCu6Yf6npDatEr19pwy89-JEcyHhIr/view?usp=sharing"
  },
  {
    title: "Sourcils",
    image: "https://cdn.beacons.ai/user_content/zt7DSUT5syTGSXn4yV1sZY6Klnn1/referenced_images/7c2aa17f-ce68-43de-bfc4-3aec23a5941f__store__product-image__b4dd91fc-9038-4ecb-8fdc-1eadd25690b6__49f28c5a-90c7-4cc0-983e-9bb78c661445.webp?t=1757514508171",
    hint: "eyebrow shaping",
    pdfLink: "#"
  },
];

export default function Formations() {
  return (
    <section id="formations" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Nos Formations
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Devenez une experte de la beauté grâce à nos formations complètes et professionnelles.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-12">
          {formations.map((formation) => (
            <Card key={formation.title} className="text-center group hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                    <Image 
                        src={formation.image} 
                        alt={formation.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={formation.hint}
                    />
                </div>
              </CardHeader>
              <CardContent className="p-4 flex flex-col flex-grow justify-between">
                <CardTitle className="text-lg mb-4">{formation.title}</CardTitle>
                {formation.pdfLink !== "#" ? (
                  <Button asChild size="sm" className="w-full">
                    <Link href={formation.pdfLink} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Programme
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="sm" className="w-full">
                    <a href="tel:0762236951">
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
