import React from 'react';
import Lanyard from './Lanyard';

const aboutTitle = "Hi, I'm Ronan, Nice to Meet You!";
const aboutSubtitle = "I'm a curious and driven Computer Engineering student who loves turning ideas into real, working products. Whether I'm building web apps, working with hardware, or learning something new, I'm all in.";
const aboutText = `Hello!\nI'm Mark Kenneth Calendario, 22 years old, from Caloocan City. I'm currently taking up BS Computer Science at the Main Campus of the Polytechnic University of the Philippines, graduating this coming September. I'm currently looking for a professional job where I can apply and grow my skills I as a developer.\n\nI'm a full-stack developer. I can build web app user interfaces, servers, and databases using modern technologies. Recently, I have started learning artificial intelligence engineering. I can now build computer vision and natural language processing tools. I'm excited to apply these concepts in real-world projects.\n\nI'm always eager to explore new technologies, dive into challenges, and stay updated with the latest trends in tech. If you're looking for a full-stack web developer or a AI engineer noobie, feel free to reach me out.\n\nMy goal\nIn the future, I see myself working as a full-stack web developer in a team that builds responsive, progressive web applications and AI-powered techs that can truly make a difference, especially in tech communities or within an organization.`;

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-2">{aboutTitle}</h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto">{aboutSubtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12">
          <div className="w-full md:w-1/2 flex items-stretch justify-center">
            <div className="w-full h-full min-h-[500px] flex-1 flex items-center justify-center">
              <Lanyard />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white text-base">
            <h3 className="text-2xl font-bold mb-2">Hello!</h3>
            <p className="mb-2 text-justify">
I'm Ronan Kian Mangubat, 22 years old from Rosario, Cavite. I'm currently pursuing a Bachelor of Science in Computer Engineering at Cavite State University – CCAT Campus, entering my 4th year this September. I'm actively looking for an internship opportunity where I can apply my skills and grow as a well-rounded developer.
            </p>
            <p className="mb-2 text-justify">
I build full-stack web applications by developing user interfaces, servers, and databases using modern tools and frameworks. I'm also exploring 2D indie game development where I create interactive games and experiment with mechanics and design.
            </p>
            <p className="mb-2 text-justify">
Beyond software, I have hands-on hardware experience. I can assemble and troubleshoot PCs, and work on Arduino-based projects. This combination of software and hardware knowledge helps me approach problems from both practical and technical perspectives.            </p>
            <p className="mb-2 text-justify">I'm always eager to learn new technologies, dive into challenging projects, and stay current with trends in tech. If you're looking for a developer who can work across both digital and physical systems, feel free to reach out!
</p>
            <h3 className="text-2xl font-bold mb-2 mt-6">My goal</h3>
            <p className="text-justify">
              In the future, I see myself as a versatile developer who builds full-stack web applications and interactive games, while also applying practical hardware knowledge to solve real-world tech problems. I aspire to join a forward-thinking team where I can contribute both software and hardware solutions that improve lives and drive innovation.
            </p>
            <a
              href="https://drive.google.com/file/d/1Qz66AXQJLI1ERciNCrT3FMRgFvE9vK2J/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm transition-colors duration-300"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
