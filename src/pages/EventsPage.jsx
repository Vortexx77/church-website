import React, { useState } from 'react';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Events', icon: '📅' },
    { id: 'service', name: 'Worship Services', icon: '🙏' },
    { id: 'study', name: 'Bible Studies', icon: '📖' },
    { id: 'youth', name: 'Youth Events', icon: '🎯' },
    { id: 'children', name: 'Children\'s Events', icon: '🧒' },
    { id: 'mission', name: 'Outreach & Missions', icon: '🤝' },
    { id: 'fellowship', name: 'Fellowship', icon: '☕' },
    { id: 'special', name: 'Special Events', icon: '⭐' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: '2024-12-22',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for our weekly worship service with inspiring music, heartfelt prayers, and a powerful message from God\'s Word.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      category: 'service',
      speaker: 'Pastor John Doe',
      capacity: 500,
      registered: 0,
      featured: true
    },
    {
      id: 2,
      title: 'Christmas Eve Candlelight Service',
      date: '2024-12-24',
      time: '7:00 PM - 8:30 PM',
      location: 'Main Sanctuary',
      description: 'A beautiful candlelight service celebrating the birth of our Savior with carols, scripture readings, and communion.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      category: 'special',
      speaker: 'Pastor John Doe',
      capacity: 600,
      registered: 245,
      featured: true
    },
    {
      id: 3,
      title: 'New Year Prayer & Fasting',
      date: '2025-01-01',
      time: '6:00 AM - 12:00 PM',
      location: 'Prayer Chapel',
      description: 'Start the new year with prayer and fasting. Join us for a morning of seeking God\'s direction and blessing.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      category: 'special',
      speaker: 'Prayer Team',
      capacity: 100,
      registered: 67,
      featured: false
    },
    {
      id: 4,
      title: 'Youth Winter Retreat',
      date: '2025-01-10',
      endDate: '2025-01-12',
      time: '9:00 AM',
      endTime: '4:00 PM',
      location: 'Mountain View Retreat Center',
      description: 'Three days of worship, teaching, and fellowship for youth ages 13-18. Theme: "Called to Greatness"',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop',
      category: 'youth',
      speaker: 'Youth Pastor Michael',
      capacity: 80,
      registered: 52,
      registrationRequired: true,
      cost: '$150',
      featured: true
    },
    {
      id: 5,
      title: 'Community Health Fair',
      date: '2025-01-18',
      time: '8:00 AM - 2:00 PM',
      location: 'Church Parking Lot',
      description: 'Free health screenings, medical consultations, and wellness education for our community.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      category: 'mission',
      speaker: 'Medical Team',
      capacity: 200,
      registered: 0,
      volunteersNeeded: true,
      featured: false
    },
    {
      id: 6,
      title: 'Marriage Enrichment Workshop',
      date: '2025-01-25',
      time: '9:00 AM - 4:00 PM',
      location: 'Fellowship Hall',
      description: 'A day-long workshop for married couples to strengthen their relationship through biblical principles.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
      category: 'fellowship',
      speaker: 'Pastor David & Emily Wilson',
      capacity: 50,
      registered: 28,
      cost: '$75 per couple',
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'Thanksgiving Service',
      date: '2024-11-28',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'A special service of gratitude and thanksgiving for God\'s blessings throughout the year.',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&h=400&fit=crop',
      category: 'special',
      speaker: 'Pastor John Doe',
      attendance: 450
    },
    {
      id: 8,
      title: 'Children\'s Harvest Festival',
      date: '2024-10-31',
      time: '6:00 PM - 8:00 PM',
      location: 'Church Campus',
      description: 'A fun and safe alternative to Halloween with games, treats, and Bible stories for children.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
      category: 'children',
      speaker: 'Children\'s Ministry Team',
      attendance: 120
    },
    {
      id: 9,
      title: 'Men\'s Conference 2024',
      date: '2024-09-14',
      endDate: '2024-09-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Sanctuary',
      description: 'Two days of powerful teaching and fellowship focused on biblical manhood and leadership.',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop',
      category: 'fellowship',
      speaker: 'Guest Speaker: Dr. James Wilson',
      attendance: 180
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const filteredEvents = selectedCategory === 'all' 
    ? currentEvents 
    : currentEvents.filter(event => event.category === selectedCategory);

  const featuredEvents = upcomingEvents.filter(event => event.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Church events at Kampala Community Church"
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
                Join Us
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Church Events
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              Discover opportunities for worship, fellowship, growth, and service. 
              Join us for meaningful events that strengthen our faith and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button 
                onClick={() => setActiveTab('upcoming')}
                className="group bg-[#C9A87C] hover:bg-[#b89669] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  View Upcoming Events
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </button>
              <button className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  Register for Event
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </span>
              </button> */}
            </div>
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
            {/* Featured Events Section */}
            {activeTab === 'upcoming' && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Don't Miss</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Events</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredEvents.map((event) => (
                    <div
                      key={event.id}
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4 bg-[#C9A87C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                        
                        {/* Date badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-xl text-center">
                          <div className="text-xs font-semibold text-[#C9A87C]">
                            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                          </div>
                          <div className="text-lg font-bold">
                            {new Date(event.date).getDate()}
                          </div>
                        </div>
                        
                        {/* Event info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                          <div className="flex items-center text-sm text-gray-200 mb-2">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-200">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-[#C9A87C] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#C9A87C]'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Upcoming Events
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-[#C9A87C] text-white shadow-md'
                      : 'text-gray-600 hover:text-[#C9A87C]'
                  }`}
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Past Events
                  </span>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-[#C9A87C] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-[#C9A87C] hover:bg-[#C9A87C]/10 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Events List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Date badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-xl text-center">
                      <div className="text-xs font-semibold text-[#C9A87C]">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </div>
                      <div className="text-lg font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                    </div>

                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {event.registrationRequired && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Registration Required
                        </span>
                      )}
                      {event.volunteersNeeded && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Volunteers Needed
                        </span>
                      )}
                      {event.cost && (
                        <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {event.cost}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C9A87C] transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(event.date)}
                        {event.endDate && ` - ${formatDate(event.endDate)}`}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.time}
                        {event.endTime && ` - ${event.endTime}`}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                      </div>
                      {event.speaker && (
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {event.speaker}
                        </div>
                      )}
                    </div>

                    {/* Registration info for upcoming events */}
                    {activeTab === 'upcoming' && event.capacity && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Registration</span>
                          <span>{event.registered}/{event.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#C9A87C] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Attendance info for past events */}
                    {activeTab === 'past' && event.attendance && (
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-2 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {event.attendance} attendees
                        </div>
                      </div>
                    )}

                    <button className="w-full bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                      {activeTab === 'upcoming' ? 'Learn More & Register' : 'View Event Details'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
          <div className="relative max-w-4xl max-h-full bg-white rounded-3xl overflow-hidden overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
                <p className="text-gray-200">{formatDate(selectedEvent.date)} • {selectedEvent.time}</p>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedEvent.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Event Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(selectedEvent.date)}
                      {selectedEvent.endDate && ` - ${formatDate(selectedEvent.endDate)}`}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedEvent.time}
                      {selectedEvent.endTime && ` - ${selectedEvent.endTime}`}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {selectedEvent.location}
                    </div>
                    {selectedEvent.speaker && (
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {selectedEvent.speaker}
                      </div>
                    )}
                    {selectedEvent.cost && (
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-3 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        {selectedEvent.cost}
                      </div>
                    )}
                  </div>
                </div>
                
                {activeTab === 'upcoming' && selectedEvent.capacity && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Registration Status</h4>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Registered</span>
                        <span>{selectedEvent.registered}/{selectedEvent.capacity}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-[#C9A87C] h-3 rounded-full transition-all duration-300"
                          style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {selectedEvent.capacity - selectedEvent.registered} spots remaining
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {activeTab === 'upcoming' && (
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      Register Now
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </span>
                  </button>
                  <button className="flex-1 bg-transparent border-2 border-[#C9A87C] text-[#C9A87C] hover:bg-[#C9A87C] hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      Add to Calendar
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;