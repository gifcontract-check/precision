import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const schedule = [
  { day: "Lundi", hours: "10:00 - 18:00" },
  { day: "Mardi", hours: "10:00 - 18:00" },
  { day: "Mercredi", hours: "10:00 - 18:00" },
  { day: "Jeudi", hours: "10:00 - 18:00" },
  { day: "Vendredi", hours: "10:00 - 18:00" },
  { day: "Samedi", hours: "10:00 - 18:00" },
  { day: "Dimanche", hours: "Fermé" },
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nos Horaires
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nous sommes ouverts pour vous servir tout au long de la semaine.
            </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {schedule.map((item) => (
            <Card key={item.day} className="flex flex-col items-center justify-center p-6 text-center">
              <CardHeader>
                <CardTitle>{item.day}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>{item.hours}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
