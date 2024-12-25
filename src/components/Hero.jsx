const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="hero bg-base-200  screen-minus-navbar"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/image5.png"
          alt="profile"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I am Full Stack Developer</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
