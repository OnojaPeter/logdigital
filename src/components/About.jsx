import FeatureSection from "./FeatureSection";

const About = () => {
  return (
    <section className="py-10 md:py-20 text-gray-700 aboutBg">    
      <FeatureSection
        sectionName="about us"
        title="Helping Millions Grow Better Since 2010"
        description="Et et id laoreet ultricies elementum venenatis ornare.  In lorem lacus quis egestas tincidunt neque ut accumsan."
        moreDescription="Et et id laoreet ultricies elementum venenatis ornare.  In lorem lacus quis egestas tincidunt neque ut accumsan."
        buttonText="Learn More"
        imageSrc="/images/meeting-group.jpg"
      />
    </section>
  );
};

export default About;
