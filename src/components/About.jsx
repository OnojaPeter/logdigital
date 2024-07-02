import FeatureSection from "./FeatureSection";

const About = () => {
  return (
    <section className="py-10 md:py-20">    
      <FeatureSection
        sectionName="about us"
        title="Helping Millions Grow Better Since 2010"
        description="Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. In lorem lacus quis egestas tincidunt neque ut accumsan."
        buttonText="Learn More"
        imageSrc="/images/black-pic.png"
      />
    </section>
  );
};

export default About;
