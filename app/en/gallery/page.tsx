import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery — MMA Lugano",
  description: "Photos from MMA Lugano training and team.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <GalleryGrid count={24} />
      <Footer />
    </main>
  );
}
