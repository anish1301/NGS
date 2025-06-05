import React from 'react';
import { UsersIcon } from '../components/icons/UsersIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { AdjustmentsHorizontalIcon } from '../components/icons/AdjustmentsHorizontalIcon';


const AboutUsPage: React.FC = () => {
  const teamMembers = [
    { name: 'Dr. Innovate', role: 'Chief AI Strategist', imageUrl: 'https://picsum.photos/seed/team1/200/200' },
    { name: 'Ms. Cloud', role: 'Head of Cloud Solutions', imageUrl: 'https://picsum.photos/seed/team2/200/200' },
    { name: 'Mr. Code', role: 'Lead Software Architect', imageUrl: 'https://picsum.photos/seed/team3/200/200' },
    { name: 'Mx. Data', role: 'Principal Data Scientist', imageUrl: 'https://picsum.photos/seed/team4/200/200' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">About NGSpurs</h1>

      <section className="mb-16 p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-primary-DEFAULT dark:text-gray-100 mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          To empower businesses with transformative technology solutions, leveraging the power of AI, cloud computing, and innovative software development. We strive to be a trusted partner in our clients' digital journey, delivering excellence and driving sustainable growth.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section className="p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-xl">
          <div className="flex justify-center mb-4">
            <EyeIcon className="w-16 h-16 text-secondary-DEFAULT dark:text-secondary-light" />
          </div>
          <h2 className="text-3xl font-semibold text-secondary-DEFAULT dark:text-gray-100 mb-4 text-center">Our Vision</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            To be a global leader in intelligent technology solutions, recognized for our innovation, expertise, and commitment to creating a smarter, more connected world.
          </p>
        </section>

        <section className="p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-xl">
          <div className="flex justify-center mb-4">
            <AdjustmentsHorizontalIcon className="w-16 h-16 text-secondary-DEFAULT dark:text-secondary-light" />
          </div>
          <h2 className="text-3xl font-semibold text-secondary-DEFAULT dark:text-gray-100 mb-4 text-center">Our Values</h2>
          <ul className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 text-center">
            <li><strong className="text-primary-DEFAULT dark:text-primary-light">Innovation:</strong> Continuously exploring new frontiers.</li>
            <li><strong className="text-primary-DEFAULT dark:text-primary-light">Integrity:</strong> Upholding the highest ethical standards.</li>
            <li><strong className="text-primary-DEFAULT dark:text-primary-light">Collaboration:</strong> Working together for shared success.</li>
            <li><strong className="text-primary-DEFAULT dark:text-primary-light">Excellence:</strong> Delivering outstanding quality and results.</li>
            <li><strong className="text-primary-DEFAULT dark:text-primary-light">Client-Centricity:</strong> Putting our clients' needs first.</li>
          </ul>
        </section>
      </div>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-100">Meet Our Leadership (Placeholder)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center p-6 bg-white dark:bg-neutral-dark rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-light dark:border-primary-dark shadow-md"
                onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/placeholder_team/200/200')}
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{member.name}</h3>
              <p className="text-primary-DEFAULT dark:text-primary-light">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT dark:from-primary-dark dark:to-secondary-dark rounded-lg shadow-xl">
        <UsersIcon className="w-16 h-16 text-black mx-auto mb-4"/>
        <h2 className="text-3xl font-semibold text-black dark:text-gray-100 mb-4">Join Our Team</h2>
        <p className="text-lg text-black-100 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to join our growing team. If you are excited about technology and want to make an impact, explore our career opportunities.
        </p>
        <a 
          href="#careers" 
          onClick={(e) => {e.preventDefault(); alert("Careers page coming soon!")}} 
          className="inline-block bg-white text-primary-DEFAULT font-semibold px-8 py-3 rounded-md hover:bg-gray-200 dark:bg-neutral-light dark:text-primary-dark dark:hover:bg-gray-300 transition-colors"
        >
          View Open Positions (Coming Soon)
        </a>
      </section>
    </div>
  );
};

export default AboutUsPage;