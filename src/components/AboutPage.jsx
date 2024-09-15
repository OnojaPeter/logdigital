function AboutPage() {
    const aboutDetails = [
      {
        heading: '',
        texts: 'We are dedicated to propelling businesses into the future with cutting-edge technology, innovative marketing strategies, and comprehensive business development solutions. Established by visionary founders with a passion for excellence, our firm is committed to delivering unparalleled services that drive growth, efficiency, and success for our clients.'
      },
      {
        heading: 'Our Mission',
        texts: 'Our mission is to empower businesses by providing bespoke tech solutions, transformative marketing strategies, and strategic business development services. We aim to be the catalyst that helps our clients navigate the complexities of the modern business landscape, ensuring they remain competitive and successful.'
      },
      {
        heading: 'Our Vision',
        texts: 'We envision a world where businesses, regardless of size or industry, have access to the tools and expertise they need to thrive in an ever-evolving marketplace. We strive to be the go-to partner for companies seeking innovative solutions and strategic guidance.'
      }

    ]
    return (
      <>
        <section >
          <div className="bg-gray-50  pb-8 md:pb-14">
              <div className=" w-full relative h-48 sm:h-52">
                <div className="aboutbg absolute h-full w-full top-0 left-0"></div>
                <img className="h-48 sm:h-52 object-cover w-full " src="/images/business-5475663-1280-66b1506c24d0f.webp" alt="" />    {/*media-marketing.jpg*/}
                <h1 className="uppercase text-gray-100 text-4xl sm:text-5xl md:text-6xl font-semibold absolute inset-0 flex justify-center items-center">About Us</h1>          
              </div>
            
            <div className="space-y-3 text-lg font-medium text-gray-600 mt-6 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-32">
              <div className="space-y-3">
                <p className="text-blue-400 text-xl sm:text-3xl text-center md:px-10">
                  Welcome to LogDigital Limited: Your Partner in Tech, Marketing, and Business Management Excellence
                </p>
                 <div className="space-y-3 text-justify">
                  {aboutDetails.map((about, index) => 
                    <div key={index}>
                      <span className="text-blue-400 text-xl">{about.heading}</span>
                      <p>{about.texts}</p>
                    </div>
                  )}
                 </div>
                
              </div>
            </div>           
          </div>
        </section>
      </>
    )
  }
  
  export default AboutPage