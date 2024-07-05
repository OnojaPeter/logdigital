import FeatureSection from "./FeatureSection";
const peter = [ "results-driven approach", "Social Mediaexpertise in multiple platforms", "continuous optimization"]
const ChooseUs = () => {
  return (
    <section className="bg-gray-200 py-20">

        <FeatureSection
            sectionName="why choose us"
            title="choose us to grow your business"
            description="Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. ut accumsan."
            extraText={peter}
            imageSrc="/images/laptop-office.jpg"
      />

        {/* <FeatureSection
            title="Feature with Icon"
            description="Description with an icon."
            buttonText="Get Started"
            imageSrc="/images/black-pic.png"
            icon="images/service-logo.png"
        /> */}
    </section>

    
  );
};

export default ChooseUs;
