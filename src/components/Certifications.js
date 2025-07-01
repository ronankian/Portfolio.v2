import React from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedContent from './AnimatedContent';

const certificates = [
  {
    src: 'assets/images/certificates/Web Development Track.png',
    caption: 'Web Development Track, 2025',
  },
  {
    src: 'assets/images/certificates/Computer Engineering Tracks.png',
    caption: 'Computer Engineering Tracks, 2025',
  },
  {
    src: 'assets/images/certificates/Introduction to Figma.jpg',
    caption: 'Introduction to Figma, 2025',
  },
  {
    src: 'assets/images/certificates/Data Analytics Essentials.jpg',
    caption: 'Data Analytics Essentials, 2025',
  },
  {
    src: 'assets/images/certificates/Introduction to Cybersecurity.jpg',
    caption: 'Introduction to Cybersecurity, 2025',
  },
  {
    src: 'assets/images/certificates/DICT4A WiTech-Batangas ADSE.jpg',
    caption: 'DICT4A WiTech-Batangas ADSE, 2024',
  },
  {
    src: 'assets/images/certificates/ICpEP Student Membership.jpg',
    caption: 'ICpEP Student Membership, 2023',
  },
];

// Split certificates into rows of 3
const certificateRows = [];
for (let i = 0; i < certificates.length; i += 3) {
  certificateRows.push(certificates.slice(i, i + 3));
}

const Certifications = () => {
  // Always pad to 3 rows
  while (certificateRows.length < 3) {
    certificateRows.push([]);
  }

  // Hardcode up to 3 hooks for up to 3 rows
  const [ref0, inView0] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const rowRefs = [ref0, ref1, ref2];
  const rowInViews = [inView0, inView1, inView2];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
            Validating My Skills and Learning Journey
          </h2>
          <p className="text-gray-300 text-md max-w-2xl mx-auto mb-4">
            These certifications highlight my commitment to continuous learning and verify my knowledge across various technologies, tools, and development practices.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {certificateRows.map((row, rowIdx) =>
            row.length > 0 ? (
              <div
                ref={rowRefs[rowIdx]}
                key={rowIdx + '-' + row.length}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-700 ease-out transform
                  ${rowInViews[rowIdx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                  ${rowIdx === 0 ? 'delay-0' : rowIdx === 1 ? 'delay-200' : 'delay-400'}`}
              >
                {row.map((cert, idx) => (
                  <div key={idx} className="flex flex-col items-center h-full w-full">
                    <img
                      src={cert.src}
                      alt={cert.caption}
                      className="w-full h-[270px] object-cover rounded-lg shadow-lg bg-gray-900 border border-gray-800"
                    />
                    <span className="italic text-gray-300 mt-2 text-center block">{cert.caption}</span>
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

export default Certifications;
