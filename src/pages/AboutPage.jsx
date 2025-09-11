import React, { useEffect, useRef } from "react";
import OurMission from "../components/sections/about/OurMission";
import OurHistory from "../components/sections/about/OurHistory";
import OurBeliefs from "../components/sections/about/OurBeliefs";
import OurLeadership from "../components/sections/about/OurLeadership";
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const AboutPage = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      hero,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        title,
        { text: '' },
        {
          text: 'Our Story of Faith, Hope, and Community',
          duration: 2,
          ease: 'power1.inOut',
        }
      )
      .fromTo(
        [subtitle, cta],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=1.5'
      );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Worship service at Kampala Community Church"
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
            <div ref={ctaRef} className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#C9A87C]/20 backdrop-blur-sm border border-[#C9A87C]/30 rounded-full text-[#C9A87C] font-semibold text-sm uppercase tracking-wider mb-4">
                About Our Church
              </span>
            </div>
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Our Story of Faith, Hope, and Community
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-100 leading-relaxed">
              Discover the journey of Kampala Community Church and our unwavering commitment
              to serving God and transforming our community through His love.
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
            {/* Section Navigation */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50">
                <a href="#history" className="text-sm font-semibold text-gray-600 hover:text-[#C9A87C] transition-colors">History</a>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <a href="#mission" className="text-sm font-semibold text-gray-600 hover:text-[#C9A87C] transition-colors">Mission</a>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <a href="#beliefs" className="text-sm font-semibold text-gray-600 hover:text-[#C9A87C] transition-colors">Beliefs</a>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <a href="#leadership" className="text-sm font-semibold text-gray-600 hover:text-[#C9A87C] transition-colors">Leadership</a>
              </div>
            </div>

            <div className="space-y-32">
              <section id="history" className="scroll-mt-32">
                <OurHistory />
              </section>

              <section id="mission" className="scroll-mt-32">
                <OurMission />
              </section>

              <section id="beliefs" className="scroll-mt-32">
                <OurBeliefs />
              </section>

              <section id="leadership" className="scroll-mt-32">
                <OurLeadership />
              </section>

              <section
                id="personal-development"
                className="scroll-mt-32 relative"
              >
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A87C]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C9A87C]/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative text-center mb-12">
                    <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Growth & Development</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Personal Development</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                      Resources and programs to help you grow in faith and practice.
                      Join our discipleship programs, Bible studies, and growth groups
                      designed to strengthen your spiritual journey.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Bible Studies</h3>
                      <p className="text-gray-600 leading-relaxed">Weekly small group studies for deeper understanding of Scripture and meaningful fellowship</p>
                    </div>
                    <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Discipleship Programs</h3>
                      <p className="text-gray-600 leading-relaxed">Structured mentorship for spiritual growth, maturity, and leadership development</p>
                    </div>
                    <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Growth Groups</h3>
                      <p className="text-gray-600 leading-relaxed">Community-focused groups for accountability, support, and authentic relationships</p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="weekly-programs"
                className="scroll-mt-32 relative"
              >
                <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-[#C9A87C]/5 rounded-full -translate-y-20 -translate-x-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#C9A87C]/8 rounded-full translate-y-16 translate-x-16"></div>
                  
                  <div className="relative text-center mb-12">
                    <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Join Us Weekly</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Weekly Programs</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
                      A snapshot of regular gatherings and ministry activities
                      throughout the week. From Sunday worship to midweek Bible studies,
                      there's something for everyone in our church family.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#C9A87C]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900">Sunday</h3>
                      </div>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>9:00 AM - Sunday School</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>10:30 AM - Main Service</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>6:00 PM - Evening Service</span>
                        </li>
                      </ul>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#C9A87C]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">W</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900">Wednesday</h3>
                      </div>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>7:00 PM - Bible Study</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>7:00 PM - Youth Meeting</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>7:30 PM - Prayer Meeting</span>
                        </li>
                      </ul>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#C9A87C]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900">Friday</h3>
                      </div>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>6:00 PM - Youth Service</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>7:00 PM - Cell Groups</span>
                        </li>
                      </ul>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#C9A87C]">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#b89669] rounded-xl flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <h3 className="font-bold text-xl text-gray-900">Saturday</h3>
                      </div>
                      <ul className="text-gray-600 space-y-3">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>10:00 AM - Men's Fellowship</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>2:00 PM - Women's Ministry</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-[#C9A87C] rounded-full mr-3"></div>
                          <span>4:00 PM - Children's Program</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="accountability"
                className="scroll-mt-32 relative"
              >
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C9A87C]/8 rounded-full -translate-y-18 translate-x-18"></div>
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#C9A87C]/6 rounded-full translate-y-14 -translate-x-14"></div>
                  
                  <div className="relative text-center mb-8">
                    <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">Transparency & Trust</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Accountability</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#C9A87C] to-[#b89669] mx-auto mb-6"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        We value transparency and accountability in all aspects of our ministry. Our church is guided by
                        biblical eldership and adheres to established financial practices, with regular reporting and
                        oversight to our board and congregation.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">Biblical Leadership Structure</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">Financial Transparency</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">Regular Congregational Updates</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#C9A87C] rounded-full flex items-center justify-center mr-4">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">Board Oversight & Governance</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#C9A87C]/10 to-[#C9A87C]/5 rounded-2xl p-8">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-[#C9A87C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Built on Trust</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our commitment to accountability ensures that every decision is made with integrity, 
                          wisdom, and the best interests of our church family in mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;