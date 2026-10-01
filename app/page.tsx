import Hero from '../components/Hero';
import Programs from '../components/Programs';
import EnrollmentForm from '../components/EnrollmentForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-sand-50 text-slate-900">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">About Babes N Tots</h2>
            <p className="mt-5 max-w-3xl text-slate-600 leading-8">
              At Babes N Tots, we create a bright and nurturing environment where young children develop social confidence,
              creative skills, and a love of learning through play-based experiences.
            </p>
            <ul className="mt-8 grid gap-4 text-slate-700">
              <li className="rounded-3xl bg-white p-5 shadow-soft">Safe, cheerful classrooms with small group attention.</li>
              <li className="rounded-3xl bg-white p-5 shadow-soft">Daily storytime, music, art, and nature-based exploration.</li>
              <li className="rounded-3xl bg-white p-5 shadow-soft">Nurturing teachers who support gentle early learning milestones.</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-900">Why families choose us</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Our program focuses on curiosity, kindness, and beginning literacy skills designed for toddlers and preschoolers.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-sand-100 p-5">Play-based learning with structure and routine.</div>
              <div className="rounded-3xl bg-sand-100 p-5">Healthy snacks and daily outdoor play.</div>
              <div className="rounded-3xl bg-sand-100 p-5">Supportive drop-off routines for growing independence.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Our Vision</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">A joyful learning environment for every child.</h2>
          <p className="mt-4 max-w-3xl text-slate-600 leading-8">
            At Babes N Tots, our vision is to nurture confident, curious, and compassionate young learners who develop a lifelong love for learning.
          </p>
          <div className="mt-8 grid gap-4 text-slate-700 md:grid-cols-2">
            <div className="rounded-3xl bg-sand-50 p-5 shadow-sm">✨ Build strong academic foundations in literacy and numeracy.</div>
            <div className="rounded-3xl bg-sand-50 p-5 shadow-sm">✨ Encourage independent thinking and problem-solving.</div>
            <div className="rounded-3xl bg-sand-50 p-5 shadow-sm">✨ Foster creativity and imagination.</div>
            <div className="rounded-3xl bg-sand-50 p-5 shadow-sm">✨ Develop social responsibility and kindness.</div>
            <div className="rounded-3xl bg-sand-50 p-5 shadow-sm">✨ Prepare children confidently for primary education.</div>
          </div>
          <p className="mt-8 text-slate-600 leading-7">
            We envision a joyful learning environment where every child feels safe, valued, and inspired.
          </p>
        </div>
      </section>

      <Programs />
      <EnrollmentForm />
      <Contact />
      <Footer />
    </main>
  );
}
