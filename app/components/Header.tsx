"use client";

interface HeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  totalTools: number;
  filteredCount: number;
}

export default function Header({ search, onSearchChange, totalTools, filteredCount }: HeaderProps) {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Tradegator" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none">Tradegator</h1>
            <p className="text-[var(--muted)] text-xs mt-0.5">Ferramentas de Comércio Exterior</p>
          </div>
        </div>

        <div className="flex-1 w-full sm:w-auto">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)] w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar ferramentas..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted)] rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="text-[var(--muted)] text-xs flex-shrink-0">
          {filteredCount === totalTools ? (
            <span>{totalTools} ferramentas</span>
          ) : (
            <span>{filteredCount} de {totalTools} ferramentas</span>
          )}
        </div>
      </div>
    </header>
  );
}
