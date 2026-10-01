import { getEnrollments, type EnrollmentRecord } from '../../lib/db';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  let enrollments: EnrollmentRecord[] = [];
  let errorMessage = '';

  try {
    enrollments = await getEnrollments();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : 'Unable to load enrollments from the database.';
  }

  return (
    <main className="min-h-screen bg-sand-50 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Admin</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Enrollment records</h1>
        </div>

        {errorMessage ? (
          <div className="rounded-3xl border border-rose-200 bg-white p-5 text-rose-700 shadow-soft">
            {errorMessage}
          </div>
        ) : enrollments.length === 0 ? (
          <div className="rounded-3xl bg-white p-6 shadow-soft">No enrollments submitted yet.</div>
        ) : (
          <div className="grid gap-4">
            {enrollments.map((entry) => (
              <article key={entry.id} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-2 border-b border-slate-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{entry.name}</h2>
                    <p className="text-sm text-slate-500">Child: {entry.child_name}</p>
                  </div>
                  <span className="text-sm text-slate-500">
                    {new Date(entry.created_at).toLocaleString()}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-slate-900">Age:</span> {entry.age}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-900">Phone:</span> {entry.phone}
                  </p>
                </div>

                {entry.message && (
                  <div className="mt-4 rounded-2xl bg-sand-50 p-4 text-slate-700">
                    <span className="font-semibold text-slate-900">Message:</span> {entry.message}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
