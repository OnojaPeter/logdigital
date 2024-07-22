import FeatureSection from "./FeatureSection";
const peter = [ "results-driven approach", "Social Media expertise in multiple platforms", "continuous optimization"]
const ChooseUs = () => {
  return (
    <section className="text-white py-8 chooseUsBg">

        <FeatureSection
            sectionName="why choose us"
            title="choose us to grow your business"
            description="Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. ut accumsan."
            extraText={peter}
            imageSrc="/images/choose.png"
      />
    </section>

    
  );
};

export default ChooseUs;
