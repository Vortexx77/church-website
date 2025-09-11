
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  useLayoutEffect(() => {
    const heroTimeline = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 1 },
    });

    heroTimeline
      .from('.hero-bg', { scale: 1.2, opacity: 0, duration: 1.5 })
      .from('.hero-overlay', { opacity: 0, duration: 1.5 }, '-=1.5')
      .from('.hero-title', { y: 50, opacity: 0, stagger: 0.2 })
      .from('.hero-subtitle', { y: 50, opacity: 0 }, '-=0.5')
      .from('.hero-cta', { y: 50, opacity: 0 }, '-=0.5')
      .from('.scroll-indicator', { y: 20, opacity: 0, repeat: -1, yoyo: true }, '-=0.5');

    const sectionIntroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-intro',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      defaults: { ease: 'power3.out', duration: 1 },
    });

    sectionIntroTimeline
      .from('.section-intro-subtitle', { y: 30, opacity: 0 })
      .from('.section-intro-title', { y: 40, opacity: 0 }, '-=0.8')
      .from('.section-intro-divider', { width: 0 }, '-=0.8')
      .from('.section-intro-text', { y: 50, opacity: 0 }, '-=0.6')
      .from('.cell-group-nav-item', { y: 30, opacity: 0, stagger: 0.1 }, '-=0.5');

    gsap.utils.toArray('.cell-group-card').forEach((card) => {
      const cardTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      cardTimeline
        .from(card, { y: 60, opacity: 0, scale: 0.95 })
        .from(card.querySelector('.card-image'), { scale: 1.1, duration: 1.2 }, '-=0.8')
        .from(card.querySelector('.card-icon'), { scale: 0, rotate: '180deg', duration: 0.6 }, '-=0.8')
        .from(card.querySelectorAll('.card-detail'), { x: -30, opacity: 0, stagger: 0.15 }, '-=0.5')
        .from(card.querySelector('.card-activities'), { y: 30, opacity: 0 }, '-=0.6')
        .from(card.querySelector('.card-join-btn'), { y: 20, opacity: 0 }, '-=0.4');
    });

    return () => {
      heroTimeline.kill();
      sectionIntroTimeline.kill();
      gsap.utils.toArray('.cell-group-card').forEach((card) => {
        const timeline = ScrollTrigger.getById(card);
        if (timeline) {
          timeline.kill();
        }
      });
    };
  }, []);
};

export default useAnimation;
