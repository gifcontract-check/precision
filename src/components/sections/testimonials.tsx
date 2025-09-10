import { generateCustomerTestimonials } from "@/ai/flows/generate-customer-testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default async function Testimonials() {
  const { testimonials } = await generateCustomerTestimonials({
    numberOfTestimonials: 20,
    keywords: "extensions de cils, réhaussement de cils, onglerie, manucure russe, sourcils",
  });

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
                  <div className="p-4">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col items-start justify-center p-6 space-y-4">
                        <Quote className="h-8 w-8 text-accent" />
                        <p className="text-base text-muted-foreground">
                          "{testimonial}"
                        </p>
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
