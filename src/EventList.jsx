import React from 'react';
import { motion } from 'framer-motion';

const EventList = ({ events, deleteEvent, editEvent }) => {
  return (
    <div className="mt-8 space-y-6">
      {events.map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          className="bg-white bg-opacity-90 backdrop-blur-lg p-6 rounded-lg shadow-lg"
        >
          <img
            src={event.imageUrl}
            alt={event.name}
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{event.date} | {event.location}</p>
          <p className="text-lg font-semibold text-indigo-600 mb-4">{event.price}</p>
          <p className="text-sm text-gray-700 mb-4">{event.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => editEvent(event.id)}
              className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
            >
              Засах
            </button>
            <button
              onClick={() => deleteEvent(event.id)}
              className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600"
            >
              Устгах
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EventList;
