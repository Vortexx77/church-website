import React from 'react';
import MinistryList from '../components/sections/ministries/MinistryList';
import Serve from '../components/sections/ministries/Serve';

const MinistriesPage = () => {
  const ministries = [
    {
      id: 1,
      title: 'Youth Ministry',
      description: 'A dynamic ministry for students in 6th-12th grade focused on building faith, character, and community through relevant teaching and fun activities.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop',
      schedule: 'Fridays at 6:30 PM',
      ageGroup: 'Grades 6-12',
      leader: 'Michael Chen',
      icon: '🎯',
      color: 'from-blue-400 to-indigo-500',
      anchor: 'youth-ministry'
    },
    {
      id: 2,
      title: 'Children\'s Ministry',
      description: 'Engaging and nurturing the faith of children from birth through 5th grade with age-appropriate Bible lessons, worship, and activities.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop',
      schedule: 'Sundays at 10:00 AM',
      ageGroup: 'Ages 0-11',
      leader: 'Sarah Johnson',
      icon: '🧒',
      color: 'from-pink-400 to-purple-500',
      anchor: 'childrens-ministry'
    },
    {
      id: 3,
      title: 'Marriage Ministry',
      description: 'Strengthening marriages through biblical principles, counseling, and fellowship opportunities for couples at all stages of their journey.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop',
      schedule: '2nd Friday at 7:00 PM',
      ageGroup: 'Married Couples',
      leader: 'Pastor David & Emily Wilson',
      icon: '💑',
      color: 'from-rose-400 to-pink-500',
      anchor: 'marriage-ministry'
    },
    {
      id: 4,
      title: 'Jedidiah Ladies',
      description: 'A vibrant women\'s ministry focused on spiritual growth, fellowship, and empowering women to live out their God-given purpose.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      schedule: '2nd Saturday at 9:00 AM',
      ageGroup: 'All Women',
      leader: 'Rebecca Williams',
      icon: '👩',
      color: 'from-purple-400 to-pink-500',
      anchor: 'jedidiah-ladies'
    },
    {
      id: 5,
      title: 'Men of Valour',
      description: 'Building godly men of courage and integrity through Bible study, accountability, and service projects in the community.',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=300&fit=crop',
      schedule: '1st Saturday at 8:00 AM',
      ageGroup: 'All Men',
      leader: 'Robert Johnson',
      icon: '🛡️',
      color: 'from-orange-400 to-red-500',
      anchor: 'men-of-valour'
    },
    {
      id: 6,
      title: 'Warrior Women Ministry',
      description: 'Empowering women to be spiritual warriors through prayer, worship, and biblical teaching, standing strong in faith.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      schedule: 'Thursdays at 6:00 PM',
      ageGroup: 'Women 18+',
      leader: 'Pastor Grace Nakato',
      icon: '⚔️',
      color: 'from-indigo-400 to-purple-500',
      anchor: 'warrior-women-ministry'
    },
    {
      id: 7,
      title: 'Team I AM (Music Ministry)',
      description: 'A contemporary music ministry that leads worship through modern songs, creating an atmosphere of praise and worship.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      schedule: 'Rehearsals: Thursdays at 6:30 PM',
      ageGroup: 'Audition Required',
      leader: 'Daniel Park',
      icon: '🎤',
      color: 'from-purple-400 to-indigo-500',
      anchor: 'team-i-am-music-ministry'
    },
    {
      id: 8,
      title: 'KCC Music/Worship',
      description: 'Traditional and contemporary worship ministry leading the congregation in heartfelt worship and praise to God.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop',
      schedule: 'Rehearsals: Tuesdays at 7:00 PM',
      ageGroup: 'All Ages',
      leader: 'Worship Team Leaders',
      icon: '🎵',
      color: 'from-teal-400 to-blue-500',
      anchor: 'kcc-music-worship'
    },
    {
      id: 9,
      title: 'CLM (College Students)',
      description: 'College Life Ministry - A community for university students to grow in faith while navigating academic and social challenges.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      schedule: 'Tuesdays at 7:00 PM',
      ageGroup: 'College Students',
      leader: 'Pastor Mark Thompson',
      icon: '🎓',
      color: 'from-green-400 to-teal-500',
      anchor: 'clm-college-students'
    },
    {
      id: 10,
      title: 'Harvesters (Singles)',
      description: 'A ministry for single adults focused on personal growth, community building, and discovering God\'s purpose for their lives.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
      schedule: 'Sundays at 2:00 PM',
      ageGroup: 'Single Adults',
      leader: 'Lisa Thompson',
      icon: '🌾',
      color: 'from-amber-400 to-orange-500',
      anchor: 'harvesters-singles'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Community gathering at Kampala Community Church"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
          {/* Decorative overlay pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rounded-full"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#C9A87C]/20 backdrop-blur-sm border border-[#C9A87C]/30 rounded-full text-[#C9A87C] font-semibold text-sm uppercase tracking-wider mb-4">
                Get Involved
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Ministries
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              Discover opportunities to connect, grow, and serve within our church community.
              Find your place to make a difference and grow in faith together.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 -left-32 w-64 h-64 bg-[#C9A87C]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-96 -right-32 w-96 h-96 bg-[#C9A87C]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-[#C9A87C]/4 rounded-full blur-3xl"></div>
        </div>

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Introduction */}
            <div className="text-center mb-20">
              <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Connect & Serve</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Ministry Opportunities</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                Every person has unique gifts and talents that God wants to use for His glory. 
                Explore our ministries and find where you can make a meaningful impact.
              </p>
              
              {/* Ministry Navigation */}
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {ministries.map((ministry) => (
                  <a
                    key={ministry.id}
                    href={`#${ministry.anchor}`}
                    className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-600 hover:text-[#C9A87C] hover:bg-[#C9A87C]/10 transition-all duration-300 border border-gray-200/50 hover:border-[#C9A87C]/30"
                  >
                    <span className="mr-2">{ministry.icon}</span>
                    {ministry.title}
                  </a>
                ))}
              </div>
            </div>

            <MinistryList ministries={ministries} />

            <Serve />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistriesPage;