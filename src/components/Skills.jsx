import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle
        title="Skills"
        subtitle="Technologies and abilities I am developing"
      />

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
