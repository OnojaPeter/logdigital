function AboutPage() {

    return (
      <>
        <section>
          <div className="  pb-8 md:pb-14">
            <div className="h-28 sm:h-40 relative">
              <div className=" w-full bg-black blur-sm absolute inset-0">
                <img className="h-28 sm:h-40 object-cover w-full" src="/images/media-marketing.jpg" alt="" />             
              </div>

              <div className="flex h-full justify-center items-center relative">
                <h1 className="uppercase text-gray-100 text-4xl sm:text-5xl md:text-6xl font-semibold  ">About Us</h1>
              </div>
            </div>
            
            <div className="space-y-3 text-lg font-medium text-gray-600 mt-6 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
              <div className="space-y-3">
                <p className="text-gray-800 text-xl sm:text-3xl text-center">Welcome to LogDigital Limited: Your Partner in Tech, Marketing, and Business Management Excellence</p>
                 <div className="space-y-3 text-justify">
                  <p>
                    At <span className="text-xl text-gray-800">LogDigital</span>, we transform visionary ideas into tangible success stories. Our firm stands at the intersection of cutting-edge technology, strategic marketing, and dynamic business management, offering a holistic approach to driving growth and innovation.
                    In an era where digital transformation is paramount, we equip businesses with the tools, strategies, and insights needed to stay ahead of the curve.
                  </p> 
                  <p>
                    <span className="text-xl text-gray-800">Our tech solutions</span> harness the power of the latest advancements, ensuring seamless integration and optimal performance. Meanwhile, <span className="text-xl text-gray-800">our marketing strategies</span> are tailored to capture the essence of your brand, engaging your target audience with precision and creativity.
                    But we don’t stop there. <span className="text-xl text-gray-800">Our business management services</span> are designed to streamline operations, enhance efficiency, and foster sustainable growth.
                  </p> 
                  <p>
                    Whether you’re a startup looking to scale or an established enterprise aiming to innovate, LogDigital is your trusted partner in navigating the complexities of the modern business landscape.
                    Join us on a journey of innovation, impact, and excellence. At LogDigital, we don't just envision the future—we create it.
                  </p>

                  {/*USING THIS MAYBE*/}
                  <p>
                    At LogDigital, we are at the forefront of technological innovation, offering a comprehensive suite of
                    tech services designed to empower businesses and streamline operations. Our expert team of IT
                    professionals is dedicated to providing cutting-edge solutions that cater to the diverse needs of our clients,
                    ensuring they stay competitive in an ever-evolving digital landscape.
                    Our tech services encompass everything from IT support and network management to advanced
                    cybersecurity and cloud solutions. Whether you’re looking to optimize your current infrastructure,
                    enhance your cybersecurity measures, or leverage the power of cloud computing, LogDigital has the
                    expertise and resources to help you achieve your goals.
                    By partnering with LogDigital, you gain access to state-of-the-art technology and personalized
                    service that drives efficiency, security, and innovation. Let us help you navigate the complexities of the
                    digital world and take your business to the next level.
                  </p>
                 </div>
                
              </div>

              

              {/* <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum magni repellendus sit reiciendis est vel nobis? 
                Est reiciendis praesentium minus at adipisci, eius expedita possimus illo numquam, ipsam, suscipit quia. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi harum doloribus neque adipisci qui, 
                vitae veniam aliquam, reprehenderit eum quo minus. Voluptatem impedit corrupti corporis quae molestiae? Cumque, eum.
              </p> */}
            </div>           
          </div>
        </section>
      </>
    )
  }
  
  export default AboutPage