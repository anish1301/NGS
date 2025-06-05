import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import { PRODUCTS_DATA, SERVICES_DATA } from '../constants';
// import { ArrowRightIcon } from '../components/icons/ArrowRightIcon';
import { EyeIcon } from '../components/icons/EyeIcon';
import { LightBulbIcon } from '../components/icons/LightBulbIcon';
import { UserIcon } from '../components/icons/UserIcon';
import { StarIcon } from '../components/icons/StarIcon';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Import the hook


const AnimatedSection: React.FC<{children: React.ReactNode, className?: string, animationType?: 'slideUp' | 'fadeIn' | 'slideLeft' | 'slideRight', delay?: string }> = ({ children, className, animationType = 'slideUp', delay = 'delay-0' }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
  
  let initialClasses = 'opacity-0';
  if (animationType === 'slideUp') initialClasses += ' translate-y-10';
  else if (animationType === 'slideLeft') initialClasses += ' -translate-x-10';
  else if (animationType === 'slideRight') initialClasses += ' translate-x-10';
  // fadeIn has no transform

  let visibleClasses = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${delay} ${isVisible ? visibleClasses : initialClasses} ${className || ''}`}
    >
      {children}
    </section>
  );
};


const HomePage: React.FC = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const displayCount = 3; // Number of products to show at once

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductIndex((prevIndex) => 
        (prevIndex + 1) % PRODUCTS_DATA.length
      );
    }, 3000); // Change products every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < displayCount; i++) {
      const index = (currentProductIndex + i) % PRODUCTS_DATA.length;
      products.push(PRODUCTS_DATA[index]);
    }
    return products;
  };

  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="space-y-16 overflow-x-hidden">
      {/* Hero Section - uses existing Tailwind animations */}
      <section className="text-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down text-black dark:text-white">
            Innovative IT Solutions for a Smarter Future
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.2s] text-black/90 dark:text-white/90">
            NGSpurs delivers cutting-edge AI/ML, cloud, and custom software solutions to transform your business and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <Link to="/services">
              <Button 
                size="lg"
                variant="primary" 
                className="bg-primary-DEFAULT text-white border-2 border-primary-DEFAULT hover:bg-primary-dark hover:border-primary-dark
                dark:bg-primary-DEFAULT dark:border-primary-DEFAULT dark:hover:bg-primary-dark dark:hover:border-primary-dark w-[180px] flex items-center justify-center"
              >
                Explore Services 
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="primary"
                className="bg-primary-DEFAULT text-white border-2 border-primary-DEFAULT hover:bg-primary-dark hover:border-primary-dark
                dark:bg-primary-DEFAULT dark:border-primary-DEFAULT dark:hover:bg-primary-dark dark:hover:border-primary-dark w-[180px] flex items-center justify-center"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Welcome to NGSpurs</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                At NGSpurs, we are passionate about leveraging technology to solve complex challenges and create tangible value for our clients. Specializing in Artificial Intelligence, Machine Learning, Cloud Computing, and bespoke software development, we empower businesses to innovate, optimize, and lead in their respective industries. Our commitment to excellence and a client-centric approach ensures we deliver solutions that are not only technologically advanced but also perfectly aligned with your strategic objectives.
            </p>
            <Link to="/about-us">
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white
                  dark:bg-gradient-to-r dark:from-primary-DEFAULT dark:to-secondary-DEFAULT dark:hover:from-primary-dark dark:hover:to-secondary-dark dark:text-white"
                >
                  Learn More About Us
                </Button>
            </Link>
        </div>
      </AnimatedSection>

      {/* Mission and Vision Sections */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 mb-0">
        <AnimatedSection className="p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-md border border-gray-100 dark:border-gray-800" animationType="slideLeft">
          <div className="flex flex-col items-center text-center">
            <LightBulbIcon className="w-16 h-16 text-primary-DEFAULT dark:text-primary-light mb-4" />
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To empower businesses with transformative technology solutions, leveraging the power of AI, cloud computing, and innovative software development. We strive to be a trusted partner in our clients' digital journey, delivering excellence and driving sustainable growth.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="p-8 bg-white dark:bg-neutral-dark rounded-lg shadow-md border border-gray-100 dark:border-gray-800" animationType="slideRight">
          <div className="flex flex-col items-center text-center">
            <EyeIcon className="w-16 h-16 text-primary-DEFAULT dark:text-primary-light mb-4" />
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To be a global leader in intelligent technology solutions, recognized for our innovation, expertise, and commitment to creating a smarter, more connected world.
            </p>
          </div>
        </AnimatedSection>
      </div>


      {/* Featured Products Section */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-100">Our Flagship Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleProducts().map((product, index) => (
              <div 
                key={`${product.id}-${currentProductIndex}-${index}`}
                className="transform transition-all duration-500 ease-out"
                style={{
                  opacity: 1,
                  transform: 'translateX(0)',
                  animation: 'fadeInRight 0.5s ease-out'
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {PRODUCTS_DATA.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProductIndex ? 'bg-primary-DEFAULT w-4' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentProductIndex(index)}
                aria-label={`Go to product set ${index + 1}`}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white
                dark:bg-gradient-to-r dark:from-primary-DEFAULT dark:to-secondary-DEFAULT dark:hover:from-primary-dark dark:hover:to-secondary-dark dark:text-white"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Services Section */}
      <AnimatedSection className="py-12 bg-neutral-light dark:bg-neutral-dark rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800 dark:text-gray-100">Expert Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div 
                key={service.id}
                className={`transition-all duration-500 ease-out ${ (index === 1) ? 'delay-200' : (index === 2) ? 'delay-400' : ''} `}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white
                dark:bg-gradient-to-r dark:from-primary-DEFAULT dark:to-secondary-DEFAULT dark:hover:from-primary-dark dark:hover:to-secondary-dark dark:text-white"
              >
                Discover All Services 
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-100">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-DEFAULT/10 flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-primary-DEFAULT" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "NGSpurs transformed our business with their AI solutions. Their expertise and dedication to our success were outstanding. The results exceeded our expectations."
              </p>
              <div className="mt-4 flex text-primary-DEFAULT">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-DEFAULT/10 flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-primary-DEFAULT" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Michael Chen</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CEO, InnovateX</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "The cloud migration project was seamless. NGSpurs team showed exceptional technical prowess and project management skills. Highly recommended!"
              </p>
              <div className="mt-4 flex text-primary-DEFAULT">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-DEFAULT/10 flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-primary-DEFAULT" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">COO, DataDrive</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Working with NGSpurs has been a game-changer. Their custom software solutions have significantly improved our operational efficiency."
              </p>
              <div className="mt-4 flex text-primary-DEFAULT">
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
                <StarIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
            Let's discuss how NGSpurs can help you achieve your technology goals.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="primary" 
              className="bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT hover:from-primary-dark hover:to-secondary-dark text-white
              dark:bg-gradient-to-r dark:from-primary-DEFAULT dark:to-secondary-DEFAULT dark:hover:from-primary-dark dark:hover:to-secondary-dark dark:text-white"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;