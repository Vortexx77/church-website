import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sampleEvents = [
  {
    id: 1,
    title: "Women's Conference",
    dateLabel: 'Sat, May 13',
    img: 'https://picsum.photos/seed/event1/800/600',
    location: 'Kampala Community Church',
    dateISO: '2025-12-01T10:00:00',
  },
  {
    id: 2,
    title: "Men's Conference",
    dateLabel: 'Sun, Jun 04',
    img: 'https://picsum.photos/seed/event2/800/600',
    location: 'Kampala Community Church',
    dateISO: '2025-12-15T09:00:00',
  },
  {
    id: 3,
    title: 'Vacation Bible School',
    dateLabel: 'Sun, Jun 18',
    img: 'https://picsum.photos/seed/event3/800/600',
    location: 'Kampala Community Church',
    dateISO: '2025-12-20T08:00:00',
  },
];

const UpcomingEvents = ({ events = sampleEvents }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      tl.from('[data-events-heading]', { y: 14, opacity: 0, duration: 0.6 })
        .from('[data-event-card]', { y: 26, opacity: 0, duration: 0.6, stagger: 0.12 })
        .from('[data-events-cta]', { y: 14, opacity: 0, duration: 0.5 }, '-=0.2');
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-[#f5f3f0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 data-events-heading className="uppercase tracking-widest text-xl font-extrabold text-gray-900 mb-8">Upcoming Events</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div key={ev.id} data-event-card className="bg-white shadow-md border border-gray-200">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={ev.img} alt={ev.title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]" />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-serif italic text-[#C9A87C]">{ev.title}</h4>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <CalendarDays className="h-4 w-4 text-[#C9A87C] mr-2" />
                    <span>{ev.dateLabel}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-4 w-4 text-[#C9A87C] mr-2" />
                    <span>{ev.location}</span>
                  </div>
                </div>
                <Countdown targetDate={ev.dateISO} />
                <div className="mt-6 flex justify-center">
                  <Link to={`/events/${ev.id}`} className="inline-block bg-gray-900 text-white px-8 py-2 text-sm tracking-wide">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/events"
            data-events-cta
            className="inline-block border border-gray-300 bg-white px-6 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

// Simple inline countdown to mimic the reference design
function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = React.useState(getTimeRemaining(targetDate));

  React.useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeRemaining(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const parts = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="mt-6 grid grid-cols-4 gap-3 text-center">
      {parts.map((p) => (
        <div key={p.label} className="rounded-full bg-gray-100 py-3">
          <div className="text-lg font-bold text-gray-900">{String(p.value).padStart(2, '0')}</div>
          <div className="text-xs text-gray-500">{p.label}</div>
        </div>
      ))}
    </div>
  );
}

function getTimeRemaining(target) {
  const total = Math.max(0, new Date(target).getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}


