import React, { useEffect, useRef } from 'react';
import { Users, Heart, Star, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pastoralTeam = [
  {
    name: 'Pastor John Doe',
    role: 'Senior Pastor',
    bio: 'With over 20 years of ministry experience, Pastor John leads our church with wisdom and compassion, focusing on biblical teaching and community building.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Pastor Jane Smith',
    role: 'Worship Director',
    bio: 'Jane oversees our worship ministry and helps create meaningful worship experiences each week, bringing hearts together in praise.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'Pastor Michael Johnson',
    role: 'Associate Pastor',
    bio: 'Michael focuses on discipleship and pastoral care, ensuring every member feels supported in their spiritual journey.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
  }
];

const youthLeaders = [
  {
    name: 'Sarah Williams',
    role: 'Youth Pastor',
    bio: 'Sarah is passionate about discipling the next generation and helping young people discover their purpose in Christ.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'David Brown',
    role: 'Youth Coordinator',
    bio: 'David organizes youth events and mentors young men in their faith journey and leadership development.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
  }
];

const childrenLeaders = [
  {
    name: 'Mary Thompson',
    role: "Children's Ministry Director",
    bio: 'Mary creates engaging and age-appropriate programs that help children learn about God in fun and meaningful ways.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
  },
  {
    name: 'James Wilson',
    role: "Children's Coordinator",
    bio: 'James assists with children\'s programs and ensures a safe, nurturing environment for our youngest members.',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face'
  }
];

const LeaderCard = ({ leader, index }) => (
  <div key={index} className="leader-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="relative mb-4">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-32 h-32 rounded-full mx-auto object-cover leader-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x300/C9A87C/FFFFFF?text=' + leader.name.split(' ').map(n => n[0]).join('');
        }}
      />
    </div>
    <h3 className="text-xl font-bold text-center mb-1">{leader.name}</h3>
    <p className="text-[#C9A87C] font-semibold text-center mb-3">{leader.role}</p>
    <p className="text-gray-600 text-center leading-relaxed">{leader.bio}</p>
  </div>
);

const OurLeadership = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const leaderSections = section.querySelectorAll('.leader-section');

    leaderSections.forEach((leaderSection) => {
      const leaderCards = leaderSection.querySelectorAll('.leader-card');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: leaderSection,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        leaderCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        }
      ).fromTo(
        '.leader-image',
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.8'
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Leadership</h2>
          <div className="w-24 h-1 bg-[#C9A87C] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our dedicated leadership team is committed to serving God and guiding our community with wisdom, love, and integrity.
          </p>
        </div>

        {/* Pastoral Team */}
        <div id="leadership-pastoral" className="leader-section scroll-mt-24 mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-8 h-8 text-[#C9A87C] mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Pastoral Team</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pastoralTeam.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index} />
            ))}
          </div>
        </div>

        {/* Youth Leadership */}
        <div id="leadership-youth" className="leader-section scroll-mt-24 mb-16">
          <div className="flex items-center justify-center mb-8">
            <Star className="w-8 h-8 text-[#C9A87C] mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Youth Leadership</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {youthLeaders.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index} />
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our youth leadership team is dedicated to creating an environment where young people can grow in their faith, 
              build lasting friendships, and discover their God-given talents and calling.
            </p>
          </div>
        </div>

        {/* Children's Leadership */}
        <div id="leadership-children" className="leader-section scroll-mt-24 mb-8">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-[#C9A87C] mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">Children's Leadership</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {childrenLeaders.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index} />
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our children's ministry leaders are passionate about creating a safe, fun, and nurturing environment 
              where children can learn about God's love and develop a strong foundation of faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;