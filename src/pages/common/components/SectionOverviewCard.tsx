interface SectionOverviewCardProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
}

export const SectionOverviewCard = ({
  eyebrow,
  title,
  description,
  bullets,
}: SectionOverviewCardProps) => {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white px-7 py-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">
        {eyebrow}
      </span>

      <div className="mt-4 max-w-3xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h1>
        <p className="text-base leading-7 text-slate-600">{description}</p>
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {bullets.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
