// pages/team.tsx
"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import teams from '../../data';
import { Team, Member } from '../../types/index';

export default function TeamMembers() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <Head>
        <title>Team Members | CSI Student Chapter SSN</title>
        <meta name="description" content="Meet the team of CSI Student Chapter at SSN College" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 flex-grow max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#2D2D2D' }}>Meet Our Amazing Team!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated students who make the CSI Student Chapter at SSN a thriving community for technology enthusiasts.
          </p>
        </div>

        {teams.map((team: Team) => (
          <TeamSection key={team.id} team={team} />
        ))}
      </main>

    </div>
  );
}

interface TeamSectionProps {
  team: Team;
}

function TeamSection({ team }: TeamSectionProps) {
  // For Faculty Coordinator team with only 1 member, center it
  if (team.id === 1 && team.members.length === 1) {
    return (
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#005191' }}>
          {team.name}
        </h3>
        
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <MemberCard member={team.members[0]} />
          </div>
        </div>
      </div>
    );
  }

  // For Office Bearers with only 2 members, center them with custom spacing
  if (team.id === 2 && team.members.length === 3) {
    return (
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#005191' }}>
          {team.name}
        </h3>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {team.members.map((member: Member) => (
            <div key={member.id} className="w-full max-w-xs">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For other teams, use 4-column layout
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold mb-6 text-center" style={{ color: '#005191' }}>
        {team.name}
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {team.members.map((member: Member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

interface MemberCardProps {
  member: Member;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg flex flex-col h-full mx-auto w-full">
      {/* Image section with smaller profile picture */}
      <div className="h-40 flex items-center justify-center relative" style={{ 
        background: 'linear-gradient(to right, #005191, #00A9E0)'
      }}>
        <div className="h-28 w-28 rounded-full bg-white p-1 shadow-md">
          <div className="h-full w-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img 
              src={member.image || '/default-profile.png'} 
              alt={member.name} 
              className="h-full w-full object-cover"
              
            />
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-4 flex-grow flex flex-col text-center">
        <h3 className="text-lg font-bold mb-1" style={{ color: '#2D2D2D' }}>{member.name}</h3>
        <p className="font-semibold mb-2 text-sm" style={{ color: '#005191' }}>
          {member.role}
        </p>
        
        {/* Only show department and year if they exist */}
        <div className="text-xs text-gray-600 space-y-1 mb-2">
          {member.dept && (
            <p className="flex items-center justify-center">
              <svg className="w-3 h-3 mr-1 flex-shrink-0" style={{ color: '#005191' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span>{member.dept}</span>
            </p>
          )}
          {member.year && (
            <p className="flex items-center justify-center">
              <svg className="w-3 h-3 mr-1 flex-shrink-0" style={{ color: '#005191' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{member.year}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}