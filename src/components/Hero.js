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
            transform: translate(-50%, -50%) translateX(110px) translateY(70px) rotate(-12deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(110px) translateY(55px) rotate(-12deg);
          }
        }

        @keyframes floatBootstrap {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-280px) translateY(20px) rotate(-12deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-280px) translateY(5px) rotate(-12deg);
          }
        }

        @keyframes floatPhp {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-210px) translateY(-70px) rotate(6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-210px) translateY(-85px) rotate(6deg);
          }
        }

        @keyframes floatJavascript {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(220px) translateY(-40px) rotate(-6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(220px) translateY(-55px) rotate(-6deg);
          }
        }

        @keyframes floatNpm {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(-140px) translateY(110px) rotate(6deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(-140px) translateY(95px) rotate(6deg);
          }
        }

        @keyframes floatGit {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(280px) translateY(90px) rotate(-8deg);
          }
          50% {
            transform: translate(-50%, -50%) translateX(280px) translateY(75px) rotate(-8deg);
          }
        }

        .floating-icon {
          position: absolute;
          font-size: 5.25rem;
          color: rgba(255, 255, 255, 0.8);
          filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
          z-index: 5;
          top: 30%;
          left: 50%;
          animation-fill-mode: backwards;
          will-change: transform;
        }
        
        .icon-mysql {
          transform: translate(-50%, -50%) translateX(110px) translateY(70px) rotate(-12deg);
          animation: floatMysql 3s ease-in-out infinite backwards;
          animation-delay: 0s;
          font-size: 6.5rem;
        }
        
        .icon-bootstrap {
          transform: translate(-50%, -50%) translateX(-280px) translateY(20px) rotate(-12deg);
          animation: floatBootstrap 3s ease-in-out infinite backwards;
          animation-delay: 0s;
        }
        
        .icon-php {
          transform: translate(-50%, -50%) translateX(-210px) translateY(-70px) rotate(6deg);
          animation: floatPhp 3s ease-in-out infinite backwards;
          animation-delay: 0s;
        }
        
        .icon-javascript {
          transform: translate(-50%, -50%) translateX(220px) translateY(-40px) rotate(-6deg);
          animation: floatJavascript 3s ease-in-out infinite backwards;
          animation-delay: 0s;
        }
        
        .icon-npm {
          transform: translate(-50%, -50%) translateX(-140px) translateY(110px) rotate(6deg);
          animation: floatNpm 3s ease-in-out infinite backwards;
          animation-delay: 0s;
        }
        
        .icon-git {
          transform: translate(-50%, -50%) translateX(280px) translateY(90px) rotate(-8deg);
          animation: floatGit 3s ease-in-out infinite backwards;
          animation-delay: 0s;
        }

        .hero-photo-wrap {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
        }

        .hero-profile-img {
          position: relative;
          z-index: 10;
          width: clamp(240px, min(64dvh, 88vw), 680px);
          height: clamp(240px, min(64dvh, 88vw), 680px);
          max-width: 92vw;
          object-fit: cover;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
        }

        .hero-grid-bg {
          --cols: 10;
          --rows: 8;
          --c1: #111111;
          --c2: #000000;
          
          --_g: #0000 90deg,var(--c1) 0;
          background: 
            conic-gradient(from 90deg at 2px 2px,var(--_g)),
            conic-gradient(from 90deg at 1px 1px,var(--_g)),
            var(--c2);
          background-size:
            calc(100% / var(--cols)) calc(100% / var(--rows)),
            calc(100% / (var(--cols) * 5)) calc(100% / (var(--rows) * 5));
        }

        @media (min-width: 640px) {
          .hero-grid-bg { --cols: 14; --rows: 9; }
        }

        @media (min-width: 1024px) {
          .hero-grid-bg { --cols: 18; --rows: 11; }
        }

        @media (min-width: 1440px) {
          .hero-grid-bg { --cols: 22; --rows: 12; }
        }

        @media (max-width: 639px) {
          .hero-section {
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
          }

          .hero-photo-wrap {
            position: relative;
            left: auto;
            transform: none;
            flex: none;
            width: 100%;
            align-items: flex-end;
            margin-top: 0.35rem;
          }

          .hero-profile-img {
            width: clamp(240px, 72vw, 360px);
            height: clamp(240px, 72vw, 360px);
            max-width: 86vw;
          }

          .hero-actions {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin-top: 0;
          }

          .floating-icon {
            display: block;
            font-size: 1.9rem;
            top: 32%;
          }

          .icon-mysql {
            font-size: 2.35rem;
            transform: translate(-50%, -50%) translateX(42px) translateY(36px) rotate(-12deg);
            animation-name: floatMysqlMobile;
          }

          .icon-bootstrap {
            transform: translate(-50%, -50%) translateX(-88px) translateY(10px) rotate(-12deg);
            animation-name: floatBootstrapMobile;
          }
          .icon-php {
            transform: translate(-50%, -50%) translateX(-68px) translateY(-36px) rotate(6deg);
            animation-name: floatPhpMobile;
          }
          .icon-javascript {
            transform: translate(-50%, -50%) translateX(78px) translateY(-22px) rotate(-6deg);
            animation-name: floatJavascriptMobile;
          }
          .icon-npm {
            transform: translate(-50%, -50%) translateX(-48px) translateY(52px) rotate(6deg);
            animation-name: floatNpmMobile;
          }
          .icon-git {
            transform: translate(-50%, -50%) translateX(86px) translateY(44px) rotate(-8deg);
            animation-name: floatGitMobile;
          }
        }

        @keyframes floatMysqlMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(42px) translateY(36px) rotate(-12deg); }
          50% { transform: translate(-50%, -50%) translateX(42px) translateY(28px) rotate(-12deg); }
        }
        @keyframes floatBootstrapMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(-88px) translateY(10px) rotate(-12deg); }
          50% { transform: translate(-50%, -50%) translateX(-88px) translateY(2px) rotate(-12deg); }
        }
        @keyframes floatPhpMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(-68px) translateY(-36px) rotate(6deg); }
          50% { transform: translate(-50%, -50%) translateX(-68px) translateY(-44px) rotate(6deg); }
        }
        @keyframes floatJavascriptMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(78px) translateY(-22px) rotate(-6deg); }
          50% { transform: translate(-50%, -50%) translateX(78px) translateY(-30px) rotate(-6deg); }
        }
        @keyframes floatNpmMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(-48px) translateY(52px) rotate(6deg); }
          50% { transform: translate(-50%, -50%) translateX(-48px) translateY(44px) rotate(6deg); }
        }
        @keyframes floatGitMobile {
          0%, 100% { transform: translate(-50%, -50%) translateX(86px) translateY(44px) rotate(-8deg); }
          50% { transform: translate(-50%, -50%) translateX(86px) translateY(36px) rotate(-8deg); }
        }
      `}</style>
      <section
        id="home"
        className="hero-section relative flex flex-col w-full max-w-full h-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden hero-grid-bg"
      >
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 flex flex-col items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="flex flex-wrap items-center justify-center gap-2 relative w-full max-w-full px-1">
            <span className="text-xl sm:text-3xl md:text-4xl font-light text-white/80 tracking-wide drop-shadow-md">
              Hello, I am
            </span>
            <div className="flex flex-wrap items-center justify-center bg-blue-200/80 rounded-xl px-2 py-1 gap-1 max-w-full">
              <span className="font-bold text-blue-700 text-sm sm:text-base md:text-lg">a</span>
              <span className="font-bold text-blue-700 text-sm sm:text-base md:text-lg min-w-[70px] sm:min-w-[85px] text-center flex justify-center">
                <RotatingText
                  texts={['Front-End', 'Back-End', 'Full-Stack']}
                  mainClassName="font-bold text-blue-700 text-sm sm:text-base md:text-lg"
                  rotationInterval={2000}
                />
              </span>
              <span className="font-bold text-blue-700 text-sm sm:text-base md:text-lg">Developer</span>
            </div>
          </div>
          <h1
            className="flex items-center justify-center w-full max-w-full px-2 font-extrabold text-white/80 leading-none drop-shadow-lg text-center whitespace-nowrap"
            style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}
          >
            <BlurText
              text="Ronan Kian"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
          </h1>
        </div>

        <div className="hero-photo-wrap">
          <div className="relative">
            <i className="devicon-mysql-plain-wordmark floating-icon icon-mysql"></i>
            <i className="devicon-bootstrap-plain floating-icon icon-bootstrap"></i>
            <i className="devicon-php-plain floating-icon icon-php"></i>
            <i className="devicon-javascript-plain floating-icon icon-javascript"></i>
            <i className="devicon-npm-original-wordmark floating-icon icon-npm"></i>
            <i className="devicon-git-plain floating-icon icon-git"></i>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/profile.png'}
              alt="Profile"
              className="hero-profile-img"
            />
          </div>
        </div>
        
        {/* Bottom Row: Buttons left, 5+ Projects right */}
        <div className="hero-actions relative z-30 mt-auto w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 flex justify-between items-end gap-3 shrink-0">
          <div>
            <span className="text-gray-400 text-xs sm:text-sm mb-2 hidden sm:block" style={{ maxWidth: 400 }}>
              I design and deploy full-stack web applications while also bringing hands-on experience in computer hardware support.
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 w-fit">
              <a 
                href="https://drive.google.com/file/d/1T2esCj5JaqX8eUDjKTjHv1p_gcyvvC7P/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition duration-300 ease-in-out sm:hover:scale-105 shadow-lg flex items-center gap-2 w-auto"
              >
                <i className="fas fa-arrow-alt-circle-down"></i>
                My Resume
              </a>
              <a 
                href="#projects" 
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition duration-300 ease-in-out sm:hover:scale-105 shadow-lg flex items-center gap-2 w-auto"
              >
                <i className="fas fa-cube"></i>
                View Projects
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white/80">
              <CountUp from={0} to={7} separator="," direction="up" duration={1} className="count-up-text inline" />+
            </div>
            <div className="text-gray-400 text-sm sm:text-base md:text-lg">Projects</div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero; 