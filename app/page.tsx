import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Allenamento MMA a Lugano"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-24 text-white md:py-32">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            MMA a Lugano
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Allenamenti di gruppo e privati — tecnica reale, ambiente amichevole e coaching professionale.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com/mmalugano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-black"
            >
              <Instagram className="h-4 w-4" /> Seguici su Instagram
            </a>
          </div>
        </div>
      </section>

      {/* MOTIVAZIONE */}
      <section id="perche" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Perché allenarti qui</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <p className="text-gray-700">
            Alla MMA Lugano impari a muoverti con consapevolezza, a difenderti e a costruire forza reale.
            Lavoriamo su fondamentali solidi — striking, clinch e grappling — con progressioni chiare
            per principianti e atleti avanzati. Qui trovi disciplina, rispetto e una community che ti sostiene.
          </p>
          <p className="text-gray-700">
            Gli allenamenti sono pensati per migliorare resistenza, coordinazione e sicurezza personale.
            Se vuoi rimetterti in forma, imparare a combattere in modo corretto o prepararti per le gare,
            sei nel posto giusto.
          </p>
        </div>
      </section>

      {/* INDIRIZZO + MAPPA */}
      <section id="contatti" className="border-y bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Dove siamo</h2>
            <p className="mt-2 text-gray-700">
              Presso <span className="font-semibold">@broabjj.lugano</span>
              <br />
              <span className="inline-flex items-center gap-2 text-gray-800">
                <MapPin className="h-5 w-5" /> Via Landriani 7, 6900 Lugano, Svizzera
              </span>
            </p>
            <div className="mt-6">
              <a
                href="https://instagram.com/mmalugano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Instagram className="h-4 w-4" /> Scrivici su Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow">
            <iframe
              title="Mappa MMA Lugano"
              src="https://www.google.com/maps?q=Via%20Landriani%207,%206900%20Lugano&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
