export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-12 pb-8">
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          35 ferramentas disponíveis
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Todas as ferramentas de<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            comércio exterior
          </span>{" "}
          em um lugar.
        </h2>
        <p className="text-[var(--muted)] text-base max-w-xl">
          Acesso rápido às principais plataformas usadas por importadores, exportadores, despachantes e analistas de comex.
        </p>
      </div>
    </section>
  );
}
