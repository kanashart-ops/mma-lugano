import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, ChevronLeft, Info } from "lucide-react";

export const metadata = {
  title: "Расписание — MMA Lugano",
  description:
    "Еженедельное расписание BROA BJJ Lugano и режим работы. No-Gi, Open Mat, дети, юниоры, базовый и продвинутый уровни.",
};

export default function RaspisaniePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Заголовок страницы */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-6 w-6" />
            <h1 className="text-3xl font-extrabold">BROA BJJ Lugano — расписание</h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">*</span> Занятия, отмеченные “*”, полезны для практики MMA.
          </p>

          {/* Режим работы и правила свободных слотов */}
          <div className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 text-gray-700" />
              <div className="text-sm text-gray-800">
                <p className="font-semibold">Время работы</p>
                <p>Зал открыт каждый день, <strong>06:00 – 21:00</strong> (7 дней в неделю).</p>
                <p className="mt-2">
                  <span className="font-semibold">Свободные слоты:</span> доступ только при наличии
                  <strong> годового абонемента</strong> либо в рамках
                  <strong> персональных тренировок</strong> с <strong>аккредитованным тренером</strong>.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/ru"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >
                <ChevronLeft className="h-4 w-4" />
                На главную
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Контент расписания */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <DayCard title="Понедельник" items={[
            "06:00 – 07:00  ·  BJJ No-Gi *",
            "18:00 – 19:30  ·  BJJ База",
            "19:30 – 21:00  ·  BJJ Продвинутый",
          ]} note="Днём свободные окна." />

          <DayCard title="Вторник" items={[
            "12:00 – 13:00  ·  BJJ Open",
            "18:00 – 21:00  ·  MMA / Striking",
          ]} />

          <DayCard title="Среда" items={[
            "06:00 – 07:00  ·  BJJ No-Gi *",
            "16:00 – 17:00  ·  BJJ Дети (6–10)",
            "17:00 – 18:00  ·  BJJ Юниоры (11–15)",
            "18:00 – 19:30  ·  BJJ База",
            "19:30 – 21:00  ·  BJJ Продвинутый",
          ]} />

          <DayCard title="Четверг" items={[
            "18:00 – 21:00  ·  MMA / Striking",
          ]} note="Утро и день — свободно." />

          <DayCard title="Пятница" items={[
            "12:00 – 13:00  ·  BJJ No-Gi *",
            "18:30 – 20:00  ·  BJJ No-Gi *",
          ]} />

          <DayCard title="Суббота" items={[
            "09:00 – 10:00  ·  BJJ Дети (6–10)",
            "10:00 – 11:00  ·  BJJ Юниоры (11–15)",
            "11:00 – 13:00  ·  BJJ Open Mat",
          ]} />

          <DayCard title="Воскресенье" items={[
            "10:00 – 12:00  ·  BJJ Open Mat No-Gi *",
          ]} note="Остальное время — свободно." />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DayCard({ title, items, note }: { title: string; items: string[]; note?: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-3 space-y-2 text-gray-800">
        {items.map((line, i) => (
          <li key={i} className="rounded-md bg-gray-50 px-3 py-2">{line}</li>
        ))}
      </ul>
      {note && <p className="mt-3 text-sm text-gray-500">{note}</p>}
    </div>
  );
}
