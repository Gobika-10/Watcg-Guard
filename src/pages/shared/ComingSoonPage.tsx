interface ComingSoonPageProps {
  title: string;
}

export const ComingSoonPage = ({ title }: ComingSoonPageProps) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <p className="mt-3 text-slate-600">
        This page route is ready. Next, we can wire real data/actions here.
      </p>
    </section>
  );
};
