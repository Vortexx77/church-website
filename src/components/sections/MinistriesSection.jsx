import React from 'react';

/**
 * MinistriesSection Component
 * This section highlights key ministry areas and provides a call-to-action
 * for users to get more involved.
 */
const MinistriesSection = () => {
    return (
        <section className="bg-[#333333] text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Text content for the section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-gray-400 mb-2">GET INVOLVED</h3>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ministries & Groups</h2>
                        <div className="space-y-4 text-lg mb-8">
                            <p className="border-b border-gray-600 pb-2">HOPE FOR THE HOPELESS</p>
                            <p className="border-b border-gray-600 pb-2">SUPPORTING OUR MISSIONARIES</p>
                            <p className="border-b border-gray-600 pb-2">FELLOWSHIP GROUPS</p>
                        </div>
                        <button className="bg-[#C9A87C] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#b39164] transition-colors">
                            Learn More
                        </button>
                    </div>
                    {/* Image for the section */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src="https://placehold.co/600x400/555/fff?text=Ministry+In+Action" 
                            alt="Ministry in action" 
                            className="rounded-lg shadow-lg w-full" 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ccc/333?text=Image+Not+Found'; }} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MinistriesSection;
