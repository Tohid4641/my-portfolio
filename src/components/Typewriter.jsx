import { ReactTyped } from "react-typed";

const Typewriter = () => {
  return (
    <span>
      <ReactTyped
        strings={[
          "Full Stack Developer",
          "MERN Stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "React.js Developer",
          "Node.js Developer",
        ]}
        typeSpeed={40}
      />
    </span>
  );
};

export default Typewriter;
