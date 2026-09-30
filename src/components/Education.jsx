import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section className="section alternate-section" id="education">
      <SectionTitle
        title="Education"
        subtitle="My academic background"
      />

      <div className="education-list">
        {education.map((item) => (
          <article
            className="education-card"
            key={`${item.qualification}-${item.institution}`}
          >
            <span className="period">{item.period}</span>
            <h3>{item.qualification}</h3>
            <h4>{item.institution}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
