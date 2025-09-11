"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Users, Award, Code, ArrowRight, MapPin, Clock } from 'lucide-react';

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
      {/* Hero Section - Enhanced Animations */}
      <div className="relative py-20 overflow-hidden">
        {/* Background with gradient overlay - Animated */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 transition-all duration-2000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
          {/* Animated background pattern - Staggered entrance */}
          <div className={`absolute inset-0 transition-all duration-1500 delay-500 ease-out ${isLoaded ? 'opacity-20' : 'opacity-0'}`}>
            <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full animate-pulse transition-all duration-1000 delay-700 ease-out ${isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 -translate-y-8'}`}></div>
            <div className={`absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 -translate-y-8'}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/3 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-4 translate-y-8'}`} style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Main Title - Smooth slide up with fade */}
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1200 delay-400 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Welcome to CSI Student Chapter
          </h1>

          {/* Underline - Elegant scale animation */}
          <div className={`w-48 h-1 mx-auto mb-8 transition-all duration-1000 delay-800 ease-out transform ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ backgroundColor: '#00A9E0' }}></div>

          {/* Subtitle - Delayed smooth entrance */}
          <p className={`text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto transition-all duration-1200 delay-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Empowering Innovation & Technology Excellence. Join us in exploring the world of technology and innovation.
          </p>

          {/* Join Button - Final element with bounce effect */}
          <div className={`transition-all duration-1000 delay-1400 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <button 
              className="px-12 py-4 text-lg font-bold text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group"
              style={{ 
                background: 'linear-gradient(135deg, #A1FFCE, #00C9FF, #A1FFCE)',
                boxShadow: '0 8px 25px rgba(0, 201, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <span className="relative z-10">Join CSI</span>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
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
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#005191' }}>500+</h3>
              <p className="text-gray-600 font-medium">Active Members</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#005191' }}>25+</h3>
              <p className="text-gray-600 font-medium">Events Organized</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#005191' }}>15+</h3>
              <p className="text-gray-600 font-medium">Awards Won</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#005191' }}>100+</h3>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
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
            {/* Event Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>September 15, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  AI/ML Workshop
                </h4>
                <p className="text-gray-600 mb-4">
                  Hands-on workshop on machine learning fundamentals and practical applications
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <MapPin size={16} className="mr-2" />
                  <span>Tech Auditorium, CSE Block</span>
                </div>
                <button 
                  className="w-full py-3 px-4 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-green-500 via-teal-600 to-blue-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>September 22, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Code Symphony 2025
                </h4>
                <p className="text-gray-600 mb-4">
                  Annual coding competition featuring algorithmic challenges and prizes
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <MapPin size={16} className="mr-2" />
                  <span>Main Auditorium</span>
                </div>
                <button 
                  className="w-full py-3 px-4 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-orange-500 via-red-600 to-purple-500 relative">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>October 5, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Tech Talk Series
                </h4>
                <p className="text-gray-600 mb-4">
                  Industry experts sharing insights on emerging technologies and career paths
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <MapPin size={16} className="mr-2" />
                  <span>Conference Hall</span>
                </div>
                <button 
                  className="w-full py-3 px-4 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>
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
                  <span>September 8, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  New Membership Drive 2025
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We are excited to announce the opening of our annual membership drive. Join CSI and become part of India's largest computer professionals community.
                </p>
              </div>
              
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#00A9E0' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 5, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  CSI Technical Fest Results
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Congratulations to all participants and winners of our recent technical fest. The event saw record participation with innovative projects showcased.
                </p>
              </div>
              
              <div className="border-l-4 pl-8 py-6 hover:bg-gray-50 transition-all duration-300 rounded-r-lg" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  <span>September 1, 2025</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  Industry Partnership Announcement
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  CSI Student Chapter has partnered with leading tech companies to provide internship opportunities and industry exposure to our members.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Become a part of India's largest computer professionals community and accelerate your career in technology. 
              Unlock opportunities, build connections, and grow with us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="px-10 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Become a Member
              </button>
              <button 
                className="px-10 py-4 border-2 border-white font-bold rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}