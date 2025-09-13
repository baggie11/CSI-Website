"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, Code, ArrowRight, MapPin, Clock } from 'lucide-react';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts with a slight delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Hero Section - Modern Illustrated Design */}
      <div className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Decorative Elements */}
        <div className={`absolute inset-0 transition-all duration-1500 delay-300 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
          
          {/* Plus signs */}
          <div className="absolute top-24 right-1/3 text-2xl text-blue-300 animate-pulse" style={{ animationDelay: '0s' }}>+</div>
          <div className="absolute bottom-32 left-1/4 text-xl text-purple-300 animate-pulse" style={{ animationDelay: '1s' }}>+</div>
          <div className="absolute top-1/2 right-16 text-lg text-green-300 animate-pulse" style={{ animationDelay: '0.5s' }}>+</div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Illustration */}
            <div className={`relative transition-all duration-1200 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              {/* Main Character Circle */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Green organic shape background */}
                <div className="absolute inset-8 bg-gradient-to-br from-green-100 to-green-200 rounded-full transform rotate-12 animate-pulse"></div>
                
                {/* CSI Logo replacing the entire circle */}
                <div className="absolute inset-12 flex items-center justify-center">
                  <img 
                    src="/csilogo.jpg" 
                    alt="CSI Logo" 
                    className="w-full h-full object-contain rounded-full shadow-2xl"
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className={`absolute -top-4 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-1000 delay-800 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-4 rotate-12'}`}>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                </div>
                
                <div className={`absolute top-16 -right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-1000 delay-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-4 -rotate-12'}`}>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                </div>
                
                <div className={`absolute bottom-20 -left-6 w-18 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-1000 delay-1200 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-6'}`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className={`absolute -bottom-2 right-12 w-16 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-1000 delay-1400 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 -rotate-6'}`}>
                  <div className="w-8 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>

                <div className={`absolute top-32 left-2 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transition-all duration-1000 delay-600 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-4 rotate-45'}`}>
                  <div className="text-green-500 font-bold text-lg">💬</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`space-y-8 transition-all duration-1200 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              {/* CSI Logo/Brand */}
              <div className="space-y-2">
                <div className="text-4xl font-bold" style={{ color: '#4CAF50' }}>
                  CSI
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: '#1e3a8a' }}>
                  Student Chapter
                </h1>
              </div>

              {/* Tagline */}
              <div className="space-y-4">
                <p className="text-xl text-gray-600 italic">
                  "Empowering Innovation & Technology Excellence"
                </p>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-700 leading-relaxed">
                  Computer Society of India (CSI) is the largest body of computer professionals in India. 
                  Our student chapter is dedicated to fostering innovation, technical excellence, and 
                  professional development among aspiring technologists. We work towards building a 
                  strong community of computing professionals through skill-building, networking, and empowerment.
                </p>
              </div>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 delay-1400 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                <a href = "https://www.instagram.com/csi_ssn?igsh=MTE2MXlqMXA2c2ZoaA"><button 
                  className="px-8 py-4 text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
                  }}
                >
                  Join CSI
                </button></a>
              </div>
            </div>

          </div>
        </div>
      </div>

       <main className="px-6 py-16">
        {/* About CSI Section */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#005191' }}>
              ABOUT CSI
            </h2>
            <div className="w-32 h-1 mx-auto mb-8" style={{ backgroundColor: '#00A9E0' }}></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Computer Society of India (CSI) is the largest body of computer professionals in India. 
              Our student chapter is dedicated to fostering innovation, technical excellence, and 
              professional development among aspiring technologists.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Users className="text-white" size={32} />
              </div>

            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Calendar className="text-white" size={32} />
              </div>

            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Award className="text-white" size={32} />
              </div>

            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Code className="text-white" size={32} />
              </div>

            </div>
          </div>
        </div>

        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-600 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4" style={{ color: '#005191' }}>
          Upcoming Events
        </h3>
        <div className="w-32 h-1 mx-auto mb-6" style={{ backgroundColor: '#00A9E0' }}></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Don't miss out on our exciting upcoming events and workshops designed to enhance your technical skills
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
          <div className="text-center mt-12">
            <button 
              className="px-8 py-4 border-2 font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto" 
              style={{ borderColor: '#005191', color: '#005191' }}
            >
              View All Events
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        {/* What We Do Section */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-800 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4" style={{ color: '#005191' }}>
              What We Do
            </h3>
            <div className="w-32 h-1 mx-auto mb-6" style={{ backgroundColor: '#00A9E0' }}></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empowering students through technology, innovation, and community building
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl" style={{ backgroundColor: '#005191' }}>
                <Code className="text-white" size={40} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#005191' }}>
                Technical Workshops
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive hands-on workshops covering cutting-edge technologies like AI, blockchain, 
                web development, and mobile app development to keep students updated with industry trends.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl" style={{ backgroundColor: '#00A9E0' }}>
                <Users className="text-white" size={40} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#005191' }}>
                Networking Events
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Connect with industry professionals, alumni, and peers through our networking events, 
                creating opportunities for mentorship, internships, and career advancement.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl" style={{ backgroundColor: '#005191' }}>
                <Award className="text-white" size={40} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#005191' }}>
                Competitions
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Organize and participate in coding competitions, hackathons, and technical challenges 
                that foster innovation and provide platforms for students to showcase their skills.
              </p>
            </div>
          </div>
        </div>

        {/* Latest News/Announcements */}
        <div className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#005191' }}>
                Latest Announcements
              </h3>
              <div className="w-32 h-1 mx-auto mb-6" style={{ backgroundColor: '#00A9E0' }}></div>
              <p className="text-gray-600 text-lg">
                Stay updated with our latest news and announcements
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Path Finder
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  The qualifying teams will compete by racing from a given start page to a target page on Wikipedia using only in-page links.

                </p>
              </div>
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Code Relay
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Teams will be shown a pattern and must write code to generate it.

                </p>
              </div>
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Connexion
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Teams will identify technical words represented through images.

                </p>
              </div>
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  SSN CSI Inauguration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  
                </p>
              </div>
               <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 8, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Team Reveal at ACE Inauguration
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  
                </p>
              </div>
              
             
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="bg-gradient-to-br from-[#005191] via-[#0073b1] to-[#0096d6] rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Become a part of India's largest computer professionals community and accelerate your career in technology. 
              Unlock opportunities, build connections, and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href = "https://www.instagram.com/csi_ssn?igsh=MTE2MXlqMXA2c2ZoaA"><button 
                className="px-10 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Become a Member
              </button></a>
              <a href = "/contact"><button 
                className="px-10 py-4 border-2 border-white font-bold rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Contact Us
              </button></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}