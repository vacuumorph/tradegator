import { Tool, Category } from "@/app/data/tools";

interface ToolCardProps {
  tool: Tool;
  category: Category;
}

export default function ToolCard({ tool, category }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 hover:border-current transition-all duration-200 hover:bg-[var(--surface-hover)] hover:-translate-y-0.5 ${category.textColor}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg ${category.badgeBg} flex items-center justify-center text-lg flex-shrink-0`}>
          {category.icon}
        </div>
        <svg
          className="w-4 h-4 text-[var(--muted)] group-hover:text-current transition-colors flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      <h3 className="text-[var(--foreground)] font-semibold text-sm mb-1 group-hover:text-white transition-colors">
        {tool.name}
      </h3>
      <p className="text-[var(--muted)] text-xs leading-relaxed line-clamp-2">
        {tool.description}
      </p>

      <div className={`mt-3 pt-3 border-t border-[var(--border)] flex items-center gap-1.5`}>
        <span className={`text-xs font-medium ${category.textColor}`}>{category.icon} {category.name}</span>
      </div>
    </a>
  );
}
