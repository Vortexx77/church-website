import React, { useEffect, useRef } from 'react';
import { BookOpen, Heart, Users, Cross } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const beliefs = [
    {
        title: 'The Bible',
        description: 'We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.',
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        title: 'The Trinity',
        description: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.',
        icon: <Cross className="w-6 h-6" />
    },
    {
        title: 'Salvation',
        description: 'We believe salvation is by grace alone through faith alone in Jesus Christ alone.',
        icon: <Heart className="w-6 h-6" />
    },
    {
        title: 'The Church',
        description: 'We believe the church is the body of Christ, called to worship, fellowship, discipleship, and service.',
        icon: <Users className="w-6 h-6" />
    }
];

const OurBeliefs = () => {
    const sectionRef = useRef(null);
    const beliefsRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const beliefItems = beliefsRef.current.children;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            },
        });

        tl.fromTo(
            beliefItems,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
            }
        ).fromTo(
            '.belief-icon',
            { scale: 0.5, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)',
                stagger: 0.2,
            },
            '-=0.7'
        );
    }, []);

    return (
        <section ref={sectionRef} className="bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-[#C9A87C] font-semibold text-sm uppercase tracking-wider">What We Believe</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Core Beliefs</h2>
                    <div className="w-24 h-1 bg-[#C9A87C] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our beliefs are rooted in Scripture and guide everything we do as a church community.
                    </p>
                </div>

                <div ref={beliefsRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {beliefs.map((belief, index) => (
                        <div key={index} className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#C9A87C]/10 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>

                            <div className="relative">
                                <div className="flex items-center mb-6">
                                    <div className="belief-icon flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A87C] to-[#b89669] text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        {belief.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#C9A87C] transition-colors duration-300">{belief.title}</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">{belief.description}</p>

                                {/* Decorative bottom accent */}
                                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#C9A87C] to-transparent group-hover:w-24 transition-all duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default OurBeliefs;