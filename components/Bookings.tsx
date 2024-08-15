"use client";

import { useState } from 'react';
import { firestore as db } from '../firebase/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import { modules } from '@/data/modules'; 
import useAuth from '@/hooks/useAuth'; 
import { toast } from 'react-toastify';

const Bookings = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState<string>('');
  const { user } = useAuth();

  const handleSubmit = async () => {
    if (!selectedService || !name || !user || !dueDate || !description) return;

    try {
      await addDoc(collection(db, 'bookings'), {
        service: selectedService,
        name,
        email: user.email,
        description,
        dueDate: new Date(dueDate),
        status: 'pending', 
        paid: false, 
        createdAt: new Date(),
      });
      toast.success("Booking added successfully");
      setSelectedService(null);
      setName('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Failed to make a booking. Please try again.');
    }
  };

  if (!user) {
    return (
      <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Booking</h1>
        <p className="text-gray-600">Please <a href="/login" className="text-blue-500 underline">log in</a> to make a booking.</p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg pt-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-900">Book a Service</h1>

      <div className="mb-4">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Select a Service</label>
        <select
          id="service"
          value={selectedService || ''}
          onChange={(e) => setSelectedService(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
        >
          <option value="" disabled>Select a service</option>
          {modules.flatMap((category) => category.items).map((item) => (
            <option key={item.title} value={item.title}>
              {item.title} - {item.price}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          placeholder="Enter any additional details or requests"
          required
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit Booking
      </button>
    </div>
  );
};

export default Bookings;
