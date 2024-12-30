import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="hero box-border bg-base-200 h-screen-minus-navbar"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/profile.png"
          alt="profile"
          className="max-w-sm rounded-lg md:block hidden"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-blue-800">Shaikh Tauhid</span>
          </h1>
          <h3 className="text-2xl pt-6 ">
            <span className="text-blue-800">a</span> <Typewriter />
          </h3>
          <p className="py-6">
            Let's build something amazing together. Explore my work below!
          </p>
          <div>
            <button className="mr-5 btn btn-outline btn-primary">Hire Me</button>
            <button className="btn btn-outline btn-secondary">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
