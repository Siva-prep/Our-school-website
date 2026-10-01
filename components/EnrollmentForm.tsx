'use client';

import { FormEvent, useState } from 'react';
import type { EnrollmentFormData } from '../types';

const initialForm: EnrollmentFormData = {
  name: '',
  childName: '',
  age: 3,
  phone: '',
  message: '',
};

export default function EnrollmentForm() {
  const [form, setForm] = useState<EnrollmentFormData>(initialForm);
  const [status, setStatus] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof EnrollmentFormData, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: field === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.childName || !form.phone) {
      setStatus('Please complete all required fields.');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to save your enrollment.');
      }

      setStatus(result.message || 'Thank you! Your enrollment request has been submitted successfully.');
      setIsSuccess(true);
      setForm(initialForm);
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Unable to save your enrollment. Please check your MySQL settings.'
      );
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enroll" className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
      <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Enroll</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Reserve your child’s spot today.</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Fill out the form below and we’ll reach out to schedule a tour and answer any questions.
          </p>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                Parent / Guardian Name
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-main"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Child’s Name
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-main"
                  value={form.childName}
                  onChange={(event) => handleChange('childName', event.target.value)}
                  placeholder="Child's name"
                  required
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                Child’s Age
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-main"
                  type="number"
                  min={2}
                  max={6}
                  value={form.age}
                  onChange={(event) => handleChange('age', event.target.value)}
                  required
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Phone
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-main"
                  type="tel"
                  value={form.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                  placeholder="Phone number"
                  required
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-700">
              Message
              <textarea
                className="min-h-[120px] w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-main"
                value={form.message}
                onChange={(event) => handleChange('message', event.target.value)}
                placeholder="Questions or notes"
              />
            </label>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-brand-main px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit request'}
              </button>
              {status && (
                <p className={`text-sm ${isSuccess ? 'text-emerald-700' : 'text-rose-600'}`}>{status}</p>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-[1.75rem] bg-sand-100 p-8 text-slate-700 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">What to expect</h3>
          <ul className="mt-5 space-y-4">
            <li className="rounded-3xl bg-white p-4 shadow-sm">A friendly introduction to our teachers and classrooms.</li>
            <li className="rounded-3xl bg-white p-4 shadow-sm">A review of daily routines and seasonal learning themes.</li>
            <li className="rounded-3xl bg-white p-4 shadow-sm">Guidance on preschool readiness and enrollment options.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
