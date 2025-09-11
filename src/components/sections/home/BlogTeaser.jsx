import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  { id: 1, title: 'Hope for the Hopeless', readTime: '1 min' },
  { id: 2, title: 'Supporting Our Missionaries', readTime: '1 min' },
  { id: 3, title: 'Fellowship Groups', readTime: '2 min' },
];

const BlogTeaser = ({ items = posts, imageSrc = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop' }) => {
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

      tl.from('[data-blog-label]', { y: 10, opacity: 0, duration: 0.5 })
        .from('[data-blog-item]', { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 })
        .from('[data-blog-cta]', { y: 12, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-blog-image]', { x: 20, opacity: 0, duration: 0.7 }, 0.1);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-[#2f2f2f] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: list */}
          <div>
            <p data-blog-label className="uppercase tracking-[0.25em] text-[11px] text-gray-300 mb-6">On the blog</p>
            <ul>
              {items.map((p, idx) => (
                <li key={p.id} data-blog-item className="py-4">
                  <Link to={`/blog/${p.id}`} className="group block">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-xl font-extrabold tracking-wide group-hover:text-[#C9A87C] transition-colors">{p.title.toUpperCase()}</h4>
                      <span className="text-xs text-gray-400">{p.readTime}</span>
                    </div>
                    <div className="mt-3 h-px w-full bg-white/20" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link data-blog-cta to="/blog" className="inline-block bg-[#C9A87C] text-black font-semibold text-xs tracking-wide px-4 py-2">
                View All Posts
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="justify-self-center md:justify-self-end">
            <div data-blog-image className="w-[360px] md:w-[420px] lg:w-[460px] aspect-square overflow-hidden">
              <img src={imageSrc} alt="Blog preview" className="h-full w-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;



