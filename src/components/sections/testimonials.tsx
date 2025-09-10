import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
      name: "Chloé L.",
      email: "c***l@example.com",
      text: "Venue plusieurs fois cette année, car loin de mon institut parisien habituel, je n’ai jamais pris le temps de laisser un avis. Garde l’épaisseur du sourcil, rendu très naturel, à l’écoute et dans le détail. Merci pour toutes les fois où vous m’avez reçue, et pris soin de mes sourcils que j’aime naturels. Je recommande ! ✨"
    },
    {
      name: "Manon D.",
      email: "m***d@example.com",
      text: "Je suis absolument ravie de ma pose de cils à cils réalisée par Marie ! Elle est à la fois douce, professionnelle et très minutieuse. Le résultat est naturel, élégant et exactement ce que je souhaitais. Merci encore pour ce moment de détente et pour ton savoir-faire. Je recommande les yeux fermés !"
    },
    {
      name: "Laura B.",
      email: "l***b@example.com",
      text: "Un grand merci à Nesrine et Marie qui se sont occupé de moi et ma copine après des dégâts réalisés par une prestataire incompétente. Un accueil et une prise en charge super chaleureux et elle m’ont sauvé pour mon mariage !!! Je recommande les yeux fermés"
    },
    {
      name: "Juliette F.",
      email: "j***f@example.com",
      text: "Superbe expérience avec Nesrine, adorable et compétente. Mes cils naturels sont blonds et fins et je ressors avec un regard + marqué ! Je conseille le rehaussement Yumi et la teinture."
    },
    {
      name: "Emma G.",
      email: "e***g@example.com",
      text: "La formation en onglerie a dépassé toutes mes attentes. Les formatrices sont des expertes passionnées et le suivi est incroyable. Je me sens prête à lancer ma carrière !"
    },
    {
      name: "Inès T.",
      email: "i***t@example.com",
      text: "Le rehaussement de cils est parfait, le résultat est bluffant de naturel. L'équipe est adorable et très professionnelle. C'est mon nouveau rendez-vous beauté incontournable."
    },
    {
      name: "Léa M.",
      email: "l***m@example.com",
      text: "J'ai suivi la formation manucure russe et je suis impressionnée par la précision de la technique enseignée. Une vraie valeur ajoutée pour mes services."
    }
];


export default async function Testimonials() {

  return (
    <section id="avis" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ce que nos client(e)s disent
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nous sommes fiers de la satisfaction de notre clientèle. Découvrez leurs retours d'expérience.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex h-full flex-col items-start justify-between p-6 space-y-4">
                        <div>
                          <Quote className="h-8 w-8 text-accent mb-4" />
                          <p className="text-base text-muted-foreground">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="w-full">
                           <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="font-semibold text-sm">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.email}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
