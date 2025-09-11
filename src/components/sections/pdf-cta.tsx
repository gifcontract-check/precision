import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function PdfCta() {
  return (
    <section id="pdf-cta" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Plus d'informations sur nos formations
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Téléchargez notre brochure pour découvrir le programme détaillé de chaque formation, les tarifs et les prochaines dates de session.
                </p>
            </div>
            <Button asChild size="lg">
                <Link href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=f7350ad5a3&attid=0.1&permmsgid=msg-f:1842983210619213546&th=199397772bf796ea&view=att&zw&disp=inline&saddbat=ANGjdJ9vDQ0bVkW0ggEjkMvAjGGtpM4ZeyVCOcDCTUNDEYgwEOhfuxPjoQQROk2cB5mQHcl6YO-XS0CZHh-kUF7WWRh5UEyk9Mv9kWO08Rvj7z3qnyV4bC5UllHhLUFWpjzh2zXM5sQLUjBc8yGzDEfxfSaniyPNkJGRu_--I89K2XX8qtnXPEzx6swMZH8rd2jbT1bIFAfJ0jzqZ74o8CqbKr7v7SdzhBCqFzQ_1ufVAKxuSPDrlj6yYHZlU0iTsr4N4vIGEW4N9a86PfQHFdd6kaoWwcRIUXX59Gsa0H4Hjj3j3UjZ3Mgp4K3iQvkBCKvpRNdubgdHTJ-TRQHod2nqVX-lz6ZdxbU2cUSo-ELgIgWJW1nXW4isbodXgMGhALjTpgEaQ7q1-JCHbaIuc2dLTba688ugsRmT-WDBVMMcoB2me5lGztEQJqXftT_EnA8wMctP1BYUWjS6KeiYGXUv2UCy49LPQBwEJmfY4uqZA6tnuJIv_LjkAxkwrMyBunaawbv_hKWFAKXpmuqQQ_3PdDMlfrB1EuTQENn0Qd6737tVCCODz8_cnyt8viTVEwk5YWWp5iQlL70UJaa-bH8aOsfGqsqecu4344ntEScokiE8OPZFNVTQ7E_tReM8mVSiX6Zm5dcsRV4uGiJKUPlmF9dPSVVNnmB7TfosMv0uw4P12vgJSJAqVtzZTpkHJqzpxoN_FXTPzwWEmHWJNyOdGIgME3Xojgr4BQ1gG5j7VWU2q8ghwK7VAjbPNfNVchRVesURJW1PkWxVf77enk5P4JPLYP5g1_SAN3JbNl8LCCG-nwY-w2qp-QZEkH6BCCyhYOtab-Z2t041bvD3xZHbKaKTQlufJfwbE895hAYnHWGYl-JhXCiDRGHG1kEpNH2JveBwdl3PNZywvghHPN7ZYI8BcNzTvkLqUhxtZH5Sctb6NgLWzbOoEDMx7kWPh6lGNE2kUpSwRUKlP5JkPyajhFFvYsT_r8VlaSiyOuT1oHXYu-vWCLXj9FfRX3sTFC6JmAWqXHOuxILdvKQRRmXvuVfENrOCkr4512RWpvgUtAdn4tlrMlnsFqJbFcqWDj8HeipOfiSYoGH6lYy" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Télécharger la brochure
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
