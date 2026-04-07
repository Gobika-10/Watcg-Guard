interface AccountExecutiveCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export const AccountExecutiveCard = ({ name, role, email, phone }: AccountExecutiveCardProps) => {
  return (
    <section className="relative overflow-hidden rounded-xl border border-slate-200 bg-sky-50 p-5 shadow-sm">
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-sky-200/40 blur-3xl" />

      <h3 className="text-base font-semibold text-slate-900">Account Executive</h3>

      <div className="mt-3 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-bold text-white shadow-sm">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-[11px] text-slate-600">{role}</p>
        </div>
      </div>

      <div className="mt-3 space-y-1.5 rounded-lg bg-white/80 p-3 text-[11px] text-slate-700 ring-1 ring-slate-200">
        <p>
          <span className="text-slate-500">Email - </span>
          <span className="text-slate-700">{email}</span>
        </p>
        <p>
          <span className="text-slate-500">Phone - </span>
          <span className="text-slate-700">{phone}</span>
        </p>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-lg bg-sky-600 py-2 text-xs font-semibold text-white transition-all hover:bg-sky-700 active:scale-95"
      >
        Contact Me
      </button>
    </section>
  );
};
