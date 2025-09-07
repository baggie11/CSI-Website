"use client"


export default function Home() {

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>

      <main className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
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
            <button className="px-6 py-3 border-2 font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{ borderColor: '#005191', color: '#005191' }}>
              Join Us
            </button>
          </div>
        </div>
      </main>

    </div>
  );
}