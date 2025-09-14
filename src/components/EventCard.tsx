// components/EventCard.tsx
import Image from 'next/image';
import { Events } from '@/types';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Events;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative aspect-[4/5] w-full bg-gray-100 flex items-center justify-center">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-contain p-2 rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-black/20 rounded-t-2xl"></div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        <h4 className="text-xl font-bold mb-3" style={{ color: '#005191' }}>
          {event.title}
        </h4>
        <p className="text-gray-600 mb-4">
          {event.description}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
        <button 
          className="w-full py-3 px-4 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #005191, #00A9E0)' }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
