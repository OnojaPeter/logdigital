import { FaHeart, FaLightbulb, FaHandsHelping, FaUserShield, FaLeaf, FaGlobe, FaRocket, FaHandshake, FaUserFriends, FaRunning, FaBolt   } from 'react-icons/fa';

const coreValues = [
  { icon: FaLightbulb, title: 'Innovation', description: 'We prioritize creativity and embrace the latest technologies to deliver cutting-edge solutions that drives business growth.'},
  { icon: FaUserFriends, title: 'Customer Focus', description: 'We prioritize understanding client’s needs and challenges to deliver personalized services that exceed expectations.' },
  { icon: FaUserShield, title: 'Integrity', description: 'We conduct our business with honesty and transparency, building trust and long-lasting relationships with our clients.' },
  { icon: FaRocket, title: 'Excellence', description: 'We strive for the highest standards in every project, ensuring that our services are of exceptional quality.' },
  { icon: FaHandsHelping, title: 'Collaboration', description: 'We value teamwork, leveraging diverse skills and perspectives to foster collaboration and achieve optimal outcomes.' },
  { icon: FaRunning , title: 'Agility', description: 'We stay flexible and responsive, quickly adapting to new trends to keep our clients competitive.' },
  { icon: FaLeaf, title: 'Sustainability', description: 'We prioritize sustainable practices benefiting clients, employees, the community, and the environment.' },
  { icon: FaBolt , title: 'Empowerment', description: 'We empower clients and team members with tools, knowledge, and support to achieve their goals and unlock full potential.'},
];

const CoreValues = () => {
  return (
    <section className="py-8 md:py-20 bg-blue-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
            <span className="uppercase font-bold px-3 py-1 border-2 border-gray-800 rounded-full">Values</span>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-900 mt-4 mb-8 md:mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-100 transition-colors duration-300">
              <value.icon className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
