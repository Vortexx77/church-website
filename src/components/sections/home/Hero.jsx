import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Handshake, Landmark } from "lucide-react";
import { gsap } from "gsap";
import heroVideo from "../../../assets/videos/video.mp4";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const overlayRef = useRef(null);
  const textContainerRef = useRef(null);
  const buttonsRef = useRef(null);
  const tilesRef = useRef(null);
  const videoRef = useRef(null);

  const heroTexts = [
    "We Welcome You",
    "Experience God's Love",
    "Join Our Community",
    "Grow In Faith",
  ];

  // Split text into words and then into letters
  const splitText = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <div key={wordIndex} className="inline-flex mx-2">
        {word.split("").map((letter, letterIndex) => (
          <span
            key={`${wordIndex}-${letterIndex}`}
            className="inline-block opacity-0 translate-y-6 stroke-text"
            style={{
              transition: "all 0.3s ease",
              WebkitTextStroke: "1px white",
              color: "transparent",
              fontSize: "inherit",
              lineHeight: "1.2",
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const animateText = (index) => {
        const letters =
          textContainerRef.current?.querySelectorAll(".stroke-text");
        if (!letters || letters.length === 0) return;

        // Animate letters in
        gsap.fromTo(
          letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: "power3.out",
            onComplete: () => {
              // After animation completes, wait then fade out
              gsap.to(letters, {
                opacity: 0,
                y: -30,
                delay: 2,
                duration: 0.5,
                ease: "power3.in",
                stagger: 0.01,
                onComplete: () => {
                  // Move to next text
                  const nextIndex = (index + 1) % heroTexts.length;
                  setCurrentTextIndex(nextIndex);
                },
              });
            },
          }
        );
      };

      // Start animation when text changes
      const timeout = setTimeout(() => {
        animateText(currentTextIndex);
      }, 100);

      return () => clearTimeout(timeout);
    });

    return () => ctx.revert();
  }, [currentTextIndex]);

  return (
    <section className="relative h-[90vh] text-white">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Church worship background video"
      />

      {/* Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Animated Text */}
            <div
              ref={textContainerRef}
              className="relative h-32 md:h-40 lg:h-48 flex items-center justify-center w-full text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase flex-wrap px-4"
            >
              {splitText(heroTexts[currentTextIndex])}
            </div>
          </div>
        </div>
      </div>

      {/* Tiles under hero (unchanged) */}
      <div
        ref={tilesRef}
        className="absolute left-1/2 -translate-x-1/2 -bottom-20 w-[95%] md:w-[85%] z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-xl overflow-hidden">
          <Tile
            data-hero-tile
            icon={<Handshake className="h-8 w-8 text-[#C9A87C]" />}
            title="New? Start Here!"
            description="Learn more"
            to="/about"
            featured
          />
          <Tile
            data-hero-tile
            icon={<Landmark className="h-8 w-8 text-[#C9A87C]" />}
            title="Support by Giving"
            description="Donate"
            to="/contact"
            subtle
          />
        </div>
      </div>
    </section>
  );
};

// Custom stroke-only text style
const styles = `
  .stroke-text {
    -webkit-text-stroke: 1px white;
    color: transparent;
    text-shadow: none;
  }
`;

const Tile = ({
  icon,
  title,
  description,
  to,
  featured = false,
  subtle = false,
  ...rest
}) => {
  const bg = featured
    ? "bg-white text-gray-800"
    : subtle
    ? "bg-[#F5F5F5] text-gray-700"
    : "bg-white";
  const titleColor = featured ? "text-[#C9A87C]" : "text-gray-900";
  return (
    <Link
      {...rest}
      to={to}
      className={`${bg} py-10 px-8 md:py-12 md:px-10 text-center flex flex-col items-center hover:bg-gray-50 transition-colors`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${titleColor}`}>
        {title}
      </h3>
      <span className="text-sm md:text-base">{description}</span>
    </Link>
  );
};

export default Hero;

// Inject custom CSS
// if (typeof document !== 'undefined') {
//   const styleSheet = document.createElement("style");
//   styleSheet.innerText = styles;
//   document.head.appendChild(styleSheet);
// }
