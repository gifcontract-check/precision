import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Inscrivez-vous à une formation
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Prête à lancer votre carrière dans la beauté ? Appelez-nous pour discuter de votre projet et vous inscrire à la session de votre choix.
                </p>
            </div>
            <Card className="max-w-sm">
                <CardHeader>
                    <CardTitle>Contactez-nous par téléphone</CardTitle>
                    <CardDescription>Nos inscriptions se font uniquement par téléphone pour un suivi personnalisé.</CardDescription>
                </CardHeader>
                <CardContent>
                    <a 
                        href="tel:0762236951" 
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105"
                    >
                        <Phone className="h-6 w-6" />
                        <span>07 62 23 69 51</span>
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
