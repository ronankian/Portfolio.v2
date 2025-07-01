import React from 'react';
import RotatingText from './RotatingText';
import BlurText from './BlurText';
import CountUp from './CountUp';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatMysql {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(70px) translateY(50px) rotate(-12deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(70px) translateY(40px) rotate(-12deg);
          }
        }

        @keyframes floatBootstrap {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-200px) translateY(20px) rotate(-12deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-200px) translateY(10px) rotate(-12deg);
          }
        }

        @keyframes floatPhp {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-150px) translateY(-50px) rotate(6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-150px) translateY(-60px) rotate(6deg);
          }
        }

        @keyframes floatJavascript {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(150px) translateY(-30px) rotate(-6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(150px) translateY(-40px) rotate(-6deg);
          }
        }

        @keyframes floatNpm {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-100px) translateY(80px) rotate(6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-100px) translateY(70px) rotate(6deg);
          }
        }

        @keyframes floatGit {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(200px) translateY(70px) rotate(-8deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(200px) translateY(60px) rotate(-8deg);
          }
        }

        .floating-icon {
          position: absolute;
          font-size: 3.5rem; /* text-6xl */
          color: rgba(255, 255, 255, 0.8); /* text-white/80 */
          filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1)); /* drop-shadow-lg */
          z-index: 5;
          top: 55%;
          left: 50%;
        }
        
        .icon-mysql {
          animation: floatMysql 3s ease-in-out infinite;
          animation-delay: 0s;
          font-size: 4.5rem;
        }
        
        .icon-bootstrap {
          animation: floatBootstrap 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .icon-php {
          animation: floatPhp 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .icon-javascript {
          animation: floatJavascript 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .icon-npm {
          animation: floatNpm 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .icon-git {
          animation: floatGit 3s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        .hero-grid-bg {
          --s: 100px; /* control the size*/
          --c1: #111111;
          --c2: #000000;
          
          --_g: #0000 90deg,var(--c1) 0;
          background: 
            conic-gradient(from 90deg at 2px 2px,var(--_g)),
            conic-gradient(from 90deg at 1px 1px,var(--_g)),
            var(--c2);
          background-size: var(--s) var(--s), calc(var(--s)/5) calc(var(--s)/5);
        }
      `}</style>
      <section
        id="home"
        className="relative flex flex-col justify-center items-center hero-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-6 pt-16">
          {/* Floating Hello and RotatingText */}
          <div className="flex items-center gap-2 mb-2 relative mt-20">
            <span className="text-3xl md:text-4xl font-light text-white/80 tracking-wide drop-shadow-md">
              Hello, I am
            </span>
            <div className="flex items-center bg-blue-200/80 rounded-xl px-2 py-1 gap-1">
              <span className="font-bold text-blue-700 text-base md:text-lg">a</span>
              <span className="font-bold text-blue-700 text-base md:text-lg min-w-[85px] text-center flex justify-center">
                <RotatingText
                  texts={['Front-End', 'Back-End', 'Full-Stack']}
                  mainClassName="font-bold text-blue-700 text-base md:text-lg"
                  rotationInterval={2000}
                />
              </span>
              <span className="font-bold text-blue-700 text-base md:text-lg">Developer</span>
            </div>
          </div>
          {/* Name behind the profile image */}
          <div className="relative flex items-center justify-center mt-2">
            <h1
              className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl md:text-8xl font-extrabold text-white/80 leading-tight drop-shadow-lg text-center select-none pointer-events-none z-0"
              style={{
                whiteSpace: 'nowrap',
                left: '50%',
                transform: 'translate(-50%, -47%)',
              }}
            >
              <BlurText
                text="Ronan Kian"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h1>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/profile.png'}
              alt="Profile"
              className="w-[450px] h-[450px] object-cover rounded-2xl shadow-2xl z-10"
              style={{ zIndex: 10 }}
            />
          </div>
          {/* Floating Icons */}
          <i className="devicon-mysql-plain-wordmark floating-icon icon-mysql"></i>
          <i className="devicon-bootstrap-plain floating-icon icon-bootstrap"></i>
          <i className="devicon-php-plain floating-icon icon-php"></i>
          <i className="devicon-javascript-plain floating-icon icon-javascript"></i>
          <i className="devicon-npm-original-wordmark floating-icon icon-npm"></i>
          <i className="devicon-git-plain floating-icon icon-git"></i>
          
          </div>

        </div>
        
        {/* Bottom Row: Buttons left, 5+ Projects right */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-end z-20">
          <div>
            <span className="text-gray-400 text-sm mb-2 block" style={{ maxWidth: 400 }}>
              I design and deploy full-stack web applications while also bringing hands-on experience in computer hardware support.
            </span>
            <div className="flex flex-col gap-3 w-fit">
              <a 
                href="https://drive.google.com/file/d/1aGn-0bi8Nt1xca_ssM3F1eagpwzfmvgp/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2 w-auto"
              >
                <i className="fas fa-arrow-alt-circle-down"></i>
                Download CV
              </a>
              <a 
                href="#projects" 
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center gap-2 w-auto"
              >
                <i className="fas fa-cube"></i>
                View Projects
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl sm:text-4xl font-extrabold text-white/80">
              <CountUp from={0} to={5} separator="," direction="up" duration={1} className="count-up-text inline" />+
            </div>
            <div className="text-gray-400 text-base sm:text-lg">Projects</div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero; 