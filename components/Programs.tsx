const programs = [
  {
    title: 'Tender Toddlers',
    description: 'A nurturing introduction to group routines through songs, sensory play, and gentle exploration.',
  },
  {
    title: 'School Prep',
    description: 'Early literacy, math, and social connections delivered through creative storytelling and guided play.',
  },
  {
    title: 'Summer Sprouts',
    description: 'Seasonal art, movement, and outdoor adventure activities for young learners.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Programs</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Learning paths for every little star.</h2>
            <p className="mt-4 max-w-2xl text-slate-600 leading-7">
              Our programs are designed to support age-appropriate milestones while fostering confidence and curiosity.
            </p>
          </div>
          <div className="rounded-3xl bg-sand-100 px-5 py-4 text-slate-700 shadow-sm">
            <p className="text-sm font-semibold">Ages 2-5</p>
            <p className="mt-2">Small class sizes with nurturing teachers.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="rounded-[1.75rem] border border-slate-200 bg-sand-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
