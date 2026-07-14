"use client";

export function ProjectChips({ selected, onSelect }: { selected: string, onSelect: (val: string) => void }) {
  const chips = [
    "Android App",
    "Website",
    "AI Project",
    "Course",
    "Collaboration",
    "Other"
  ];

  return (
    <div className="mb-6">
      <label className="block text-xs font-medium text-muted-foreground mb-2">Quick Select</label>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onSelect(chip)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selected.includes(chip) || selected === chip
                ? "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
