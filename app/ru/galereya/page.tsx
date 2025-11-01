import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Галерея — MMA Lugano",
  description: "Фотографии тренировок и команды MMA Lugano.",
};

export default function GalereyaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <GalleryGrid count={24} />
      <Footer />
    </main>
  );
}
