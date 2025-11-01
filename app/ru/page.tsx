import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, MapPin, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Тренировки MMA в Лугано"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center gap-6 px-4 text-white">
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            MMA в Лугано
          </h1>
          <p className="text-xl text-white/90 font-light">
            Групповые и индивидуальные тренировки
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com/mmalugano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-sm font-bold text-black"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href="https://wa.me/41799619179"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white"
            >
              WhatsApp
            </a>
            <a
              href="tel:+41799619179"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/60 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> +41 79 961 91 79
            </a>
          </div>
        </div>
      </section>

      {/* ФИЛОСОФИЯ */}
      <section id="perche" className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="mb-6 text-3xl font-extrabold">Философия</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Наша команда MMA основана на борьбе, тренируемся вместе с командой{" "}
          <strong>Broa BJJ Lugano</strong>. Подходит для тех, кто начинает с нуля, у кого есть база
          в страйкинге, и для тех, кто хочет быть универсальным.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Для тех, кто хочет тренироваться на соревновательном уровне, и для тех, кто тренируется для себя.
        </p>
      </section>

      {/* АДРЕС + КАРТА */}
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
            <div className="mt-6 space-y-3">
              <a
                href="https://instagram.com/mmalugano"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Instagram className="h-4 w-4" /> Написать в Instagram
              </a>
              <a
                href="https://wa.me/41799619179"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                WhatsApp
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
