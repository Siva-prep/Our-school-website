import Image from 'next/image';
import heroImage from './image.jpeg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 via-sand-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-dark">
            Welcome to
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Babes N Tots Playschool
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Gentle early learning for little learners.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            A joyful place where toddlers and preschoolers explore, discover, and grow through creative play and caring guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#enroll" className="inline-flex items-center justify-center rounded-full bg-brand-main px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark">
              Book a visit
            </a>
            <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">
              View programs
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <Image
            src={heroImage}
            alt="Children enjoying play-based learning"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
