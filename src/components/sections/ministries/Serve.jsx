import React from 'react';

const Serve = () => {
  const servingAreas = [
    {
      title: 'Hospitality',
      description: 'Welcome guests and create a warm, inviting atmosphere',
      icon: '🤗',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Teaching',
      description: 'Share God\'s Word with children, youth, or adults',
      icon: '📚',
      color: 'from-green-400 to-teal-500'
    },
    {
      title: 'Music & Arts',
      description: 'Lead worship through music, drama, or visual arts',
      icon: '🎵',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Technical',
      description: 'Support services with sound, lighting, or media',
      icon: '🎛️',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Administration',
      description: 'Help with organization, planning, and coordination',
      icon: '📋',
      color: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'Outreach',
      description: 'Serve the community and share God\'s love',
      icon: '🌍',
      color: 'from-emerald-400 to-green-500'
    }
  ];

  return (
    <section className="relative">
      <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A87C]/5 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9A87C]/8 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="relative text-center mb-12">
          <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Interested in Serving?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            We believe everyone has been given unique gifts to serve the body of Christ. 
            Whether you're interested in greeting, teaching, singing, or helping behind the scenes, 
            we'd love to help you find your place to serve and make a meaningful impact.
          </p>
        </div>

        {/* Serving Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servingAreas.map((area, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C9A87C] transition-colors duration-300">{area.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#C9A87C]/10 via-white to-[#C9A87C]/10 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Take the first step in your serving journey. We'll help you discover your gifts, 
              connect with the right ministry, and provide the training and support you need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Volunteer Opportunities
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#C9A87C] rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">volunteer@kcc.org</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#C9A87C] rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-medium">+256 123 456 789</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serve;
