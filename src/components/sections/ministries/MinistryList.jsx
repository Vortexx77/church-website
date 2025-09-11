import React from 'react';

const MinistryList = ({ ministries }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {ministries.map((ministry) => (
        <div key={ministry.id} id={ministry.anchor} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative scroll-mt-32">
          {/* Ministry Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={ministry.image}
              alt={ministry.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/C9A87C/FFFFFF?text=' + ministry.title.replace(/\s+/g, '+');
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {/* Ministry Icon */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              {ministry.icon}
            </div>
            
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#C9A87C] transition-colors duration-300">{ministry.title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{ministry.description}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#C9A87C]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-[#C9A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{ministry.schedule}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#C9A87C]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-[#C9A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{ministry.ageGroup}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#C9A87C]/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-[#C9A87C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{ministry.leader}</span>
              </div>
            </div>

            <button className="group/btn w-full bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
              <span className="flex items-center justify-center">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Decorative corner element */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#C9A87C]/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default MinistryList;
