import pageData from "../data/contact-us";
import * as sections from "../sections";

const ContactUs = () => {
  return (
    <main>
      {pageData.sections
        .sort((a, b) => a.position - b.position)
        .map(({ component, position, ...props }) => {
          const Section = sections[component];
          if (Section) {
            // ideally position in key should be replaced by some ID
            return <Section key={position} {...props} />;
          }
          return null;
        })}
    </main>
  );
};

export default ContactUs;
