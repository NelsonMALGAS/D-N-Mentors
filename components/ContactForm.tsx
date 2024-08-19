"use client";

import { useState , FormEvent } from 'react';
import { firestore as db } from '../firebase/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        createdAt: new Date()
      });

      setSuccess('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message: ', error);
      setError('There was an error sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
        
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-transparent"
            placeholder='Name'
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-transparent"
            placeholder='example@gmail.com'
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full bg-transparent"
            placeholder='Message...'
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
