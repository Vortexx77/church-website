import React from 'react';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-[#333333] text-white py-2 px-4 md:px-8 z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">Kampala Community Church</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300 transition-colors"><Facebook size={18} /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><Twitter size={18} /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><Instagram size={18} /></a>
          <Link to="/give" className="bg-[#C9A87C] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#b39164] transition-colors flex items-center space-x-2">
            <Heart size={16} />
            <span>GIVE</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
