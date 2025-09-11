import React from 'react';

/**
 * StayUpToDateSection Component
 * This component provides a newsletter signup form to allow users to
 * stay informed about church events and news.
 */
const StayUpToDateSection = () => {
    return (
        <section 
            className="bg-cover bg-center py-16 md:py-24" 
            style={{backgroundImage: "url('https://placehold.co/1920x400/ddd/888?text=Background+Texture')"}}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">STAY UP TO DATE</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Sign up for our weekly newsletter to stay informed about events, sermons, and news.
                </p>
                <form className="max-w-md mx-auto flex">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-3 rounded-l-md border-gray-300 focus:ring-[#C9A87C] focus:border-[#C9A87C]"
                        required
                    />
                    <button type="submit" className="bg-[#C9A87C] text-white px-6 py-3 rounded-r-md font-semibold hover:bg-[#b39164] transition-colors">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default StayUpToDateSection;
