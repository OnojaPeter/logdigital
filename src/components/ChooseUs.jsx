import FeatureSection from "./FeatureSection";
const peter = [ "results-driven approach", "Social Media expertise in multiple platforms", "continuous optimization"]
const ChooseUs = () => {
  return (
    <section className="text-white py-20 chooseUsBg">

        <FeatureSection
            sectionName="why choose us"
            title="choose us to grow your business"
            description="Et et id laoreet ultricies elementum venenatis ornare. Sollicitudin mauris id aliquet magna adipiscing. ut accumsan."
            extraText={peter}
            // imageSrc="/images/laptop-office.jpg"
      />
    </section>

    
  );
};

export default ChooseUs;
