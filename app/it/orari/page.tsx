import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, ChevronLeft, Info } from "lucide-react";

export const metadata = {
  title: "Orari — MMA Lugano",
  description:
    "Orari dei corsi BROA BJJ Lugano e informazioni su orari di apertura. BJJ No-Gi, Open Mat, bambini, junior e corsi base/avanzato.",
};

export default function OrariPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero-бар страницы */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-6 w-6" />
            <h1 className="text-3xl font-extrabold">Orari BROA BJJ Lugano</h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">*</span> I corsi contrassegnati con “*” sono utili
            per chi pratica i corsi di MMA.
          </p>

          {/* Блок информации о режиме работы и свободных слотах */}
          <div className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 text-gray-700" />
              <div className="text-sm text-gray-800">
                <p className="font-semibold">Orario di apertura</p>
                <p>La palestra è aperta tutti i giorni, <strong>06:00 – 21:00</strong> (7 giorni su 7).</p>
                <p className="mt-2">
                  <span className="font-semibold">Fasce libere:</span> l’accesso è consentito solo per
                  allenamenti con <strong>abbonamento annuale</strong> oppure durante
                  <strong> sessioni private</strong> con un <strong>coach accreditato</strong>.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/it"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >
                <ChevronLeft className="h-4 w-4" />
                Torna alla Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Контент с расписанием */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Lunedì */}
          <DayCard
            title="Lunedì"
            items={[
              "06:00 – 07:00  ·  BJJ No-Gi *",
              "18:00 – 19:30  ·  BJJ Corso Base",
              "19:30 – 21:00  ·  BJJ Corso Avanzato",
            ]}
            note="Fasce libere a metà giornata."
          />

          {/* Martedì */}
          <DayCard
            title="Martedì"
            items={[
              "12:00 – 13:00  ·  BJJ Open",
              "18:00 – 21:00  ·  MMA / Striking",
            ]}
          />

          {/* Mercoledì */}
          <DayCard
            title="Mercoledì"
            items={[
              "06:00 – 07:00  ·  BJJ No-Gi *",
              "16:00 – 17:00  ·  BJJ Bambini (6–10)",
              "17:00 – 18:00  ·  BJJ Junior (11–15)",
              "18:00 – 19:30  ·  BJJ Corso Base",
              "19:30 – 21:00  ·  BJJ Corso Avanzato",
            ]}
          />

          {/* Giovedì */}
          <DayCard
            title="Giovedì"
            items={["18:00 – 21:00  ·  MMA / Striking"]}
            note="Mattina/pomeriggio libero."
          />

          {/* Venerdì */}
          <DayCard
            title="Venerdì"
            items={[
              "12:00 – 13:00  ·  BJJ No-Gi *",
              "18:30 – 20:00  ·  BJJ No-Gi *",
            ]}
          />

          {/* Sabato */}
          <DayCard
            title="Sabato"
            items={[
              "09:00 – 10:00  ·  BJJ Bambini (6–10)",
              "10:00 – 11:00  ·  BJJ Junior (11–15)",
              "11:00 – 13:00  ·  BJJ Open Mat",
            ]}
          />

          {/* Domenica */}
          <DayCard
            title="Domenica"
            items={["10:00 – 12:00  ·  BJJ Open Mat No-Gi *"]}
            note="Resto della giornata libero."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DayCard({
  title,
  items,
  note,
}: {
  title: string;
  items: string[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-3 space-y-2 text-gray-800">
        {items.map((line, i) => (
          <li key={i} className="rounded-md bg-gray-50 px-3 py-2">
            {line}
          </li>
        ))}
      </ul>
      {note && <p className="mt-3 text-sm text-gray-500">{note}</p>}
    </div>
  );
}
