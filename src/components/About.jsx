import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Me"
      className="flex justify-center items-center flex-col lg:flex-row-reverse"
    >
      <div className="ml-10">
        <h2 className="text-5xl mb-30">About Me</h2>
        <p className="text-md mt-10">
          Experienced Full Stack and Backend Developer with 3 years of expertise
          in Node.js and the MERN stack. Proficient in building scalable backend
          solutions, creating REST APIs, and integrating third-party services.
          Successfully delivered 8+ projects, including cost estimation tools
          and multi-service applications. Skilled in problem-solving, team
          collaboration, and deploying applications using PM2 and cloud
          platforms.
        </p>
        <Link to={'/contact'}><button className="btn btn-primary mt-10">Contact Me</button></Link>
      </div>
      <div>
        <img
          src="/assets/profile-about.png"
          alt="about-profile"
          className="lg:max-w-md max-w-sm"
        />
      </div>
    </section>
  );
};

export default About;
