import React from 'react';
import Lanyard from './Lanyard';

const aboutTitle = "Hi, I'm Ronan, Nice to Meet You!";
const aboutSubtitle = "I'm a curious and driven Computer Engineering fresh graduate who loves turning ideas into real, working products. Whether I'm building web apps, working with hardware, or learning something new, I'm all in.";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 break-words">{aboutTitle}</h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto">{aboutSubtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12">
          <div className="w-full md:w-1/2 flex items-stretch justify-center">
            <div className="w-full h-full min-h-[500px] max-w-full overflow-hidden flex-1 flex items-center justify-center">
              <Lanyard />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white text-base">
            <h3 className="text-2xl font-bold mb-2">Hello!</h3>
            <p className="mb-2 text-justify">
            I'm Ronan Kian Mangubat, a 24-year-old recent Computer Engineering graduate from Rosario, Cavite. I'm actively looking for my first full-time role where I can apply my skills and grow as a versatile developer.            </p>
            <p className="mb-2 text-justify">
            I build full-stack web applications by developing user interfaces, servers, and databases using modern tools like React and Node.js. I'm also passionate about 2D indie game development, where I love creating interactive experiences and experimenting with game mechanics.            </p>
            <p className="mb-2 text-justify">
            Beyond software, I have hands-on hardware experience. I hold a national certificate in Computer System Servicing, can assemble and troubleshoot PCs, and regularly work on embedded IoT and microcontroller projects. This combination of software and hardware knowledge helps me approach problems from both a practical and technical perspective. I'm always eager to learn new technologies, dive into challenging projects, and stay current with modern tech trends.            </p>

            <h3 className="text-2xl font-bold mb-2 mt-6">My goal</h3>
            <p className="text-justify">
              In the future, I see myself as a versatile developer who builds full-stack web applications and interactive games, while also applying practical hardware knowledge to solve real-world tech problems. I aspire to join a forward-thinking team where I can contribute either software or hardware solutions that improve lives and drive innovation.
            </p>
            <a
              href="https://drive.google.com/file/d/1BRUvxftUg1bF5GV8mSpVXiJYGxMjuSE1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
