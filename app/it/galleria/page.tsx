import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Galleria — MMA Lugano",
  description: "Foto degli allenamenti e del team MMA Lugano.",
};

export default function GalleriaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Только фотографии, без заголовков и текста */}
      <GalleryGrid count={24} />
      <Footer />
    </main>
  );
}
