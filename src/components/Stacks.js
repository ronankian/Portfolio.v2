import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedRow from './AnimatedRow';

const categories = [
  'All',
  'Front-End',
  'Back-End',
  'Database',
  'Languages',
  'Mobile',
  'DevOps',
  'Other',
];

const stacks = [
  { name: 'React', icon: 'devicon-react-original colored', category: 'Front-End' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'Languages' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'Back-End' },
  { name: 'Express', icon: 'devicon-express-original', category: 'Back-End' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'Database' },
  { name: 'PHP', icon: 'devicon-php-plain colored', category: 'Back-End' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'Database' },
  { name: 'HTML', icon: 'devicon-html5-plain colored', category: 'Front-End' },
  { name: 'CSS', icon: 'devicon-css3-plain colored', category: 'Front-End' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'Languages' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', category: 'Front-End' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', category: 'Front-End' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg', category: 'Front-End' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', category: 'Front-End' },
  { name: 'Flutter', icon: 'devicon-flutter-plain colored', category: 'Mobile' },
  { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg', category: 'Languages' },
  { name: 'Flame Engine', icon: 'assets/images/stacks/flame.png', category: 'Mobile' },
  { name: 'Android', icon: 'devicon-android-plain colored', category: 'Mobile' },
  { name: 'Apple', icon: 'devicon-apple-original original', category: 'Mobile' },
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'DevOps' },
  { name: 'GitHub', icon: 'devicon-github-original', category: 'DevOps' },
  { name: 'Windows', icon: 'devicon-windows8-original colored', category: 'Other' },
  { name: 'VSCode', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', category: 'Other' },
  { name: 'Arduino', icon: 'devicon-arduino-plain colored', category: 'Other' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg', category: 'Mobile' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', category: 'Languages' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'Languages' },
  { name: 'NPM', icon: 'devicon-npm-original-wordmark colored', category: 'Other' },
];

const Stacks = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStacks =
    activeCategory === 'All'
      ? stacks
      : stacks.filter((stack) => stack.category === activeCategory);

  // Split filteredStacks into rows of 10
  const stackRows = [];
  for (let i = 0; i < filteredStacks.length; i += 10) {
    stackRows.push(filteredStacks.slice(i, i + 10));
  }
  // Always pad to 3 rows
  while (stackRows.length < 3) {
    stackRows.push([]);
  }

  // Hardcode up to 3 hooks for up to 3 rows
  const [ref0, inView0] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const rowRefs = [ref0, ref1, ref2];
  const rowInViews = [inView0, inView1, inView2];

  return (
    <section id="stacks" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
            What Powers My Projects and Apps
          </h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto">
            These are the technologies, frameworks, and tools I use to bring ideas to life that covers everything from frontend and backend development.
          </p>
        </div>
        <div className="flex flex-row justify-center mb-14">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-semibold transition-colors duration-200 text-xs md:text-sm focus:outline-none border-0
                ${idx === 0 ? 'rounded-l-lg' : ''}
                ${idx === categories.length - 1 ? 'rounded-r-lg' : ''}
                ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}
                ${idx !== 0 ? '-ml-px' : ''}
              `}
              style={{ borderRadius: idx === 0 ? '0.5rem 0 0 0.5rem' : idx === categories.length - 1 ? '0 0.5rem 0.5rem 0' : '0' }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          {stackRows.map((row, rowIdx) =>
            row.length > 0 ? (
              <div
                ref={rowRefs[rowIdx]}
                key={rowIdx + '-' + row.length}
                className={`flex flex-wrap justify-center gap-2 w-full transition-all duration-700 ease-out transform
                  ${rowInViews[rowIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${rowIdx === 0 ? 'delay-0' : rowIdx === 1 ? 'delay-200' : 'delay-400'}`}
              >
                {row.map((stack, idx) => (
                  <div
                    key={stack.name}
                    className="flex flex-col items-center m-1"
                  >
                    <div
                      className="flex items-center justify-center bg-gray-900 rounded-lg p-3 shadow border border-gray-800 w-24 h-24 mb-2 transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
                      style={{ minWidth: 0 }}
                    >
                      {stack.name === 'Flame Engine' ? (
                        <img
                          src={stack.icon}
                          alt="Flame Engine"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'Vite' ? (
                        <img
                          src={stack.icon}
                          alt="Vite"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'Python' ? (
                        <img
                          src={stack.icon}
                          alt="Python"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'C++' ? (
                        <img
                          src={stack.icon}
                          alt="C++"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'Dart' ? (
                        <img
                          src={stack.icon}
                          alt="Dart"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'VSCode' ? (
                        <img
                          src={stack.icon}
                          alt="VSCode"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'Android Studio' ? (
                        <img
                          src={stack.icon}
                          alt="Android Studio"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'PostgreSQL' ? (
                        <img
                          src={stack.icon}
                          alt="PostgreSQL"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : stack.name === 'Figma' ? (
                        <img
                          src={stack.icon}
                          alt="Figma"
                          style={{ width: 64, height: 64 }}
                        />
                      ) : (
                        <i
                          className={`${stack.icon}`}
                          style={{ fontSize: 64 }}
                          title={stack.name}
                        ></i>
                      )}
                    </div>
                    <span className="text-white text-xs font-medium text-center truncate w-full mb-2">
                      {stack.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Stacks; 