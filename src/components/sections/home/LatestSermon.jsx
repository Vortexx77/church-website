import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const demoSermons = [
  {
    id: 1,
    title: 'The Power of Faith',
    speaker: 'Pastor John Doe',
    date: 'May 15, 2025',
    image: 'https://picsum.photos/seed/sermon1/800/600',
  },
  {
    id: 2,
    title: 'Walking in Grace',
    speaker: 'Pastor Jane Smith',
    date: 'May 08, 2025',
    image: 'https://picsum.photos/seed/sermon2/800/600',
  },
  {
    id: 3,
    title: 'Hope in the Storm',
    speaker: 'Pastor Mark Lee',
    date: 'Apr 29, 2025',
    image: 'https://picsum.photos/seed/sermon3/800/600',
  },
];

const LatestSermon = ({ sermons = demoSermons }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-sermons-heading]', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
      });
      gsap.from('[data-featured]', {
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%', once: true },
      });
      gsap.from('[data-sermon-item]', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 78%', once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  if (!sermons || sermons.length === 0) return null;
  const [featured, ...rest] = sermons;

  return (
    <section ref={rootRef} className="py-16 bg-[#f8f7f5] relative">
      <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#C9A87C]/10 blur-2xl"></div>
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#C9A87C]/10 blur-2xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500" data-sermons-heading>Latest Sermons</p>
          <div className="mt-2 mx-auto h-0.5 w-24 bg-[#C9A87C]"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Featured sermon */}
          <article data-featured className="lg:col-span-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-200">
              <div className="relative">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">{featured.title}</h3>
                  <p className="mt-1 text-sm md:text-base text-gray-200">{featured.speaker} • {featured.date}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#C9A87C] text-white px-5 py-2.5 text-sm font-semibold shadow hover:bg-[#b39164] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A87C]">
                      <PlayCircle size={18} />
                      Watch
                    </button>
                    <Link to="/sermons" className="text-sm font-semibold underline decoration-[#C9A87C] underline-offset-4">More sermons</Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* List of recent sermons */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {rest.map((s) => (
              <article key={s.id} data-sermon-item className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative w-36 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  <h4 className="truncate text-base md:text-lg font-bold text-gray-900">{s.title}</h4>
                  <p className="mt-0.5 text-xs md:text-sm text-gray-600">{s.speaker} • {s.date}</p>
                  <div className="mt-2">
                    <button className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 text-white px-3 py-1.5 text-xs font-semibold hover:bg-black/90">
                      <PlayCircle size={14} />
                      Watch
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/sermons" className="inline-block border border-gray-300 bg-white px-6 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50">
            Browse all sermons
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestSermon;
