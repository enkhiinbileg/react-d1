import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './EventForm.module.css';

const EventForm = ({ addEvent, currentEvent, setCurrentEvent }) => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  useEffect(() => {
    if (currentEvent) {
      setEventData({
        name: currentEvent.name,
        date: currentEvent.date,
        location: currentEvent.location,
        price: currentEvent.price,
        description: currentEvent.description,
        imageUrl: currentEvent.imageUrl,
      });
    }
  }, [currentEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEvent) {
      // Update the existing event
      addEvent(eventData, currentEvent.id);
    } else {
      // Add a new event
      addEvent(eventData);
    }
    setEventData({
      name: '',
      date: '',
      location: '',
      price: '',
      description: '',
      imageUrl: '',
    });
    setCurrentEvent(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white opacity-0 p-8 rounded-lg shadow-xl max-w-lg mx-auto"
    >
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">
        {currentEvent ? 'Үйл явдал засах' : 'Шинэ үйл явдал үүсгэх'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Нэр"
          value={eventData.name}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Байршил"
          value={eventData.location}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="price"
          placeholder="Үнэ"
          value={eventData.price}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="description"
          placeholder="Тайлбар"
          value={eventData.description}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Зургийн URL"
          value={eventData.imageUrl}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className={styles.button234}
        >
          {currentEvent ? 'Үйл явдал засах' : 'Үйл явдал үүсгэх'}
        </button>
      </form>
    </motion.div>
  );
};

export default EventForm;
