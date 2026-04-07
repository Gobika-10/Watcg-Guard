interface RenewalsHeroProps {
  title: string;
  subtitle: string;
}

export const RenewalsHero = ({ title, subtitle }: RenewalsHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 px-8 py-10 text-white shadow-lg">
      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-indigo-400/10 blur-2xl" />

      {/* Pill label */}
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
        Renewals
      </span>

      <h3 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight">
        {title}
      </h3>
      <p className="mt-2 max-w-xl text-base leading-relaxed text-blue-200/80">
        {subtitle}
      </p>
    </section>
  );
};
