import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="section" id="about">
      <SectionTitle
        title="About Me"
        subtitle="A short introduction about who I am"
      />

      <div className="about-card">
        <p>
          I am a student interested in front-end development and software
          technology. I enjoy learning how websites work and converting ideas
          into useful digital experiences.
        </p>

        <p>
          My current goal is to improve my knowledge of JavaScript and React
          while creating clean, accessible, and responsive web applications.
        </p>
      </div>
    </section>
  );
}

export default About;
