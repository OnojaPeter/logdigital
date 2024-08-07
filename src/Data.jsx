const services = [
  {
    title: "Digital Marketing",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
  {
    title: "Social Media",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
  {
    title: "Creative Branding",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
  {
    title: "Graphic Design",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
  {
    title: "Storytelling",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
  {
    title: "Copywriting",
    description: "Elementum venenatis ornare. Sollicitudin mauris.",
  },
];

const servicesDetail = [
  {
    id: 1,
    name: "Marketing & Advertising",
    bannerImg: 'banner2.webp',
    shortDescription: "We offer an extensive range of market and advertising services designed to elevate your brand, enhance your market presence, and drive business growth. ",
    description:
      "At LogDigital, we’re not just about marketing; we’re about creating meaningful connections and driving your business forward. Whether you’re a budding startup or an established brand, our expert team is here to help you navigate the dynamic world of marketing and advertising with innovative strategies tailored to your unique needs.",
    services: [
      {
        service: "Digital Marketing",
        image: 'digital-marketing.webp',
        description:
          "In today’s digital age, a robust online presence is essential. Our digital marketing services are designed to enhance your visibility, engage your audience, and drive conversions. Here’s how we can help:",
        subService: [
          {
            name: "Search Engine Optimization (SEO)",
          },
          {
            name: "Social Media Marketing",
          },
          {
            name: "Content Marketing",
          },
          {
            name: "Email Marketing",
          },
        ],
      },
      {
        service: "Branding and Creative Services",
        image: 'branding-and-creative.webp',
        description:
          "Your brand is your identity. It’s what sets you apart from the competition. Our branding and creative services help you build a strong, cohesive brand that resonates with your target audience.",
        subService: [
          {
            name: "Brand Strategy",
          },
          {
            name: "Graphic Design",
          },
          {
            name: "Video Production (SVG and Whiteboard Animation)",
          },
          {
            name: "Website Design and Development",
          },
        ],
      },
      {
        service: "Paid Advertising",
        image: 'paid-advertising.webp',
        description:
          "Maximize your reach and ROI with our paid advertising services. We create targeted ad campaigns that get your message in front of the right people at the right time.",
        subService: [
          {
            name: "Pay-Per-Click (PPC) Advertising",
          },
          {
            name: "Social Media Ads",
          },
          {
            name: "Display Advertising",
          },
        ],
      },
      {
        service: "Market Research and Analytics",
        image: 'analytics.webp',
        description:
          "Informed decisions lead to better outcomes. Our market research and analytics services provide you with the insights you need to understand your market, audience, and the effectiveness of your campaigns.",
        subService: [
          {
            name: "Consumer Insights",
          },
          {
            name: "Competitive Analysis",
          },
          {
            name: "Campaign Analytics",
          },
        ],
      }
    ],
    path: "/services/marketing-advertising",
  },
  {
    id: 2,
    name: "Technology Services",
    bannerImg: 'tech-support.webp',
    shortDescription: "Our tech services encompass everything from IT support and network management to advanced cybersecurity and cloud solutions. ",
    description:
      "We believe in harnessing the power of technology to drive innovation, streamline operations, and empower your business to reach new heights. Our expert team is here to provide you with top-notch tech solutions tailored to your unique needs. Whether you’re a startup, a growing business, or an established enterprise, we’re dedicated to helping you navigate the ever-evolving tech landscape with ease and confidence.",
    services: [
      {
        service: "IT Consulting",
        image: 'consulting.webp',
        description:
          "Navigating the complexities of technology can be daunting. Our IT consulting services are designed to provide you with expert guidance and strategic insights to help you make informed decisions. Whether you need help with IT infrastructure, software development, or cybersecurity, our consultants are here to assist you.",
        subService: [
          {
            name: "IT Strategy and Planning",
          },
          {
            name: "Technology Assessments",
          },
          {
            name: "Project Management",
          },
        ],
      },
      {
        service: "Project Management",
        image: 'project-management.webp',
        description: "Focus on your core business while we take care of your IT needs. Our managed IT services offer proactive monitoring, maintenance, and support to keep your systems running smoothly and efficiently.",
        subService: [
          {
            name: "24/7 IT Support",
          },
          {
            name: "Network Management",
          },
          {
            name: "Data Backup and Recovery",
          },
        ],
      },
      {
        service: "Cybersecurity",
        image: 'cyber.webp',
        description: "In today’s digital age, cybersecurity is more important than ever. Our comprehensive cybersecurity services are designed to safeguard your business against threats and vulnerabilities.",
        subService: [
          {
            name: "Risk Assessments",
          },
          {
            name: "Compliance Services",
          },
          {
            name: "Incident Response",
          },
        ],
      },
      {
        service: "Cloud Solutions",
        image: 'cloud-solutions.webp',
        description: "Leverage the power of the cloud to enhance flexibility, scalability, and efficiency. Our cloud solutions are tailored to meet your specific needs, whether you’re looking to migrate to the cloud, optimize your current cloud infrastructure, or develop cloud-native applications.",
        subService: [
          {
            name: "Cloud Migration",
          },
          {
            name: "Cloud Management",
          },
          {
            name: "Cloud Security",
          },
        ],
      },
      {
        service: "Software Development",
        image: 'software-dev.webp',
        description: "Bring your ideas to life with our custom software development services. Our team of skilled developers is here to create innovative solutions that drive your business forward.",
        subService: [
          {
            name: "Custom Applications",
          },
          {
            name: "Mobile App Development",
          },
          {
            name: "System Integration",
          },
        ],
      },
    ],
    path: "/services/tech-services",
  },
  {
    id: 3,
    name: "Management services",
    bannerImg: 'bars.webp',
    shortDescription: "With a commitment to excellence, and a focus on maximizing value for our clients, we offer a range of management services tailored to meet their unique needs.",
    description: "Effective business management is the key to unlocking your organization’s full potential. As your trusted partner, we provide comprehensive business management services designed to streamline operations, boost productivity, and drive growth. Whether you’re a startup or a well-established company, our expert team is here to help you navigate the complexities of business management with ease and confidence.",
    services: [
      {
        service: "Business Consultancy",
        image: 'consulting.webp',
        description: "Our Management services encompass everything",
        subService: [
          {
            name: "Strategic Planning",
          },
          {
            name: "Operational Improvement",
          },
          {
            name: "Market Entry Strategies",
          },
        ],
      },
      {
        service: "Financial Management",
        image: 'financial.webp',
        description: "To accomplish the aims and objectives of an organization, financial resources must be planned for, arranged, controlled, and monitored. Ensuring that a company maintains its financial stability and ability to fulfil its commitments is an essential component of business operations. ",
        subService: [
          {
            name: "Accounting Services",
          },
          {
            name: "Financial Planning and Analysis",
          },
          {
            name: "Tax Advisory",
          },
          {
            name: "Audit Services",
          },
        ],
      },
      {
        service: "Project Management",
        image: 'project-management.webp',
        description: "Managing projects as a service includes organizing, carrying out, and supervising projects to guarantee they are finished on schedule, within the specified budget, and meeting the necessary quality criteria. It involves various tasks and duties designed to attain specific project aims and objectives.",
        subService: [
          {
            name: "Project Planning and Execution",
          },
          {
            name: "Risk Management",
          },
          {
            name: "Quality Assurance",
          },
        ],
      },
      {
        service: "Facilities Management",
        image: 'facility-management.webp',
        description: "Ensuring efficient facilities management requires aligning the physical workspace with the organization's workforce and operations. This practice combines elements of business management, architectural principles, and the sciences of human behavior and engineering.",
        subService: [
          {
            name: "Maintenance Services",
          },
          {
            name: "Space Planning",
          },
          {
            name: "Security Management",
          },
        ],
      },
      {
        service: "Hospitality and leisure industry Management",
        image: 'leisure.webp',
        description: "In the hospitality and leisure industry, management involves the supervision and organization of different services and activities to guarantee customer contentment, efficient operations, and financial success.",
        subService: [
          {
            name: "Botanical Gardens",
          },
          {
            name: "Public Parks",
          },
        ],
      },
      {
        service: "Hotels and Resorts",
        image: 'hotel-resorts.webp',
        description: "Logdigital Hotels and Resorts management services encompass a comprehensive range of activities aimed at ensuring the smooth operation, high guest satisfaction, and profitability of the hotels and resorts under its management. These services are designed to cover every aspect of hotel and resort operations, from front desk management to financial oversight.",
        subService: [
          {
            name: "Luxury Hotels",
          },
          {
            name: "Boutique Hotels",
          },
          {
            name: "Resorts",
          },
          {
            name: "Budget Hotels",
          },
        ],
      },
      {
        service: "Bars and Nightclubs",
        image: 'bars.webp',
        description: "Managing bars and nightclubs requires a unique set of skills and services to ensure smooth operations, attract and retain customers, maintain safety, and achieve profitability.",
        subService: [
          {
            name: "Bars",
          },
          {
            name: "Nightclubs",
          },
        ],
      },
      {
        service: "Indoor Services",
        image: 'indoor-services.webp',
        description: "Management of indoor services encompasses a broad range of activities and responsibilities to ensure smooth operations, optimal efficiency, and high-quality service delivery in various indoor environments, such as offices, event spaces, retail establishments etc.",
        subService: [
          {
            name: "Event Venues",
          },
          {
            name: "Restaurants",
          },
          {
            name: "Theaters and Cinemas",
          },
          {
            name: "Spas and Wellness Centers",
          },
        ],
      },
      {
        service: "Outdoor Services",
        image: 'outdoor-services.webp',
        description: "Management of outdoor services involves coordinating and overseeing various activities to ensure that outdoor environments are well-maintained, safe, and attractive. ",
        subService: [
          {
            name: "Outdoor Event Spaces",
          },
          {
            name: "Adventure Parks",
          },
        ],
      },
    ],
    path: "/services/management-services",
  },
  {
    id: 4,
    name: "Outsourcing (BPO)",
    bannerImg: 'banner3.webp',
    shortDescription: "We leverage cutting-edge technology, industry best practices, and a global talent pool to deliver superior BPO services that drive business success. ",
    description: "In the fast-paced world of business, staying ahead means focusing on what you do best while entrusting other critical tasks to experts. At Logdigital, we offer comprehensive outsourcing (BPO) services designed to streamline your operations, boost efficiency, and drive growth. Whether you’re in tech, marketing, advertising, or management services, we’re here to handle the heavy lifting so you can concentrate on your core business.",
    services: [
      {
        service: "Tech Support and IT Services",
        image: 'tech-support.webp',
        description: "Keeping your tech infrastructure running smoothly is crucial for any business. Our tech support and IT services provide you with the expertise you need to ensure optimal performance and security.",
        subService: [
          {
            name: "Help Desk Support",
          },
          {
            name: "Network Management",
          },
          {
            name: "IT Infrastructure Management",
          },
          {
            name: "Cybersecurity",
          },
        ],
      },
      {
        service: "Digital Marketing and Advertising",
        image: 'digital-marketing2.webp',
        description: "Effective marketing and advertising are key to reaching your audience and driving growth. Our digital marketing and advertising services help you create impactful campaigns that deliver results.",
        subService: [
          {
            name: "Social Media Management",
          },
          {
            name: "SEO and SEM",
          },
          {
            name: "Content Creation",
          },
          {
            name: "PPC Advertising",
          },
        ],
      },
      {
        service: "Customer Service and Support",
        image: 'customer-service.webp',
        description: "Exceptional customer service is essential for maintaining customer satisfaction and loyalty. Our customer service and support solutions ensure that your customers receive the assistance they need, when they need it.",
        subService: [
          {
            name: "Call Center Services",
          },
          {
            name: "Email and Chat Support",
          },
          {
            name: "Technical Support",
          },
          {
            name: 'Customer Relationship Management (CRM)'
          }
        ],
      },
      {
        service: "Business Management Services",
        image: 'business-management.webp',
        description: "Streamline your operations and improve efficiency with our business management services. From administrative tasks to financial management, we provide the support you need to keep your business running smoothly.",
        subService: [
          {
            name: "Administrative Support",
          },
          {
            name: "Financial Management",
          },
          {
            name: "HR Management",
          },
          {
            name: "Project Management",
          },
        ],
      },
    ],
    path: "/services/outsourcing",
  },
];
export { services, servicesDetail };
