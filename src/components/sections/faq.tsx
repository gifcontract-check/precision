import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quelles sont vos horaires d'ouverture ?",
    answer: "Nous sommes ouverts du Lundi au Samedi, de 10h à 18h. L'institut est fermé le Dimanche.",
  },
  {
    question: "Comment puis-je m'inscrire à une formation ?",
    answer: "Pour vous inscrire, vous pouvez nous appeler directement au 07 62 23 69 51 ou utiliser le formulaire de contact pour toute question préalable. Nous vous guiderons à travers les étapes d'inscription.",
  },
  {
    question: "Proposez-vous des facilités de paiement pour les formations ?",
    answer: "Oui, nous comprenons l'investissement que représente une formation de qualité. Nous proposons des options de paiement en plusieurs fois. Contactez-nous pour en discuter et trouver la solution qui vous convient le mieux.",
  },
  {
    question: "Où se situe l'institut ?",
    answer: "Notre institut est situé au 188 rue Solférino, à Lille, un quartier facilement accessible en transports en commun.",
  },
  {
    question: "Les formations sont-elles certifiantes ?",
    answer: "Oui, à l'issue de chaque formation et après validation de vos compétences, vous recevrez un certificat d'aptitude qui attestera de votre savoir-faire professionnel.",
  }
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Questions Fréquentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Vous avez des questions ? Nous avons les réponses.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
