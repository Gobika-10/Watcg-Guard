interface BillingAddressCardProps {
  company: string;
  lines: string[];
}

export const BillingAddressCard = ({ company, lines }: BillingAddressCardProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-xl font-semibold text-slate-900">Billing Address</h3>
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">{company}</p>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <button
        type="button"
        className="mt-2.5 text-xs font-semibold text-sky-700 hover:text-sky-800 hover:underline"
      >
        Edit Address
      </button>
    </section>
  );
};
