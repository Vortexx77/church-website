import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Info } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop';

/**
 * LeadPastor
 * A feature section introducing the lead pastor with portrait, headline, copy, and CTAs.
 * Follows the style from the provided design (label + large name + two buttons).
 */
const LeadPastor = ({ imageSrc = DEFAULT_IMAGE, name = 'Pastor James & Lillian Teira' }) => {
  const rootRef = useRef(null);
  const imgRef = useRef(null);
  const labelRef = useRef(null);
  const nameRef = useRef(null);
  const parasRef = useRef(null);
  const ctasRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      tl.from(imgRef.current, { y: 30, opacity: 0, scale: 1.05, duration: 0.8 }, 0)
        .from([labelRef.current, nameRef.current], { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, 0.1)
        .from(parasRef.current?.children || [], { y: 14, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.2)
        .from(ctasRef.current?.children || [], { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.35);
    }, rootRef);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={rootRef} className="bg-[#f8f7f5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="w-full">
            <div className="relative bg-white shadow-lg overflow-hidden h-[340px] md:h-[400px] lg:h-[440px]">
              <img
                ref={imgRef}
                src={imageSrc}
                alt={`Portrait of ${name}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p ref={labelRef} className="uppercase tracking-[0.2em] text-xs text-gray-500 mb-3">Meet our pastors</p>
            <h2 ref={nameRef} className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
              {name.toUpperCase()}
            </h2>
            <div ref={parasRef} className="mt-5 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
            <div ref={ctasRef} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about#pastor"
                className="inline-flex items-center gap-2 bg-[#C9A87C] text-white px-5 py-3 rounded font-semibold hover:bg-[#b39164] transition-colors"
              >
                <Info size={18} />
                <span>Learn More</span>
              </Link>
              <Link
                to="/sermons"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded font-semibold hover:bg-black/90 transition-colors"
              >
                <Headphones size={18} />
                <span>Listen to Sermons</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadPastor;


