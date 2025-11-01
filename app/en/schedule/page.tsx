import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, ChevronLeft, Info } from "lucide-react";

export const metadata = {
  title: "Schedule — MMA Lugano",
  description:
    "Weekly schedule for BROA BJJ Lugano and opening hours. BJJ No-Gi, Open Mat, Kids, Junior, Base and Advanced classes.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Page hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="h-6 w-6" />
            <h1 className="text-3xl font-extrabold">BROA BJJ Lugano — Schedule</h1>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold">*</span> Classes marked with “*” are useful for MMA practice.
          </p>

          {/* Opening hours & free slots policy */}
          <div className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 text-gray-700" />
              <div className="text-sm text-gray-800">
                <p className="font-semibold">Opening hours</p>
                <p>The gym is open every day, <strong>06:00 – 21:00</strong> (7 days a week).</p>
                <p className="mt-2">
                  <span className="font-semibold">Free slots:</span> access is allowed only with an
                  <strong> annual membership</strong> or during <strong>private sessions</strong> with an
                  <strong> accredited coach</strong>.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href="/en"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule content */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <DayCard title="Monday" items={[
            "06:00 – 07:00  ·  BJJ No-Gi *",
            "18:00 – 19:30  ·  BJJ Base",
            "19:30 – 21:00  ·  BJJ Advanced",
          ]} note="Midday slots are free." />

          <DayCard title="Tuesday" items={[
            "12:00 – 13:00  ·  BJJ Open",
            "18:00 – 21:00  ·  MMA / Striking",
          ]} />

          <DayCard title="Wednesday" items={[
            "06:00 – 07:00  ·  BJJ No-Gi *",
            "16:00 – 17:00  ·  BJJ Kids (6–10)",
            "17:00 – 18:00  ·  BJJ Junior (11–15)",
            "18:00 – 19:30  ·  BJJ Base",
            "19:30 – 21:00  ·  BJJ Advanced",
          ]} />

          <DayCard title="Thursday" items={[
            "18:00 – 21:00  ·  MMA / Striking",
          ]} note="Morning/afternoon free." />

          <DayCard title="Friday" items={[
            "12:00 – 13:00  ·  BJJ No-Gi *",
            "18:30 – 20:00  ·  BJJ No-Gi *",
          ]} />

          <DayCard title="Saturday" items={[
            "09:00 – 10:00  ·  BJJ Kids (6–10)",
            "10:00 – 11:00  ·  BJJ Junior (11–15)",
            "11:00 – 13:00  ·  BJJ Open Mat",
          ]} />

          <DayCard title="Sunday" items={[
            "10:00 – 12:00  ·  BJJ Open Mat No-Gi *",
          ]} note="Rest of the day is free." />
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
