import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Sunrise, Paintbrush, Sparkles, PenTool } from "lucide-react";

const formations = [
  {
    title: "Extensions de Cils",
    icon: <Eye className="w-8 h-8 text-primary" />,
  },
  {
    title: "Réhaussement de Cils",
    icon: <Sunrise className="w-8 h-8 text-primary" />,
  },
  {
    title: "Onglerie",
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
  },
  {
    title: "Manucure Russe",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
  {
    title: "Sourcils",
    icon: <PenTool className="w-8 h-8 text-primary" />,
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
            <Card key={formation.title} className="text-center group hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="bg-accent rounded-full p-4 group-hover:scale-110 transition-transform">
                    {formation.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{formation.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
