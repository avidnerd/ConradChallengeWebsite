import React from 'react';
// import ThreeRender from "./ThreeRender";
import { Camera, Sun, Building2, Leaf, ArrowRight, ChevronDown } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Header = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Sun className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold">SolarGlaze</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefits</a>
          <a href="#technology" className="text-gray-600 hover:text-blue-600">Technology</a>
          <a href="#team" className="text-gray-600 hover:text-blue-600">Team</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
    <div className="relative mt-10 pt-24 pb-16 bg-gradient-to-r from-blue-50 to-sky-50">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/skyline.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      {/* Semi-transparent blue overlay */}
      <div className="absolute inset-0 bg-sky-50 opacity-80 z-0"></div>
  
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Transform Your Windows Into <span className="text-blue-600">Power Generators</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary nanoparticle film technology that converts regular windows into highly efficient solar energy collectors.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
// const Hero = () => (
//     <div className="relative mt-10 pt-24 pb-16 bg-gradient-to-r from-blue-50 to-sky-50">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/skyline.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
//             Transform Your Windows Into <span className="text-blue-600">Power Generators</span>
//           </h1>
//           <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
//             Revolutionary nanoparticle film technology that converts regular windows into highly efficient solar energy collectors.
//           </p>
//           <div className="mt-10">
//             <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
//               Get Started <ArrowRight className="ml-2 h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
// const Hero = () => (
//   <div className="mt-10 pt-24 pb-16 bg-gradient-to-r from-blue-50 to-sky-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
//           Transform Your Windows Into <span className="text-blue-600">Power Generators</span>
//         </h1>
//         <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
//           Revolutionary nanoparticle film technology that converts regular windows into highly efficient solar energy collectors.
//         </p>
//         <div className="mt-10">
//           <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
//             Get Started <ArrowRight className="ml-2 h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

const Features = () => (
  <div className="py-16" id="benefits">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose SolarGlaze?</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Easy Installation",
            description: "Simple stick-on application requires no window replacement",
            icon: <Camera className="h-8 w-8 text-blue-600" />
          },
          {
            title: "High Efficiency",
            description: "Superior thermal management inspired by cephalopod biology",
            icon: <Sun className="h-8 w-8 text-blue-600" />
          },
          {
            title: "Cost Effective",
            description: "Significant ROI through energy savings and tax incentives",
            icon: <Building2 className="h-8 w-8 text-blue-600" />
          }
        ].map((feature, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="mx-auto">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const TechnologySection = () => (
  <div className="py-16 bg-gray-50" id="technology">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Advanced Nanoparticle Technology</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our multijunction cells utilize cutting-edge nanoparticle technology and cephalopod-inspired thermal management to achieve superior efficiency without compromising transparency.
          </p>
          <div className="mt-8">
            <ul className="space-y-4">
              {[
                "Transparent photovoltaic solution",
                "Optimized for urban environments",
                "Integrates with existing solid-state batteries",
                "Premium thermal management system"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Leaf className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src="/api/placeholder/600/400" 
              alt="Technology Illustration" 
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => (
    <div className="py-16" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Passionate innovators combining expertise in technology and environmental science
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {[
              {
                  name: "Subhi",
                  role: "Programming & Business Development",
                  description: "Experienced in programming, web development, and business pitching",
                  image: "/sub.jpeg", // Add the image path here
              },
              {
                  name: "Akshara",
                  role: "Engineering & Design",
                  description: "Specialized in robotics and CAD modeling with extensive technical design experience",
                  image: "/team_photo.jpg", // Add the image path here
              }
          ].map((member, index) => (
              <Card key={index}>
              <CardHeader>
                  <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-80 object-cover rounded-lg mb-4"  // Adjusted height to h-60
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                  <p className="text-gray-600">{member.description}</p>
              </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </div>
  );
  

const Contact = () => (
  <div className="py-16 bg-gray-50" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your Building?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Contact us to learn more about implementing SolarGlaze in your property
        </p>
        <div className="mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold">Product</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Technology</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Installation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Case Studies</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Patents</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-8">
        <p className="text-gray-400 text-center">© 2024 SolarGlaze. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Website = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechnologySection />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Website;
