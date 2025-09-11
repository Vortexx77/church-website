import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, BookOpen, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QuickLinks = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 92%',
          once: true,
        },
      });

      tl.from('[data-join-heading]', { y: 14, opacity: 0, duration: 0.6, immediateRender: false })
        .from('[data-join-accent]', { scaleX: 0, transformOrigin: 'left center', duration: 0.5, immediateRender: false }, '-=0.2')
        .from('[data-card]', { y: 24, opacity: 0, duration: 0.6, stagger: 0.12, immediateRender: false });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <CalendarDays className="h-6 w-6 text-[#C9A87C]" />,
      title: 'Sunday Service',
      time: '10:00 AM',
      description: 'Join us for worship and the Word',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-[#C9A87C]" />,
      title: 'Bible Study',
      time: 'Wednesday, 6:30 PM',
      description: 'Midweek Bible study and prayer',
    },
    {
      icon: <Users className="h-6 w-6 text-[#C9A87C]" />,
      title: 'Youth Fellowship',
      time: 'Friday, 5:00 PM',
      description: 'For ages 13-18',
    },
  ];

  return (
    <section ref={rootRef} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500" data-join-heading>Join us this week</p>
          <div className="mt-2 flex justify-center">
            <span data-join-accent className="inline-block h-0.5 w-24 bg-[#C9A87C]"></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((item, index) => (
            <Link
              key={index}
              // to={item.link}
              data-card
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9A87C] via-amber-400 to-[#C9A87C] opacity-80 transition-all duration-300 group-hover:h-1.5"></div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eee6]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-[#C9A87C] font-semibold">{item.time}</p>
              <p className="mt-1 text-gray-600">{item.description}</p>
              {/* <span className="mt-4 inline-flex items-center text-sm font-semibold text-gray-900">More Info →</span> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
