import React from 'react';
import LeadForm from '../components/LeadForm';
import { MapPinIcon } from '../components/icons/MapPinIcon';
import { EnvelopeIcon } from '../components/icons/EnvelopeIcon';
import { PhoneIcon } from '../components/icons/PhoneIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-50">Contact Us</h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        We're here to help and answer any question you might have. We look forward to hearing from you!
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <div className="space-y-8 p-6 md:p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Our Contact Details</h2>
          
          <div className="flex items-start space-x-4">
            <MapPinIcon className="w-8 h-8 text-primary-DEFAULT dark:text-primary-light mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Our Office</h3>
              <p className="text-gray-600 dark:text-gray-300">123 Tech Avenue, Innovation City, TX 75001, USA (Placeholder)</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="w-8 h-8 text-primary-DEFAULT dark:text-primary-light mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Email Us</h3>
              <a href="mailto:info@ngspurs.com" className="text-primary-DEFAULT dark:text-primary-light hover:underline">info@ngspurs.com</a>
              <p className="text-gray-600 dark:text-gray-300 text-sm">For general inquiries</p>
              <a href="mailto:support@ngspurs.com" className="text-primary-DEFAULT dark:text-primary-light hover:underline">support@ngspurs.com</a>
              <p className="text-gray-600 dark:text-gray-300 text-sm">For technical support</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <PhoneIcon className="w-8 h-8 text-primary-DEFAULT dark:text-primary-light mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Call Us</h3>
              <a href="tel:+1234567890" className="text-primary-DEFAULT dark:text-primary-light hover:underline">+1 (234) 567-890 (Placeholder)</a>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Mon - Fri, 9am - 6pm CST</p>
            </div>
          </div>

          {/* Placeholder for Map */}
          <div className="mt-8">
             <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">Find Us Here</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-neutral-darker rounded-md overflow-hidden">
              {/* Replace with actual map embed or image */}
              <img 
                src="https://picsum.photos/seed/maplocation/600/350" 
                alt="Map placeholder showing NGSpurs office location" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-300 mt-1 text-center">Map data &copy; Placeholder Maps</p>
          </div>
        </div>

        {/* Lead Form Section */}
        <div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;