export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-10 md:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} MMA Lugano. Tutti i diritti riservati.
        </p>
        <p className="text-sm text-gray-500">
          created by{' '}
          <a
            href="https://t.me/art_aeee"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-700 hover:underline"
          >
            ArtPab
          </a>
        </p>
      </div>
    </footer>
  );
}