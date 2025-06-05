import { NavLink, Product, Service, CaseStudy } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Contact', path: '/contact' },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'communishield',
    name: 'CommuniShield',
    tagline: 'Advanced Communication Security',
    description: 'Protecting your vital communications with cutting-edge encryption and threat detection.',
    longDescription: 'CommuniShield offers a comprehensive suite of security features designed to safeguard enterprise communications. From end-to-end encrypted messaging to real-time threat analysis, CommuniShield ensures your data remains confidential and secure. It integrates seamlessly with existing infrastructure, providing robust protection without compromising usability.',
    features: ['End-to-End Encryption', 'Real-time Threat Detection', 'Secure File Sharing', 'Compliance Reporting'],
    benefits: ['Enhanced Data Privacy', 'Protection Against Cyber Threats', 'Improved Regulatory Compliance', 'Seamless Integration'],
    imageUrl: 'https://picsum.photos/seed/communishield/600/400',
    relatedServiceIds: ['ai-ml-solutions', 'custom-software-development']
  },
  {
    id: 'dashplug',
    name: 'DashPlug',
    tagline: 'Intelligent Dashboard Integration',
    description: 'Unify your data sources into a powerful, customizable dashboard experience.',
    longDescription: 'DashPlug empowers businesses by consolidating disparate data sources into a single, intuitive dashboard. With its flexible plugin architecture and AI-driven insights, DashPlug allows users to visualize key metrics, track performance, and make data-driven decisions more effectively. It supports a wide range of integrations for popular business tools and databases.',
    features: ['Unified Data Visualization', 'Customizable Widgets', 'AI-Powered Insights', 'Extensive Plugin Library'],
    benefits: ['Holistic Business Overview', 'Faster Decision Making', 'Increased Operational Efficiency', 'Scalable Architecture'],
    imageUrl: 'https://picsum.photos/seed/dashplug/600/400',
    relatedServiceIds: ['data-analytics', 'cloud-migration']
  },
  {
    id: 'ngcity',
    name: 'NGcity',
    tagline: 'Smart City Management Platform',
    description: 'Transforming urban environments with intelligent, data-driven city operations.',
    longDescription: 'NGcity is a comprehensive platform for smart city management. It leverages IoT, AI, and big data analytics to optimize urban services such as traffic management, public safety, energy consumption, and waste management. NGcity helps municipalities create more sustainable, efficient, and livable environments for their citizens.',
    features: ['IoT Integration', 'AI-Powered Analytics', 'Real-time Monitoring', 'Citizen Engagement Tools'],
    benefits: ['Improved Urban Services', 'Enhanced Sustainability', 'Increased Public Safety', 'Data-Driven Urban Planning'],
    imageUrl: 'https://picsum.photos/seed/ngcity/600/400',
  },
  {
    id: 'i-school',
    name: 'i-School',
    tagline: 'Next-Generation School Management',
    description: 'Empowering educational institutions with a comprehensive and intuitive management system.',
    longDescription: 'i-School is an all-in-one platform designed to streamline school operations, enhance learning experiences, and improve communication between students, teachers, and parents. It covers everything from admissions and attendance to academic reporting and online learning modules.',
    features: ['Student Information System', 'Online Learning Modules', 'Parent-Teacher Communication Portal', 'Automated Reporting'],
    benefits: ['Efficient School Administration', 'Enhanced Learning Outcomes', 'Improved Stakeholder Engagement', 'Data-driven Educational Insights'],
    imageUrl: 'https://picsum.photos/seed/ischool/600/400',
  },
  {
    id: 'k-eye',
    name: 'K-Eye',
    tagline: 'AI-Powered Video Analytics',
    description: 'Unlock actionable insights from your video streams with advanced AI analysis.',
    longDescription: 'K-Eye utilizes state-of-the-art AI and machine learning algorithms to analyze video footage in real-time. It can detect objects, recognize patterns, and identify anomalies, providing valuable insights for security, retail analytics, traffic monitoring, and more.',
    features: ['Real-time Object Detection', 'Behavioral Analysis', 'Facial Recognition (Ethical)', 'Customizable Alerts'],
    benefits: ['Proactive Security', 'Enhanced Operational Awareness', 'Valuable Business Intelligence', 'Automation of Monitoring Tasks'],
    imageUrl: 'https://picsum.photos/seed/keye/600/400',
    relatedServiceIds: ['ai-ml-solutions']
  },
  {
    id: 'ng-tech',
    name: 'NG-Tech',
    tagline: 'Innovative Technology Solutions',
    description: 'Custom technology development to meet your unique business challenges.',
    longDescription: 'NG-Tech represents our custom development arm, focusing on creating bespoke technology solutions. Whether it\'s a complex enterprise application, a specialized AI model, or a unique IoT integration, NG-Tech delivers innovative and impactful results tailored to specific client needs.',
    features: ['Bespoke Software Development', 'AI Model Training & Deployment', 'IoT Solutions', 'System Integration'],
    benefits: ['Tailored to Specific Needs', 'Competitive Advantage', 'Scalable and Future-Proof', 'Expert Development Team'],
    imageUrl: 'https://picsum.photos/seed/ngtech/600/400',
    relatedServiceIds: ['custom-software-development', 'ai-ml-solutions']
  },
  {
    id: 'smartattendance',
    name: 'SmartAttendance',
    tagline: 'Automated Attendance Management',
    description: 'Streamline attendance tracking with our intelligent, contactless solution.',
    longDescription: 'SmartAttendance leverages technologies like facial recognition or RFID/NFC to provide a seamless and accurate attendance management system. It reduces manual effort, minimizes errors, and provides real-time attendance data for businesses and educational institutions.',
    features: ['Contactless Check-in/out', 'Facial Recognition/RFID/NFC Options', 'Real-time Reporting', 'Integration with HR/Payroll Systems'],
    benefits: ['Increased Accuracy', 'Time Savings', 'Improved Compliance', 'Hygienic and Convenient'],
    imageUrl: 'https://picsum.photos/seed/smartattendance/600/400',
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'cloud-migration',
    name: 'Cloud Migration',
    tagline: 'Seamless Transition to the Cloud',
    description: 'Migrate your applications, data, and infrastructure to the cloud with minimal disruption.',
    longDescription: 'Our Cloud Migration services ensure a smooth, secure, and efficient transition to leading cloud platforms like AWS, Azure, or Google Cloud. We handle everything from initial assessment and planning to execution and post-migration optimization, enabling you to leverage the scalability, flexibility, and cost-efficiency of the cloud.',
    process: ['Assessment & Planning', 'Strategy & Design', 'Migration Execution', 'Optimization & Management'],
    benefits: ['Increased Scalability', 'Reduced IT Costs', 'Enhanced Security & Compliance', 'Improved Agility & Innovation'],
    imageUrl: 'https://picsum.photos/seed/cloudmigration/600/400',
    relatedProductIds: ['dashplug']
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & BI',
    tagline: 'Unlock Insights from Your Data',
    description: 'Transform raw data into actionable intelligence with our advanced analytics solutions.',
    longDescription: 'We help businesses harness the power of their data through comprehensive Data Analytics and Business Intelligence services. From data warehousing and ETL processes to advanced statistical modeling and interactive visualizations, we empower you to make informed decisions and drive growth.',
    process: ['Data Collection & Integration', 'Data Warehousing', 'Advanced Analytics & Modeling', 'Visualization & Reporting'],
    benefits: ['Data-Driven Decision Making', 'Improved Operational Efficiency', 'Identification of New Opportunities', 'Enhanced Customer Understanding'],
    imageUrl: 'https://picsum.photos/seed/dataanalytics/600/400',
    relatedProductIds: ['dashplug', 'k-eye']
  },
  {
    id: 'custom-software-development',
    name: 'Custom Software Development',
    tagline: 'Tailored Solutions for Your Unique Needs',
    description: 'Building robust, scalable, and innovative software solutions to address your specific business challenges.',
    longDescription: 'Our custom software development services cover the full lifecycle, from ideation and design to development, testing, deployment, and ongoing support. We specialize in web applications, mobile apps, enterprise systems, and API development, using modern technologies and agile methodologies.',
    process: ['Requirement Analysis', 'UI/UX Design', 'Agile Development', 'QA & Testing', 'Deployment & Support'],
    benefits: ['Solutions Tailored to Business Needs', 'Scalability and Flexibility', 'Competitive Advantage', 'Improved Efficiency and Productivity'],
    imageUrl: 'https://picsum.photos/seed/customsoftware/600/400',
    relatedProductIds: ['ng-tech', 'communishield']
  },
  {
    id: 'ai-ml-solutions',
    name: 'AI/ML Solutions',
    tagline: 'Leverage Artificial Intelligence for Growth',
    description: 'Develop and deploy cutting-edge AI and Machine Learning models to solve complex problems and create new value.',
    longDescription: 'NGSpurs excels in creating AI/ML solutions that drive business transformation. Our expertise includes natural language processing, computer vision, predictive analytics, and reinforcement learning. We help businesses automate processes, gain deeper insights, and deliver personalized experiences.',
    process: ['Problem Definition & Data Assessment', 'Model Development & Training', 'Deployment & Integration', 'Monitoring & Retraining'],
    benefits: ['Process Automation', 'Predictive Insights', 'Personalized Customer Experiences', 'Innovation and Competitive Edge'],
    imageUrl: 'https://picsum.photos/seed/aiml/600/400',
    relatedProductIds: ['k-eye', 'ng-tech', 'communishield']
  },
  {
    id: 'it-ing',
    name: 'IT ing',
    tagline: 'Strategic Guidance for Your Digital Transformation',
    description: 'Expert advice to help you navigate the complexities of technology and achieve your business objectives.',
    longDescription: 'Our IT ing services provide strategic insights and practical guidance to help you optimize your IT infrastructure, streamline operations, and embrace digital transformation. We cover areas like IT strategy, cybersecurity, cloud adoption, and technology roadmapping.',
    process: ['Discovery & Assessment', 'Strategy Formulation', 'Roadmap Development', 'Implementation Support', 'Performance Review'],
    benefits: ['Strategic Alignment of IT with Business Goals', 'Optimized IT Investments', 'Enhanced Cybersecurity Posture', 'Future-Ready Technology Infrastructure'],
    imageUrl: 'https://picsum.photos/seed/iting/600/400',
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'casestudy-1',
    title: 'Enhancing Retail Security with K-Eye AI Analytics',
    clientName: 'Major Retail Chain',
    industry: 'Retail',
    challenge: 'High instances of shoplifting and inefficient manual security monitoring across multiple store locations.',
    solution: 'Deployed K-Eye AI Video Analytics solution to automate threat detection, identify suspicious behavior patterns, and provide real-time alerts to security personnel. Integrated with existing CCTV infrastructure.',
    results: ['25% reduction in shoplifting incidents within 6 months.', 'Improved security staff efficiency by 40%.', 'Actionable insights into customer traffic patterns.'],
    technologiesUsed: ['AI/ML', 'Computer Vision', 'K-Eye Platform'],
    imageUrl: 'https://picsum.photos/seed/casestudy1/600/400',
    relatedProductIds: ['k-eye'],
    relatedServiceIds: ['ai-ml-solutions']
  },
  {
    id: 'casestudy-2',
    title: 'Streamlining Urban Traffic Flow with NGcity Platform',
    clientName: 'Metropolis City Council',
    industry: 'Public Sector / Smart City',
    challenge: 'Severe traffic congestion during peak hours leading to increased pollution and commuter frustration.',
    solution: 'Implemented the NGcity Smart Traffic Management module, integrating IoT sensors and AI algorithms to dynamically adjust traffic signals, provide real-time traffic updates to commuters, and optimize public transport routing.',
    results: ['15% reduction in average commute times.', 'Significant decrease in traffic-related carbon emissions.', 'Improved citizen satisfaction with urban mobility.'],
    technologiesUsed: ['IoT', 'AI/ML', 'Big Data Analytics', 'NGcity Platform'],
    imageUrl: 'https://picsum.photos/seed/casestudy2/600/400',
    relatedProductIds: ['ngcity']
  },
  {
    id: 'casestudy-3',
    title: 'Accelerating Drug Discovery with Custom AI Models',
    clientName: 'PharmaInnovate Inc.',
    industry: 'Pharmaceuticals',
    challenge: 'Long and costly drug discovery cycles, with high failure rates in clinical trials.',
    solution: 'Developed custom AI/ML models (part of NG-Tech services) to analyze vast datasets of genetic information, molecular structures, and clinical trial data. The models predict drug efficacy and potential side effects with higher accuracy.',
    results: ['Reduced pre-clinical research time by 30%.', 'Improved prediction accuracy for successful drug candidates by 20%.', 'Enabled faster identification of promising research avenues.'],
    technologiesUsed: ['AI/ML', 'Predictive Analytics', 'Bioinformatics', 'Custom Python Libraries'],
    imageUrl: 'https://picsum.photos/seed/casestudy3/600/400',
    relatedProductIds: ['ng-tech'],
    relatedServiceIds: ['ai-ml-solutions', 'data-analytics']
  }
];

