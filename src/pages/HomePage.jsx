import React, { useEffect, useRef } from 'react';
import Hero from '../components/sections/home/Hero';
import QuickLinks from '../components/sections/home/QuickLinks';
import LatestSermon from '../components/sections/home/LatestSermon';
import UpcomingEvents from '../components/sections/home/UpcomingEvents';
import LeadPastor from '../components/sections/home/LeadPastor';
import BlogTeaser from '../components/sections/home/BlogTeaser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' });

      const sections = Array.from(rootRef.current.querySelectorAll('section'));
      sections.forEach((sectionEl) => {
        gsap.from(sectionEl, {
          y: 18,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
            once: false,
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-hidden">
      <Hero />
      <div className="h-24 md:h-28" />
      <QuickLinks />
      <LeadPastor />
      <LatestSermon />
      <BlogTeaser />
      <UpcomingEvents />
    </div>
  );
};

export default HomePage;
