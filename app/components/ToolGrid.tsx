"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { tools, categories } from "@/app/data/tools";
import Header from "./Header";
import Hero from "./Hero";
import CategoryFilter from "./CategoryFilter";
import ToolCard from "./ToolCard";
import ScrollToTop from "./ScrollToTop";

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

export default function ToolGrid() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const debouncedSearch = useDebounce(search, 200);
  const gridRef = useRef<HTMLDivElement>(null);

  const counts = useMemo(() => {
    const result: Record<string, number> = {};
    for (const cat of categories) {
      result[cat.id] = tools.filter((t) => t.categoryId === cat.id).length;
    }
    return result;
  }, []);

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory = selectedCategory ? tool.categoryId === selectedCategory : true;
      const matchesSearch = debouncedSearch.trim()
        ? tool.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          tool.description.toLowerCase().includes(debouncedSearch.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, selectedCategory]);

  const categoryMap = useMemo(() => {
    return Object.fromEntries(categories.map((c) => [c.id, c]));
  }, []);

  const groupedByCategory = useMemo(() => {
    const activeCategories = selectedCategory
      ? categories.filter((c) => c.id === selectedCategory)
      : categories;

    return activeCategories
      .map((cat) => ({
        category: cat,
        tools: filtered.filter((t) => t.categoryId === cat.id),
      }))
      .filter((g) => g.tools.length > 0);
  }, [filtered, selectedCategory]);

  return (
    <>
      <Header
        search={search}
        onSearchChange={setSearch}
        totalTools={tools.length}
        filteredCount={filtered.length}
      />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            counts={counts}
          />
        </div>

        <div ref={gridRef}>
          {groupedByCategory.length === 0 ? (
            <div className="text-center py-24 text-[var(--muted)] animate-fade-in">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg font-medium text-[var(--foreground)]">Nenhuma ferramenta encontrada</p>
              <p className="text-sm mt-1">Tente outro termo de busca ou categoria</p>
            </div>
          ) : (
            <div className="space-y-12">
              {groupedByCategory.map(({ category, tools: catTools }, i) => (
                <section
                  key={category.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xl">{category.icon}</span>
                    <h2 className={`text-sm font-semibold uppercase tracking-wider ${category.textColor}`}>
                      {category.name}
                    </h2>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                    <span className="text-[var(--muted)] text-xs">{catTools.length}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {catTools.map((tool, j) => (
                      <div
                        key={tool.id}
                        className="animate-slide-up"
                        style={{ animationDelay: `${i * 40 + j * 30}ms`, animationFillMode: "both" }}
                      >
                        <ToolCard tool={tool} category={categoryMap[tool.categoryId]} />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-[var(--border)] py-6 text-center text-[var(--muted)] text-xs">
        <p>Tradegator — Agregador de Ferramentas de Comércio Exterior</p>
      </footer>

      <ScrollToTop />
    </>
  );
}
