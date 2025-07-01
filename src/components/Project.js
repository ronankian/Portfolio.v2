import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Technology to Devicon mapping
const techIcons = {
  'TypeScript': 'devicon-typescript-plain colored',
  'React': 'devicon-react-original colored',
  'Node.js': 'devicon-nodejs-plain colored',
  'Express': 'devicon-express-original',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'Real-time': 'devicon-websocket-plain',
  'PHP': 'devicon-php-plain colored',
  'MySQL': 'devicon-mysql-plain colored',
  'HTML/CSS': 'devicon-html5-plain colored',
  'JavaScript': 'devicon-javascript-plain colored',
  'HTML5': 'devicon-html5-plain colored',
  'CSS3': 'devicon-css3-plain colored',
  'Local Storage': 'devicon-chrome-plain colored',
  'Flutter': 'devicon-flutter-plain colored',
  'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  'Flame Engine': 'devicon-flutter-plain colored',
  'Android': 'devicon-android-plain colored',
  'Apple': 'devicon-apple-original original',
  'Bootstrap': 'devicon-bootstrap-plain colored',
  'HTML': 'devicon-html5-plain colored',
  'CSS': 'devicon-css3-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'Framer Motion': 'devicon-react-original colored'
};

const projects = [
  {
    title: 'WhaleX-Casino',
    description: 'A full-stack online casino platform built with TypeScript, featuring real-time gaming and basic user interface. Includes client-side React interface and server-side API with database integration for game state management.',
    image: 'assets/images/ecasino.png',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Real-time'],
    repo: 'https://github.com/ronankian/WhaleX-Casino',
  },
  {
    title: 'EventHub',
    description: 'A comprehensive campus event management system built with PHP, featuring event registration, user management, and administrative dashboard. Includes database-driven functionality for organizing and tracking campus events with role-based access control.',
    image: 'assets/images/ems.png',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    repo: 'https://github.com/ronankian/campus_ems',
  },
  {
    title: 'To-do',
    description: 'A dynamic To-Do web application built with Node.js and Express, featuring task creation, completion tracking, and MySQL database persistence. Includes responsive design with CRUD functionality for efficient task management.',
    image: 'assets/images/todo.png',
    tech: ['Node.js', 'Express', 'MySQL', 'HTML5', 'CSS3'],
    repo: 'https://github.com/ronankian/To-do',
  },
  {
    title: 'Color-Switch',
    description: 'A Flutter mobile game inspired by Color Switch, built with the Flame game engine. Features dynamic color-matching gameplay, smooth animations, and cross-platform compatibility. Players navigate through obstacles by matching colors in this addictive arcade-style game.',
    image: 'assets/images/colorswitch.png',
    tech: ['Flutter', 'Dart', 'Flame Engine', 'Android', 'Apple'],
    repo: 'https://github.com/ronankian/Color-Switch',
  },
  {
    title: 'GameVerse',
    description: 'A comprehensive gaming hub web application built with PHP, featuring a game store, detailed reviews, gaming updates, and user authentication. Includes search functionality, game galleries, and a forum system for gaming community interaction.',
    image: 'assets/images/gameverse.png',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    repo: 'https://github.com/ronankian/GameVerse',
  },
  {
    title: 'Portfolio.v1',
    description: 'My first portfolio website built with HTML and Bootstrap, featuring a clean and simple design to showcase my early projects and skills. This foundational project demonstrates my initial web development journey and serves as a starting point for my portfolio evolution.',
    image: 'assets/images/portfolio01.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    repo: 'https://github.com/ronankian/Portfolio.v1',
  },
  {
    title: 'Portfolio.v2',
    description: 'My latest portfolio website built with React and TypeScript, featuring modern animations, responsive design, and interactive components. Includes smooth scrolling, dynamic content, and a professional dark theme with Tailwind CSS styling.',
    image: 'assets/images/portfolio02.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/ronankian/Portfolio.v2',
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  // Split projects into rows of 3
  const projectRows = [];
  for (let i = 0; i < visibleProjects.length; i += 3) {
    projectRows.push(visibleProjects.slice(i, i + 3));
  }
  // Always pad to 3 rows
  while (projectRows.length < 3) {
    projectRows.push([]);
  }

  // Hardcode up to 3 hooks for up to 3 rows
  const [ref0, inView0] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const rowRefs = [ref0, ref1, ref2];
  const rowInViews = [inView0, inView1, inView2];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
            What I've Designed and Built
          </h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto mb-4">
            A curated showcase of real-world projects that reflect my design and development skills.
          </p>
        </div>
        {projectRows.map((row, rowIndex) => (
          row.length > 0 ? (
            <div
              ref={rowRefs[rowIndex]}
              key={rowIndex + '-' + row.length}
              className={`grid md:grid-cols-3 gap-6 mb-6 transition-all duration-700 ease-out transform 
                ${rowInViews[rowIndex] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                ${rowIndex === 0 ? 'delay-0' : rowIndex === 1 ? 'delay-200' : 'delay-400'}`}
            >
            {row.map((project, idx) => (
              <div
                key={idx}
                  className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-6 flex flex-col w-full min-h-[420px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-2 h-44 object-cover border border-gray-700 w-full"
                />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tech.map((t, i) => (
                    t === 'Flame Engine' ? (
                      <img
                        key={i}
                        src="assets/images/stacks/flame.png"
                        alt="Flame Engine"
                        title={t}
                        style={{ width: '24px', height: '24px', display: 'inline-block', verticalAlign: 'middle' }}
                        className="cursor-pointer transition-transform hover:scale-110"
                      />
                    ) : t === 'PostgreSQL' ? (
                      <img
                        key={i}
                        src={techIcons[t]}
                        alt="PostgreSQL"
                        title={t}
                        style={{ width: '24px', height: '24px', display: 'inline-block', verticalAlign: 'middle' }}
                        className="cursor-pointer transition-transform hover:scale-110"
                      />
                    ) : t === 'Dart' ? (
                      <img
                        key={i}
                        src={techIcons[t]}
                        alt="Dart"
                        title={t}
                        style={{ width: '24px', height: '24px', display: 'inline-block', verticalAlign: 'middle' }}
                        className="cursor-pointer transition-transform hover:scale-110"
                      />
                    ) : (
                      <i 
                        key={i} 
                        className={`${techIcons[t] || 'devicon-javascript-plain'} cursor-pointer transition-transform hover:scale-110`} 
                        style={{ fontSize: '24px' }}
                        title={t}
                      ></i>
                    )
                  ))}
                </div>
                {project.title === 'WhaleX-Casino' ? (
                  <div className="flex gap-2 mt-auto">
                    <a
                      href="https://whalex-casino.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-2 py-1 rounded border border-green-700 transition-colors duration-200 text-left flex items-center gap-2"
                      style={{ width: 'fit-content' }}
                    >
                      <i className="fa fa-signal" style={{ fontSize: '18px' }}></i>
                      Live
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-white px-2 py-1 rounded border border-gray-700 transition-colors duration-200 text-left flex items-center gap-2"
                      style={{ width: 'fit-content' }}
                    >
                      <i className="devicon-github-original" style={{ fontSize: '18px' }}></i>
                      Repo
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-black text-white px-2 py-1 rounded border border-gray-700 transition-colors duration-200 text-left flex items-center gap-2"
                    style={{ width: 'fit-content' }}
                  >
                    <i className="devicon-github-original" style={{ fontSize: '18px' }}></i>
                    Repo
                  </a>
                )}
              </div>
            ))}
          </div>
          ) : null
        ))}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-black text-white px-6 py-3 rounded shadow border border-black font-semibold text-lg flex items-center gap-2"
          >
            {showAll ? (
              <>
                Collapse Projects <span>&#9650;</span>
              </>
            ) : (
              <>
                Show All Projects <span>&#9660;</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project; 