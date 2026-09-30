import SectionTitle from "./SectionTitle";
import { contactDetails } from "../data/portfolioData";

function Contact() {
  return (
    <section className="section alternate-section" id="contact">
      <SectionTitle
        title="Contact Information"
        subtitle="You can contact me using the details below"
      />

      <div className="contact-grid">
        {contactDetails.map((item) => (
          <article className="contact-card" key={item.label}>
            <h3>{item.label}</h3>

            {item.link ? (
              <a href={item.link}>{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Contact;
