"use client"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-xl mx-auto">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
        🔍
      </span>
      <input
        type="text"
        placeholder="Buscar ferramenta..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-white/30 focus:bg-white/8 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors text-sm"
        >
          ✕
        </button>
      )}
    </div>
  )
}
