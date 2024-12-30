import React from "react";

const Experience = () => {
  return (
    <section id="experience" aria-label="Experience" className="bg-base-200 h-screen-minus-navbar">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">NOV 2022 - SEP 2024</time>
            <div className="text-lg font-black">Backend Developer</div>
            <p className="text-md font-bold">Redbytes Software Pvt. Ltd</p>
            Worked as a Backend Developer, delivering 8+ projects, creating scalable APIs, and integrating third-party services.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">AUG 2021 - NOV 2022</time>
            <div className="text-lg font-black">MERN Stack Developer</div>
            <p className="text-md font-bold">Tekisky Pvt. Ltd</p>
            Worked as a MERN Stack Developer, gaining hands-on experience by building and delivering live projects.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">FEB 2021 - JUL 2021</time>
            <div className="text-lg font-black">Diploma in Python Web Development (Awareness)
            </div>
            <p className="text-md font-bold">FirstBitSolution</p>
            Successfully completing 300 hours training in python web development held online at FistBit Solutions, Pune for
            the period of Feb-21 to July-21.
          </div>
          <hr />
        </li>
      </ul>

    </section>
  );
};

export default Experience;
