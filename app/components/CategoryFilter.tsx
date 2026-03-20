"use client";

import { Category } from "@/app/data/tools";

interface CategoryFilterProps {
  categories: Category[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ categories, selected, onSelect, counts }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150 ${
          selected === null
            ? "bg-white text-black border-white"
            : "bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-white/40 hover:text-white"
        }`}
      >
        Todas
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-150 flex items-center gap-1.5 ${
            selected === cat.id
              ? `${cat.color} text-white border-transparent`
              : `bg-transparent ${cat.textColor} ${cat.borderColor}/40 hover:${cat.borderColor} border`
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
          <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${selected === cat.id ? "bg-white/20" : cat.badgeBg}`}>
            {counts[cat.id] ?? 0}
          </span>
        </button>
      ))}
    </div>
  );
}
