import React, { useEffect, useRef } from 'react';
import { Church, Users, BookOpen, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const historyTimeline = [
  {
    year: '2005',
    title: 'Humble Beginnings',
    description: 'Kampala Community Church was founded with a small group of believers gathering in a rented space, united by a vision for authentic Christian community.',
    icon: <Church className="w-6 h-6" />
  },
  {
    year: '2010',
    title: 'First Permanent Home',
    description: 'After years of meeting in temporary locations, we were blessed to acquire our first permanent worship center in the heart of Kampala.',
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    year: '2015',
    title: 'Community Impact',
    description: 'Launched our community outreach programs, including food drives, education initiatives, and healthcare services for the underprivileged.',
    icon: <Heart className="w-6 h-6" />
  },
  {
    year: '2020',
    title: 'Digital Ministry',
    description: 'Expanded our reach through online services and digital discipleship, connecting with believers across Uganda and beyond.',
    icon: <Users className="w-6 h-6" />
  }
];

const OurHistory = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timelineItems = timelineRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      timelineItems,
      {
        opacity: 0,
        y: 50,
        x: (i) => (i % 2 === 0 ? 50 : -50),
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
      }
    ).fromTo(
      '.timeline-dot',
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        stagger: 0.3,
      },
      '-=0.7'
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">A Legacy of Faith & Community</h2>
          <div className="w-24 h-1 bg-[#C9A87C] mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A87C] to-[#8B6B4A]"></div>
          
          {/* Timeline items */}
          <div ref={timelineRef} className="space-y-12 md:space-y-16">
            {historyTimeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-1/2 px-6 py-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="flex items-center md:flex-col mb-2 md:mb-0">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A87C] text-white mr-4 md:mr-0 md:mb-2">
                      {item.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <span className="block text-[#C9A87C] font-medium mb-2">{item.year}</span>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="timeline-dot hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[#C9A87C] border-4 border-white shadow-md absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Empty div for spacing on alternating sides */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Become Part of Our Story</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us as we continue to write the next chapter of what God is doing in and through our community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
