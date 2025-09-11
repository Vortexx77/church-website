import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, LogIn, Heart, Facebook, Twitter, Instagram, ChevronDown, Landmark, BookOpen, Target, Sparkles, CalendarDays, Users, PlayCircle } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Cell Family', path: '/cell-family' },
    { name: 'Ministries', path: '/ministries' },
    // { name: 'Ministries', path: '/ministries' },
    { name: 'Events', path: '/events' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
      {/* Top utility bar */}
      <div className="hidden md:block bg-[#1f1f1f] text-white/90 text-xs">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center space-x-5">
              <button className="flex items-center space-x-1 hover:text-white transition-colors">
                <Search size={14} />
                <span>Search</span>
              </button>
              <Link to="#times" className="flex items-center space-x-1 hover:text-white transition-colors">
                <MapPin size={14} />
                <span>Times & Directions</span>
              </Link>
              <Link to="#login" className="flex items-center space-x-1 hover:text-white transition-colors">
                <LogIn size={14} />
                <span>Login</span>
              </Link>
              <Link to="/give" className="flex items-center space-x-1 hover:text-white transition-colors">
                <Heart size={14} />
                <span>Give</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={14} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={14} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className={`${scrolled ? 'py-2' : 'py-4'} bg-white`}> 
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-end">
                <span className="text-xl font-extrabold tracking-widest text-gray-900">KAMPALA</span>
                <span className="text-xl font-extrabold tracking-widest text-[#C9A87C] ml-2">COMMUNITY</span>
                <span className="text-xl font-extrabold tracking-widest text-gray-900 ml-2">CHURCH</span>
              </Link>
            </div>

            {/* Desktop Navigation with dropdowns */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 relative uppercase tracking-wide px-1 py-2 text-[13px] font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                    {link.children && <ChevronDown size={14} className="mt-px" />}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full transition-opacity ${
                        location.pathname === link.path ? 'bg-[#C9A87C] opacity-100' : 'opacity-0'
                      }`}
                    />
                  </Link>
                  {link.children && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-3 w-80 bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl p-2">
                      <div className="absolute top-0 inset-x-0 h-1 rounded-t-xl bg-gradient-to-r from-[#C9A87C] via-amber-400 to-[#C9A87C]" />
                      <div className="absolute -top-2 left-6 h-4 w-4 rotate-45 bg-white border border-gray-200 border-b-0 border-r-0" />
                      <div className="grid grid-cols-1 gap-1 mt-2">
                        {link.children.map((child) => (
                          <div key={child.name} className="relative group/item">
                            {!child.group ? (
                              <Link
                                to={child.path}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-800 hover:bg-gray-50 transition-colors"
                              >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3eee6] text-[#C9A87C]">
                                  {child.icon}
                                </span>
                                <span className="font-semibold">{child.name}</span>
                              </Link>
                            ) : (
                              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-gray-800 hover:bg-gray-50 cursor-default">
                                <div className="flex items-center gap-3">
                                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3eee6] text-[#C9A87C]">
                                    {child.children?.[0]?.icon}
                                  </span>
                                  <span className="font-semibold">{child.name}</span>
                                </div>
                                <ChevronDown size={14} className="-rotate-90 text-gray-500" />
                              </div>
                            )}

                            {child.group && (
                              <div className="invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-200 absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl p-2">
                                <div className="grid grid-cols-1 gap-1">
                                  {child.children.map((g) => (
                                    <Link
                                      key={g.name}
                                      to={g.path}
                                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-50 transition-colors"
                                    >
                                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3eee6] text-[#C9A87C]">
                                        {g.icon}
                                      </span>
                                      <span className="font-semibold">{g.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right CTAs / mobile button */}
            <div className="flex items-center space-x-3">
              <Link
                to="/sermons"
                className="hidden md:inline-flex items-center space-x-2 bg-[#C9A87C] text-white px-4 py-2 rounded-full transition-colors hover:bg-[#b39164] text-sm font-semibold"
              >
                <PlayCircle size={16} />
                <span>Watch Live</span>
              </Link>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 hover:text-gray-900 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <button
                    className="px-2 py-2 text-gray-700"
                    onClick={() => setOpenSub((prev) => (prev === link.name ? null : link.name))}
                    aria-label="Expand submenu"
                  >
                    <ChevronDown size={16} />
                  </button>
                )}
              </div>
              {link.children && openSub === link.name && (
                <div className="ml-2 pl-2 border-l space-y-1">
                  {link.children.map((child) => (
                    child.group ? (
                      <div key={child.name} className="mt-1 pt-1">
                        <div className="px-3 pb-1 text-[11px] uppercase tracking-wider text-gray-500">{child.name}</div>
                        <div className="space-y-1">
                          {child.children.map((g) => (
                            <Link
                              key={g.name}
                              to={g.path}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3eee6] text-[#C9A87C]">
                                {g.icon}
                              </span>
                              {g.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3eee6] text-[#C9A87C]">
                          {child.icon}
                        </span>
                        {child.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-2 pt-2 border-t border-gray-200">
            <Link
              to="/sermons"
              className="inline-flex items-center space-x-2 bg-[#C9A87C] text-white px-4 py-2 rounded-full transition-colors hover:bg-[#b39164] text-sm font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <PlayCircle size={16} />
              <span>Watch Live</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
