import React from 'react';
import { Calendar, Users, Target, Eye, Award, BookOpen, Code, Star, Building, Trophy, Globe, ChevronRight } from 'lucide-react';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
        {/* CSI National Overview */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#005191' }}>
                <Globe className="text-white" size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: '#005191' }}>
                Computer Society of India
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  [CSI_NATIONAL_OVERVIEW_PLACEHOLDER] - Founded in 1965, the Computer Society of India (CSI) stands as the premier body of computer professionals in India, dedicated to advancing the theory and practice of computer science and information technology.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  [CSI_IMPACT_DESCRIPTION_PLACEHOLDER] - With over five decades of excellence, CSI has been instrumental in shaping India's IT landscape through education, certification, and professional development programs.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6">
                  <h4 className="font-bold mb-3" style={{ color: '#005191' }}>Key Focus Areas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#005191' }}></div>
                      <span className="text-sm text-gray-700">[FOCUS_AREA_1_PLACEHOLDER]</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#00A9E0' }}></div>
                      <span className="text-sm text-gray-700">[FOCUS_AREA_2_PLACEHOLDER]</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#005191' }}></div>
                      <span className="text-sm text-gray-700">[FOCUS_AREA_3_PLACEHOLDER]</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#00A9E0' }}></div>
                      <span className="text-sm text-gray-700">[FOCUS_AREA_4_PLACEHOLDER]</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-4 sm:p-6 text-white">
                  <h4 className="text-lg font-bold mb-4">CSI by Numbers</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">1965</div>
                      <div className="text-sm opacity-90">Year Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">100K+</div>
                      <div className="text-sm opacity-90">Members Nationwide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Active Chapters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Chapter Story */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#005191' }}>
                Our Chapter Story
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to becoming a leading student organization in computer science education
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#005191' }}>
                    <Building className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#005191' }}>Chapter Establishment</h3>
                    <p className="text-gray-500 text-sm mb-3">Founded in [CHAPTER_YEAR]</p>
                    <p className="text-gray-600 leading-relaxed">
                      [CHAPTER_FOUNDATION_STORY_PLACEHOLDER] - Our journey began with a vision to bridge the gap between academic learning and industry requirements, creating opportunities for students to excel in the rapidly evolving field of computer science.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <Calendar className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#005191' }}>Established</h4>
                      <p className="text-gray-600 text-sm">[ESTABLISHMENT_DATE_PLACEHOLDER]</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-teal-50 rounded-lg">
                    <Users className="text-teal-600 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#005191' }}>Founding Members</h4>
                      <p className="text-gray-600 text-sm">[FOUNDING_MEMBERS_PLACEHOLDER] pioneer students</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <Trophy className="text-purple-600 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#005191' }}>First Milestone</h4>
                      <p className="text-gray-600 text-sm">[FIRST_MILESTONE_PLACEHOLDER]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#005191' }}>Key Milestones</h3>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2" style={{ borderColor: '#005191' }}>
                    <div className="absolute w-3 h-3 rounded-full -left-2 top-1" style={{ backgroundColor: '#005191' }}></div>
                    <div className="pb-4">
                      <div className="font-semibold text-sm" style={{ color: '#005191' }}>[MILESTONE_YEAR_1] - Foundation</div>
                      <div className="text-gray-600 text-sm">[MILESTONE_DESCRIPTION_1_PLACEHOLDER]</div>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2" style={{ borderColor: '#00A9E0' }}>
                    <div className="absolute w-3 h-3 rounded-full -left-2 top-1" style={{ backgroundColor: '#00A9E0' }}></div>
                    <div className="pb-4">
                      <div className="font-semibold text-sm" style={{ color: '#005191' }}>[MILESTONE_YEAR_2] - Growth</div>
                      <div className="text-gray-600 text-sm">[MILESTONE_DESCRIPTION_2_PLACEHOLDER]</div>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2" style={{ borderColor: '#005191' }}>
                    <div className="absolute w-3 h-3 rounded-full -left-2 top-1" style={{ backgroundColor: '#005191' }}></div>
                    <div className="pb-4">
                      <div className="font-semibold text-sm" style={{ color: '#005191' }}>[MILESTONE_YEAR_3] - Recognition</div>
                      <div className="text-gray-600 text-sm">[MILESTONE_DESCRIPTION_3_PLACEHOLDER]</div>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2" style={{ borderColor: '#00A9E0' }}>
                    <div className="absolute w-3 h-3 rounded-full -left-2 top-1" style={{ backgroundColor: '#00A9E0' }}></div>
                    <div className="pb-4">
                      <div className="font-semibold text-sm" style={{ color: '#005191' }}>[MILESTONE_YEAR_4] - Excellence</div>
                      <div className="text-gray-600 text-sm">[MILESTONE_DESCRIPTION_4_PLACEHOLDER]</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg h-full">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#005191' }}>
                  <Eye className="text-white" size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: '#005191' }}>Vision</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-gray-700 leading-relaxed font-medium italic">
                  "[CHAPTER_VISION_STATEMENT_PLACEHOLDER] - To be the premier student organization that empowers future technologists through innovation, collaboration, and excellence in computer science education."
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-sm sm:text-base" style={{ color: '#005191' }}>Vision Pillars</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[VISION_PILLAR_1_PLACEHOLDER]</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[VISION_PILLAR_2_PLACEHOLDER]</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[VISION_PILLAR_3_PLACEHOLDER]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg h-full">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00A9E0' }}>
                  <Target className="text-white" size={20} />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: '#005191' }}>Mission</h2>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-4 sm:p-6 mb-6">
                <p className="text-gray-700 leading-relaxed font-medium italic">
                  "[CHAPTER_MISSION_STATEMENT_PLACEHOLDER] - To foster a dynamic learning environment that enhances technical skills, promotes professional development, and creates meaningful industry connections for our student community."
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-sm sm:text-base" style={{ color: '#005191' }}>Core Objectives</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChevronRight className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[MISSION_OBJECTIVE_1_PLACEHOLDER]</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[MISSION_OBJECTIVE_2_PLACEHOLDER]</span>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">[MISSION_OBJECTIVE_3_PLACEHOLDER]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Activities */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#005191' }}>
                Our Core Activities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive programs designed to enhance technical expertise and professional growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-blue-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#005191' }}>
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Technical Training
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [TECHNICAL_TRAINING_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="bg-teal-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#00A9E0' }}>
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Professional Networks
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [PROFESSIONAL_NETWORK_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#005191' }}>
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Skill Competitions
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [SKILL_COMPETITION_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#00A9E0' }}>
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Learning Resources
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [LEARNING_RESOURCES_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#005191' }}>
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Industry Connect
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [INDUSTRY_CONNECT_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
              
              <div className="bg-pink-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group min-h-[200px] flex flex-col">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0" style={{ backgroundColor: '#00A9E0' }}>
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-center hyphens-auto" style={{ color: '#005191', wordBreak: 'break-word' }}>
                  Recognition Programs
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed flex-1 hyphens-auto" style={{ wordBreak: 'break-word' }}>
                  [RECOGNITION_PROGRAMS_DESCRIPTION_PLACEHOLDER]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Recognition */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4" style={{ color: '#005191' }}>
                Achievements & Recognition
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Celebrating our milestones and the impact we've made in the academic and professional community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 border-2 border-blue-100 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ACHIEVEMENT_TITLE_1_PLACEHOLDER]
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  [ACHIEVEMENT_DESCRIPTION_1_PLACEHOLDER]
                </p>
              </div>
              
              <div className="text-center p-4 sm:p-6 border-2 border-teal-100 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A9E0' }}>
                  <Trophy className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ACHIEVEMENT_TITLE_2_PLACEHOLDER]
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  [ACHIEVEMENT_DESCRIPTION_2_PLACEHOLDER]
                </p>
              </div>
              
              <div className="text-center p-4 sm:p-6 border-2 border-purple-100 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#005191' }}>
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: '#005191' }}>
                  [ACHIEVEMENT_TITLE_3_PLACEHOLDER]
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  [ACHIEVEMENT_DESCRIPTION_3_PLACEHOLDER]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 sm:p-8 lg:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Join Our Journey?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Be part of a community that's shaping the future of technology. Connect with like-minded peers, access exclusive opportunities, and accelerate your professional growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 sm:gap-0">
              <a 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <button className="px-6 sm:px-8 py-3 border-2 border-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;