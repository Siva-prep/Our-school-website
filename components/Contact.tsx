import Image from 'next/image';
import contactImage from './contact-image.jpeg';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-8">
      <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-dark">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">Get in touch with us</h2>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Reach out for questions, visits, and enrollment details at Babes N Tots.
          </p>
          <div className="mt-8 space-y-4 text-slate-700">
            <p className="rounded-3xl bg-sand-50 p-5">152, karupapanam Street,Gnanagiri Road,Sivakasi</p>
            <p className="rounded-3xl bg-sand-50 p-5">Phone: +91 6383916073</p>
            <p className="rounded-3xl bg-sand-50 p-5">Email: thebabesntots@gmail.com</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
          <div className="relative h-80 w-full">
            <Image
              src={contactImage}
              alt="Playful classroom scene"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
