import React, { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const mission = missionRef.current;
    const vision = visionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      [mission, vision],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
      }
    )
      .fromTo(
        [mission.querySelector('.icon-pop'), vision.querySelector('.icon-pop')],
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.3,
        },
        '-=0.5'
      )
      .fromTo(
        [
          mission.querySelectorAll('p, .space-y-3 > div'),
          vision.querySelectorAll('p, ul > li'),
        ],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.3'
      );
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Mission & Vision</h2>
          <div className="w-24 h-1 bg-[#C9A87C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <div ref={missionRef} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="icon-pop flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A87C] text-white mr-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At Kampala Community Church, our mission is to glorify God by making disciples of Jesus Christ 
              who love God, love others, and serve the world. We are committed to sharing the Gospel, 
              nurturing spiritual growth, and demonstrating God's love through acts of service and compassion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-[#C9A87C] mr-3" />
                <span className="text-gray-700">Love God with all our hearts</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-[#C9A87C] mr-3" />
                <span className="text-gray-700">Love others as ourselves</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 text-[#C9A87C] mr-3" />
                <span className="text-gray-700">Serve the world in Jesus' name</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="icon-pop flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A87C] text-white mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              To be a thriving, Christ-centered community that transforms lives and impacts our city and beyond 
              through authentic relationships, passionate worship, and sacrificial service.
            </p>
            <div className="bg-[#f3eee6] rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">We envision a church where:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Every person experiences God's love and grace</li>
                <li>• Believers grow in spiritual maturity</li>
                <li>• Community needs are met with compassion</li>
                <li>• The Gospel reaches every corner of our city</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Together, our mission and vision guide every decision we make and every ministry we pursue, 
            ensuring that Christ remains at the center of all we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