export const AI_ASSISTANT_SYSTEM_PROMPT = (data: { products: Product[], services: Service[] }): string => `
You are NGSpurs AI Assistant, a helpful and knowledgeable AI for NGSpurs, an IT solutions company specializing in AI/ML.
Your capabilities:
1. Answer questions about NGSpurs' products. Provide concise descriptions, key features, and use cases.
   Available products:
   ${data.products.map(p => `- ${p.name}: ${p.tagline}`).join('\n   ')}
2. Answer questions about NGSpurs' services. Explain what each service entails and its benefits.
   Available services:
   ${data.services.map(s => `- ${s.name}: ${s.tagline}`).join('\n   ')}
3. Explain basic to intermediate AI/ML concepts clearly. Avoid overly technical jargon unless specifically asked.
4. Help users navigate the NGSpurs website. For example, if asked "Where can I find case studies?", direct them to the case studies page. The website has pages for Home, Products, Services, Case Studies, About Us, and Contact.
5. If you don't know an answer or if it's outside your scope (e.g., pricing, specific client data, non-NGSpurs topics), politely state that you cannot provide that information and suggest contacting NGSpurs directly through the contact page for more details.
Be friendly, professional, and aim to provide useful information to assist users.
Do not make up information. If you are unsure, say so.
Keep your answers concise and to the point.
When discussing products or services, you can mention their names as listed above.
If asked about a specific product like "Tell me about CommuniShield", provide details based on its description, features, and benefits.
Example Product Details for CommuniShield:
  - Description: ${PRODUCTS_DATA.find(p => p.id === 'communishield')?.description}
  - Features: ${PRODUCTS_DATA.find(p => p.id === 'communishield')?.features.join(', ')}
  - Benefits: ${PRODUCTS_DATA.find(p => p.id === 'communishield')?.benefits.join(', ')}

Example Service Details for Cloud Migration:
  - Description: ${SERVICES_DATA.find(s => s.id === 'cloud-migration')?.description}
  - Process: ${SERVICES_DATA.find(s => s.id === 'cloud-migration')?.process?.join(', ')}
  - Benefits: ${SERVICES_DATA.find(s => s.id === 'cloud-migration')?.benefits.join(', ')}
`;