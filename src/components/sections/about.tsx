import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

const aboutImage = PlaceHolderImages.find((img) => img.id === "about-image");

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mettez votre regard en valeur avec Précision
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Rendez-vous à l'institut de beauté Précision Institut à Lille. Situé au 188 de la rue Solférino, votre espace beauté va révéler toute la séduction de votre regard. Venez y rencontrer Safia, votre esthéticienne, et laissez la magie opérer.
            </p>
          </div>
           {aboutImage && (
              <div className="flex justify-center">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover shadow-2xl"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Pour vos cils</h3>
                <p className="text-muted-foreground">
                Elle pense à toutes celles qui ne peuvent porter d'extensions. Elle leur propose des rehaussements de cils du plus bel effet. Vous pouvez dire adieu à votre recourbe-cils car vos cils adopteront une jolie courbure durant plusieurs semaines. Ouvert, votre regard sera particulièrement séduisant.
                </p>
            </Card>
            <Card className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Pour vos sourcils</h3>
                <p className="text-muted-foreground">
                Le Brow Lift est la technique la plus plébiscitée. Pour cause, elle permet de restructurer très joliment les sourcils, leur offrant volume et épaisseur. Les vôtres seront disciplinés, glamour. Ce rehaussement de sourcils va transformer votre physionomie pour le meilleur.
                </p>
            </Card>
            <Card className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Et plus encore</h3>
                <p className="text-muted-foreground">
                Profitez aussi d'une épilation du visage et d'une séance de maquillage. Pour une soirée ou pour le travail, Safia vous maquillera, révélant la beauté de votre visage. N'hésitez pas, au passage, à lui demander quelques conseils.
                </p>
            </Card>
        </div>
      </div>
    </section>
  );
}
