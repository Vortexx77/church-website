import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactCategories = [
    { id: 'general', name: 'General Inquiry', icon: '💬' },
    { id: 'prayer', name: 'Prayer Request', icon: '🙏' },
    { id: 'pastoral', name: 'Pastoral Care', icon: '❤️' },
    { id: 'ministry', name: 'Ministry Involvement', icon: '🤝' },
    { id: 'events', name: 'Events & Programs', icon: '📅' },
    { id: 'technical', name: 'Website/Technical', icon: '💻' }
  ];

  const contactMethods = [
    {
      title: 'Visit Us',
      description: 'Join us for worship and fellowship',
      icon: '📍',
      details: [
        'Kampala Community Church',
        '123 Church Street',
        'Kampala, Uganda',
        'Sunday Services: 8:30 AM & 10:30 AM'
      ],
      action: 'Get Directions'
    },
    {
      title: 'Call Us',
      description: 'Speak with our church office',
      icon: '📞',
      details: [
        'Main Office: +256 123 456 789',
        'Prayer Line: +256 123 456 790',
        'Emergency: +256 123 456 791',
        'Office Hours: Mon-Fri 9AM-5PM'
      ],
      action: 'Call Now'
    },
    {
      title: 'Email Us',
      description: 'Send us a message anytime',
      icon: '✉️',
      details: [
        'General: info@kcc.org',
        'Pastor: pastor@kcc.org',
        'Prayer: prayer@kcc.org',
        'Events: events@kcc.org'
      ],
      action: 'Send Email'
    },
    {
      title: 'Follow Us',
      description: 'Stay connected on social media',
      icon: '📱',
      details: [
        'Facebook: @KampalaCommunityChurch',
        'Instagram: @kcc_kampala',
        'YouTube: KCC Kampala',
        'Twitter: @kcc_kampala'
      ],
      action: 'Follow Us'
    }
  ];

  const staffMembers = [
    {
      name: 'Pastor John Doe',
      role: 'Senior Pastor',
      email: 'john@kcc.org',
      phone: '+256 123 456 792',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      specialties: ['Pastoral Care', 'Teaching', 'Leadership']
    },
    {
      name: 'Pastor Jane Smith',
      role: 'Associate Pastor',
      email: 'jane@kcc.org',
      phone: '+256 123 456 793',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      specialties: ['Worship', 'Women\'s Ministry', 'Counseling']
    },
    {
      name: 'Michael Johnson',
      role: 'Youth Pastor',
      email: 'michael@kcc.org',
      phone: '+256 123 456 794',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      specialties: ['Youth Ministry', 'Discipleship', 'Outreach']
    },
    {
      name: 'Sarah Williams',
      role: 'Children\'s Director',
      email: 'sarah@kcc.org',
      phone: '+256 123 456 795',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      specialties: ['Children\'s Ministry', 'Education', 'Family Programs']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      category: 'general'
    });
    setIsSubmitting(false);
    
    // Show success message (you would implement this)
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Contact Kampala Community Church"
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
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              We'd love to hear from you! Whether you have questions, need prayer, 
              or want to get involved, we're here to help and connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#C9A87C] hover:bg-[#b89669] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  Send Us a Message
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
            {/* Contact Methods Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Ways to Connect</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How to Reach Us</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {method.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-700 text-center">{detail}</p>
                      ))}
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                      {method.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form and Info */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    We're here to help and answer any questions you may have.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {contactCategories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                          className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            formData.category === category.id
                              ? 'bg-[#C9A87C] text-white shadow-lg'
                              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="block mb-1">{category.icon}</span>
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A87C] focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A87C] focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A87C] focus:border-transparent transition-all duration-300"
                        placeholder="+256 123 456 789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A87C] focus:border-transparent transition-all duration-300"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A87C] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Please share your message, question, or prayer request..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#C9A87C] to-[#b89669] hover:from-[#b89669] hover:to-[#8B6B4A] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </button>
                </form>
              </div>

              {/* Staff Directory */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Staff</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our pastoral team is here to serve you. Feel free to reach out directly 
                    to any of our staff members for specific needs or questions.
                  </p>
                </div>

                <div className="space-y-6">
                  {staffMembers.map((staff, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={staff.image}
                          alt={staff.name}
                          className="w-16 h-16 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/C9A87C/FFFFFF?text=' + staff.name.split(' ').map(n => n[0]).join('');
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{staff.name}</h3>
                          <p className="text-[#C9A87C] font-semibold mb-2">{staff.role}</p>
                          
                          <div className="space-y-1 mb-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              {staff.email}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {staff.phone}
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {staff.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-[#C9A87C]/10 text-[#C9A87C] rounded-full text-xs font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map and Location */}
            <section className="mb-20">
              <div className="text-center mb-12">
                <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Visit Our Campus</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Come As You Are</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We'd love to welcome you to our church family! Our campus is located in the heart of Kampala, 
                    easily accessible by public transport and with ample parking available.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">123 Church Street, Kampala, Uganda</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Service Times</h4>
                        <p className="text-gray-600">Sunday: 8:30 AM & 10:30 AM</p>
                        <p className="text-gray-600">Wednesday: 7:00 PM (Bible Study)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Facilities</h4>
                        <p className="text-gray-600">Parking available, wheelchair accessible, children's area</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps integration would go here</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;