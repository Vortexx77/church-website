import React, { useState } from 'react';

const SermonsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSermon, setSelectedSermon] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = [
    { id: 'all', name: 'All Sermons', icon: '📖' },
    { id: 'series', name: 'Sermon Series', icon: '📚' },
    { id: 'recent', name: 'Recent Messages', icon: '🆕' },
    { id: 'popular', name: 'Most Popular', icon: '⭐' },
    { id: 'topics', name: 'By Topic', icon: '🏷️' }
  ];

  const sermonSeries = [
    {
      id: 1,
      title: 'Living by Faith',
      description: 'A powerful series exploring what it means to walk by faith in every area of life',
      sermonCount: 8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      startDate: '2024-10-01',
      endDate: '2024-11-26',
      featured: true
    },
    {
      id: 2,
      title: 'Parables of Jesus',
      description: 'Discovering timeless truths through the stories Jesus told',
      sermonCount: 12,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
      startDate: '2024-07-01',
      endDate: '2024-09-22',
      featured: true
    },
    {
      id: 3,
      title: 'Family Matters',
      description: 'Biblical principles for building strong, God-honoring families',
      sermonCount: 6,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
      startDate: '2024-05-01',
      endDate: '2024-06-15',
      featured: false
    }
  ];

  const sermons = [
    {
      id: 1,
      title: 'The Power of Unwavering Faith',
      preacher: 'Pastor John Doe',
      date: '2024-12-15',
      series: 'Living by Faith',
      seriesId: 1,
      scripture: 'Hebrews 11:1-6',
      description: 'In this powerful message, we explore what it means to live by faith and how unwavering faith can move mountains in our lives and transform our circumstances.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      duration: '42:15',
      views: 1250,
      tags: ['faith', 'encouragement', 'spiritual growth'],
      featured: true,
      popular: true
    },
    {
      id: 2,
      title: 'The Prodigal Son Returns Home',
      preacher: 'Pastor Jane Smith',
      date: '2024-12-08',
      series: 'Parables of Jesus',
      seriesId: 2,
      scripture: 'Luke 15:11-32',
      description: 'A fresh and powerful look at the parable of the prodigal son, revealing the Father\'s unconditional love and the joy of redemption.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
      duration: '38:22',
      views: 980,
      tags: ['forgiveness', 'grace', 'redemption'],
      featured: true,
      popular: true
    },
    {
      id: 3,
      title: 'Building Families That Last',
      preacher: 'Pastor Michael Johnson',
      date: '2024-12-01',
      series: 'Family Matters',
      seriesId: 3,
      scripture: 'Joshua 24:14-15',
      description: 'Discover biblical principles for building strong, resilient families that honor God and stand the test of time in today\'s challenging world.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
      duration: '45:10',
      views: 756,
      tags: ['family', 'relationships', 'marriage'],
      featured: false,
      popular: false
    },
    {
      id: 4,
      title: 'Overcoming Fear with Faith',
      preacher: 'Pastor John Doe',
      date: '2024-11-24',
      series: 'Living by Faith',
      seriesId: 1,
      scripture: '2 Timothy 1:7',
      description: 'Learn how to overcome fear and anxiety by walking in the power, love, and sound mind that God has given us through His Spirit.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      duration: '40:33',
      views: 1100,
      tags: ['faith', 'encouragement', 'fear'],
      featured: false,
      popular: true
    },
    {
      id: 5,
      title: 'The Good Samaritan\'s Heart',
      preacher: 'Pastor Jane Smith',
      date: '2024-11-17',
      series: 'Parables of Jesus',
      seriesId: 2,
      scripture: 'Luke 10:25-37',
      description: 'Learning to love our neighbors as ourselves through the transformative story of the Good Samaritan and practical ways to show compassion.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
      duration: '36:45',
      views: 820,
      tags: ['love', 'service', 'compassion'],
      featured: false,
      popular: false
    },
    {
      id: 6,
      title: 'The Full Armor of God',
      preacher: 'Pastor Michael Johnson',
      date: '2024-11-10',
      series: 'Spiritual Warfare',
      seriesId: 4,
      scripture: 'Ephesians 6:10-18',
      description: 'Understanding and applying the full armor of God in our daily spiritual battles. Learn to stand firm against the enemy\'s schemes.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      audioUrl: '#',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
      duration: '48:12',
      views: 1350,
      tags: ['spiritual warfare', 'faith', 'victory'],
      featured: false,
      popular: true
    }
  ];

  const getFilteredSermons = () => {
    switch (activeFilter) {
      case 'recent':
        return sermons.slice(0, 4);
      case 'popular':
        return sermons.filter(sermon => sermon.popular);
      case 'series':
        return sermons; // Will show series view
      default:
        return sermons;
    }
  };

  const filteredSermons = getFilteredSermons();
  const featuredSermons = sermons.filter(sermon => sermon.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Sermon preaching at Kampala Community Church"
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
                God's Word
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Sermons & Messages
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              Discover life-changing messages from God's Word. Watch, listen, and grow in your faith 
              through powerful biblical teaching and practical application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveFilter('recent')}
                className="group bg-[#C9A87C] hover:bg-[#b89669] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  Watch Latest Sermon
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a3 3 0 016 0v2M7 16v4a1 1 0 001 1h8a1 1 0 001-1v-4" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={() => setActiveFilter('series')}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center">
                  Browse Series
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                  </svg>
                </span>
              </button>
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
            {/* Featured Sermons Section */}
            {activeFilter === 'all' && (
              <div className="mb-20">
                <div className="text-center mb-12">
                  <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Featured Messages</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Latest Sermons</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredSermons.map((sermon) => (
                    <div
                      key={sermon.id}
                      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                      onClick={() => setSelectedSermon(sermon)}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={sermon.thumbnail}
                          alt={sermon.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Duration */}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {sermon.duration}
                        </div>
                        
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4 bg-[#C9A87C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#C9A87C] font-semibold">{sermon.series}</span>
                          <span className="text-sm text-gray-500">{formatDate(sermon.date)}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C9A87C] transition-colors duration-300">
                          {sermon.title}
                        </h3>
                        <p className="text-gray-600 mb-3 leading-relaxed line-clamp-2">{sermon.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs font-bold">
                                {sermon.preacher.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{sermon.preacher}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {sermon.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.id
                      ? 'bg-[#C9A87C] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-[#C9A87C] hover:bg-[#C9A87C]/10 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeFilter === 'all' && 'All Sermons'}
                {activeFilter === 'series' && 'Sermon Series'}
                {activeFilter === 'recent' && 'Recent Messages'}
                {activeFilter === 'popular' && 'Most Popular'}
                {activeFilter === 'topics' && 'Browse by Topic'}
              </h2>
              
              <div className="flex bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#C9A87C] text-white' : 'text-gray-600'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#C9A87C] text-white' : 'text-gray-600'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sermon Series View */}
            {activeFilter === 'series' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sermonSeries.map((series) => (
                  <div
                    key={series.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={series.image}
                        alt={series.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {series.featured && (
                        <div className="absolute top-4 left-4 bg-[#C9A87C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured Series
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {series.sermonCount} messages
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C9A87C] transition-colors duration-300">
                        {series.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{series.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{formatDate(series.startDate)} - {formatDate(series.endDate)}</span>
                      </div>

                      <button className="w-full bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                        View Series
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sermons Grid/List View */}
            {activeFilter !== 'series' && (
              <div className={viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }>
                {filteredSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    onClick={() => setSelectedSermon(sermon)}
                  >
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-64 aspect-video' : 'aspect-video'
                    }`}>
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {sermon.duration}
                      </div>
                    </div>

                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#C9A87C] font-semibold">{sermon.series}</span>
                        <span className="text-sm text-gray-500">{formatDate(sermon.date)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#C9A87C] transition-colors duration-300">
                        {sermon.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed text-sm">{sermon.scripture}</p>
                      {viewMode === 'list' && (
                        <p className="text-gray-600 mb-4 leading-relaxed">{sermon.description}</p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-[#C9A87C] rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">
                              {sermon.preacher.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-sm text-gray-700">{sermon.preacher}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {sermon.views}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="group bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Load More Sermons
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Podcast Section */}
            <section className="mt-20">
              <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9A87C]/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C9A87C]/8 rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative text-center">
                  <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Listen Anywhere</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Subscribe to Our Podcast</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
                  <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                    Never miss a message! Subscribe to our podcast and listen to sermons on your favorite platform. 
                    Perfect for your commute, workout, or quiet time with God.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="group bg-black text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Apple Podcasts
                      </span>
                    </button>
                    <button className="group bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Spotify
                      </span>
                    </button>
                    <button className="group bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Google Podcasts
                      </span>
                    </button>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#C9A87C] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium">sermons@kcc.org</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-[#C9A87C] rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium">Request Prayer</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Sermon Detail Modal */}
      {selectedSermon && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedSermon(null)}>
          <div className="relative max-w-4xl max-h-full bg-white rounded-3xl overflow-hidden overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedSermon(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-video">
              <img
                src={selectedSermon.thumbnail}
                alt={selectedSermon.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{selectedSermon.title}</h2>
                <p className="text-gray-200">{selectedSermon.preacher} • {formatDate(selectedSermon.date)}</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-[#C9A87C]/10 text-[#C9A87C] rounded-full font-semibold">
                  {selectedSermon.series}
                </span>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedSermon.views} views
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedSermon.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Scripture Reference</h4>
                  <p className="text-[#C9A87C] font-semibold">{selectedSermon.scripture}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSermon.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <span className="flex items-center justify-center">
                    Watch Video
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a3 3 0 016 0v2M7 16v4a1 1 0 001 1h8a1 1 0 001-1v-4" />
                    </svg>
                  </span>
                </button>
                <button className="flex-1 bg-transparent border-2 border-[#C9A87C] text-[#C9A87C] hover:bg-[#C9A87C] hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    Listen to Audio
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h6a3 3 0 000-6H9z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SermonsPage;