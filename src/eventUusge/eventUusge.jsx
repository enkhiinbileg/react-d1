import React, { useState } from 'react';
import EventForm from '../EventForm';
import EventList from '../EventList';

const EventUusge = () => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);

  const addEvent = (eventData, eventId) => {
    if (eventId) {
      // Update existing event
      setEvents(events.map(event => (event.id === eventId ? { ...event, ...eventData } : event)));
    } else {
      // Add a new event
      const newEvent = {
        id: events.length + 1,
        ...eventData,
      };
      setEvents([...events, newEvent]);
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const editEvent = (id) => {
    const eventToEdit = events.find(event => event.id === id);
    setCurrentEvent(eventToEdit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 py-12 px-6">
      <div className="w-[100%] gap-[100px] flex ml-[130px] mt-[100px] items-center ">
        <div className="flex flex-col  justify-between space-x-0 lg:space-x-8">
          {/* EventForm Section */}
          <EventForm addEvent={addEvent} currentEvent={currentEvent} setCurrentEvent={setCurrentEvent} />
        </div>
        <img className='w-[500px]' src="download__48_-removebg-preview.png" alt="" />
      </div>
      <div className="w-[100%] flex px-[130px]">
        <div className="w-[300px]">
          {/* EventList Section */}
          <EventList events={events} deleteEvent={deleteEvent} editEvent={editEvent} />
        </div>
      </div>
    </div>
  );
};


export default EventUusge;
