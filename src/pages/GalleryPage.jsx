import React, { useState } from 'react';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸' },
    { id: 'worship', name: 'Worship Services', icon: '🙏' },
    { id: 'events', name: 'Church Events', icon: '🎉' },
    { id: 'community', name: 'Community Outreach', icon: '🤝' },
    { id: 'youth', name: 'Youth Ministry', icon: '🎯' },
    { id: 'children', name: 'Children\'s Ministry', icon: '🧒' },
    { id: 'baptisms', name: 'Baptisms', icon: '💧' },
    { id: 'celebrations', name: 'Celebrations', icon: '🎊' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
      title: 'Sunday Worship Service',
      category: 'worship',
      description: 'Our congregation gathered in praise and worship'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop',
      title: 'Youth Conference 2024',
      category: 'youth',
      description: 'Young people growing in faith together'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop',
      title: 'Children\'s Sunday School',
      category: 'children',
      description: 'Kids learning about God\'s love'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      title: 'Community Outreach',
      category: 'community',
      description: 'Serving our local community with love'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      title: 'Food Drive Event',
      category: 'events',
      description: 'Collecting donations for families in need'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop',
      title: 'Worship Team Practice',
      category: 'worship',
      description: 'Preparing hearts for Sunday worship'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop',
      title: 'Baptism Ceremony',
      category: 'baptisms',
      description: 'Celebrating new life in Christ'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
      title: 'Women\'s Ministry Retreat',
      category: 'events',
      description: 'Sisters in faith growing together'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop',
      title: 'Men\'s Fellowship Breakfast',
      category: 'events',
      description: 'Building brotherhood in Christ'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
      title: 'Marriage Enrichment Seminar',
      category: 'events',
      description: 'Strengthening marriages through God\'s word'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      title: 'Christmas Celebration',
      category: 'celebrations',
      description: 'Celebrating the birth of our Savior'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      title: 'College Ministry Gathering',
      category: 'youth',
      description: 'University students in fellowship'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      title: 'Prayer Night',
      category: 'worship',
      description: 'United in prayer and intercession'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=600&h=400&fit=crop',
      title: 'Easter Sunday Service',
      category: 'celebrations',
      description: 'Celebrating the resurrection of Jesus'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      title: 'Community Health Fair',
      category: 'community',
      description: 'Providing healthcare services to the community'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
      title: 'Vacation Bible School',
      category: 'children',
      description: 'Summer fun with Bible learning'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Church gallery moments at Kampala Community Church"
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
                Memories & Moments
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              Capturing the beautiful moments of faith, fellowship, and community that make 
              Kampala Community Church a special place to call home.
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
            <div className="text-center mb-16">
              <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Captured Moments</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Photo Gallery</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Browse through our collection of photos showcasing the vibrant life of our church community, 
                from worship services to community outreach and special celebrations.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-[#C9A87C] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-[#C9A87C] hover:bg-[#C9A87C]/10 border border-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/C9A87C/FFFFFF?text=' + image.title.replace(/\s+/g, '+');
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>

                    {/* View icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <button className="group bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Load More Photos
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;