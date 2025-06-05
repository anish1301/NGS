import React, { useState } from 'react';
import Input from './common/Input';
import Textarea from './common/Textarea';
import Button from './common/Button';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    // In a real application, you would make an API call to your backend here:
    // try {
    //   const response = await fetch('/api/submit-lead', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('Thank you for your message! We will get back to you soon.');
    //     setFormData({ name: '', email: '', company: '', message: '' });
    //   } else {
    //     const errorData = await response.json();
    //     setSubmitMessage(errorData.message || 'An error occurred. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Submission error:', error);
    //   setSubmitMessage('An error occurred. Please try again.');
    // } finally {
    //   setIsSubmitting(false);
    // }

    // Dummy submission logic (current simulation)
    console.log('Lead Form Data:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitMessage('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 md:p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">Get in Touch</h2>
      <Input
        label="Full Name"
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="e.g. Jane Doe"
      />
      <Input
        label="Email Address"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="e.g. jane.doe@example.com"
      />
      <Input
        label="Company (Optional)"
        id="company"
        name="company"
        type="text"
        value={formData.company}
        onChange={handleChange}
        placeholder="e.g. Example Corp"
      />
      <Textarea
        label="Your Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="How can we help you today?"
      />
      <Button type="submit" isLoading={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      {submitMessage && (
        <p className={`mt-4 text-center text-sm ${submitMessage.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {submitMessage}
        </p>
      )}
    </form>
  );
};

export default LeadForm;