import FeatureSection from "./FeatureSection";

const About = () => {
  return (
    <section className="py-8 text-gray-700 aboutBg">    
      <FeatureSection
        sectionName="about us"
        title="Helping Millions Grow Better"
        description="At LogDigital Limited, we specialize in delivering comprehensive tech, marketing, and business management services that drive growth and efficiency. "
        moreDescription="Our team of experts is dedicated to helping you achieve your business goals with cutting-edge solutions and personalized strategies."
        buttonText="Learn More"
        link="/about"
        imageSrc="/images/new.png"
      />
    </section>
  );
};

export default About;
