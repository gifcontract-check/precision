
import Header from '@/components/header';
import Footer from '@/components/sections/footer';

export default function CGVPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* J'ai supprimé le Header pour éviter d'avoir la grande image de bannière ici */}
      <main className="flex-grow container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
            Conditions Générales de Vente
          </h1>
          <p>
            Le contenu de vos Conditions Générales de Vente peut être placé ici. 
            Donnez-moi simplement le texte et je le mettrai à jour pour vous.
          </p>
          {/* Vous pouvez ajouter plus de contenu ici */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
