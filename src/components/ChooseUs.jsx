import FeatureSection from "./FeatureSection";
const peter = [ 
  "Our skilled professionals bring years of experience and industry knowledge to your business.", 
  "We offer cutting-edge strategies tailored to your unique needs.", 
  "Our track record of success speaks for itself, with countless satisfied clients.",
  "We prioritize your goals and work closely with you to achieve them.",
  // "From technology to marketing to management, we provide a full spectrum of services for holistic growth."
]
const ChooseUs = () => {
  return (
    <section className="text-white py-8 bg-blue-500"> {/*chooseUsBg*/}

        <FeatureSection
            sectionName="why choose us"
            title="choose us to grow your business"
            description="Partner with us for unparalleled expertise, innovation, and commitment to your business success."
            extraText={peter}
            imageSrc="/images/choose.png"
      />
    </section>

    
  );
};

export default ChooseUs;
