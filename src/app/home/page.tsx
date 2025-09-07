import React from 'react';
import { Calendar, Users, Award, Code, ArrowRight, MapPin, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <main className="flex-1 px-6 py-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#005191' }}>
            Welcome to CSI Student Chapter
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Computer Society of India (CSI) is the largest body of computer professionals in India. 
            Join us in exploring the world of technology and innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              className="px-6 py-3 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
            >
              Learn More
            </button>
            <button 
              className="px-6 py-3 border-2 font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
              style={{ borderColor: '#005191', color: '#005191' }}
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#005191' }}>500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#005191' }}>25+</h3>
              <p className="text-gray-600">Events Organized</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#005191' }}>15+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#005191' }}>100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#005191' }}>
              Upcoming Events
            </h3>
            <p className="text-gray-600 text-lg">
              Don't miss out on our exciting upcoming events and workshops
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>[EVENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  [EVENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600 mb-4">
                  [EVENT_DESCRIPTION_PLACEHOLDER]
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>[EVENT_VENUE_PLACEHOLDER]</span>
                </div>
                <button 
                  className="w-full py-2 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>[EVENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  [EVENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600 mb-4">
                  [EVENT_DESCRIPTION_PLACEHOLDER]
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>[EVENT_VENUE_PLACEHOLDER]</span>
                </div>
                <button 
                  className="w-full py-2 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>[EVENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
                  [EVENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600 mb-4">
                  [EVENT_DESCRIPTION_PLACEHOLDER]
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>[EVENT_VENUE_PLACEHOLDER]</span>
                </div>
                <button 
                  className="w-full py-2 px-4 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              className="px-8 py-3 border-2 font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto" 
              style={{ borderColor: '#005191', color: '#005191' }}
            >
              View All Events
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#005191' }}>
              What We Do
            </h3>
            <p className="text-gray-600 text-lg">
              Empowering students through technology, innovation, and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Code className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#005191' }}>
                Technical Workshops
              </h4>
              <p className="text-gray-600">
                [WORKSHOP_DESCRIPTION_PLACEHOLDER]
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#005191' }}>
                Networking Events
              </h4>
              <p className="text-gray-600">
                [NETWORKING_DESCRIPTION_PLACEHOLDER]
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4" style={{ color: '#005191' }}>
                Competitions
              </h4>
              <p className="text-gray-600">
                [COMPETITION_DESCRIPTION_PLACEHOLDER]
              </p>
            </div>
          </div>
        </div>

        {/* Latest News/Announcements */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#005191' }}>
                Latest Announcements
              </h3>
              <p className="text-gray-600">
                Stay updated with our latest news and announcements
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>[ANNOUNCEMENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ANNOUNCEMENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600">
                  [ANNOUNCEMENT_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#00A9E0' }}>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>[ANNOUNCEMENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ANNOUNCEMENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600">
                  [ANNOUNCEMENT_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="border-l-4 pl-6 py-4" style={{ borderColor: '#005191' }}>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>[ANNOUNCEMENT_DATE_PLACEHOLDER]</span>
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ANNOUNCEMENT_TITLE_PLACEHOLDER]
                </h4>
                <p className="text-gray-600">
                  [ANNOUNCEMENT_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#005191' }}>
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Become a part of India's largest computer professionals community and accelerate your career in technology.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                className="px-8 py-3 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
              >
                Become a Member
              </button>
              <button 
                className="px-8 py-3 border-2 font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
                style={{ borderColor: '#005191', color: '#005191' }}
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