import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

  <section id="home" className="relative isolate overflow-hidden min-h-[80vh]">
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
            MMA в Лугано
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            Групповые и индивидуальные тренировки — реальная техника, дружелюбная среда и профессиональный коучинг.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com/mmalugano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-black"
            >
              <Instagram className="h-4 w-4" /> Мы в Instagram
            </a>
          </div>
        </div>
      </section>

      <section id="perche" className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="mb-6 text-3xl font-extrabold">Наша философия</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Наша школа MMA основана на борьбе; тренируемся вместе с командой Broa BJJ Lugano.
          Подходит для новичков с нуля, со страйкинг-базой и для тех, кто хочет быть универсальным.
        </p>
      </section>

      <section id="contatti" className="border-y bg-gray-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Где мы</h2>
            <p className="mt-2 text-gray-700">
              На базе <span className="font-semibold">@broabjj.lugano</span>
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
                <Instagram className="h-4 w-4" /> Написать в Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow">
            <iframe
              title="Карта MMA Lugano"
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
