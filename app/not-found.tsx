import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-6xl mb-6">🌐</p>
      <h1 className="text-2xl font-bold text-white mb-2">Página não encontrada</h1>
      <p className="text-[var(--muted)] text-sm mb-8">
        A rota que você acessou não existe.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
