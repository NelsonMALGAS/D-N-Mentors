"use client";

import { useEffect, useState } from "react";
import { firestore as db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import { Booking } from "@/types/types";
import { isDueSoon } from "../helpers/utils";
import { FaSignInAlt, FaBook } from "react-icons/fa";
import Loading from "./Loading";

const Dashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [statusLoading, setStatusLoading] = useState<boolean>(false);
  const { user, loading } = useAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;
      setSubmitLoading(true);
      try {
        const bookingsQuery = query(
          collection(db, "bookings"),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(bookingsQuery);
        const bookingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Booking[];
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings: ", error);
      } finally {
        setSubmitLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  const handleDelete = async (id: string) => {
    setSubmitLoading(true);
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking: ", error);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleChangeStatus = async (id: string, status: string) => {
    setStatusLoading(true);
    try {
      const bookingDoc = doc(db, "bookings", id);
      await updateDoc(bookingDoc, { status });
      setBookings(
        bookings.map((booking) =>
          booking.id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error("Error updating booking status: ", error);
    } finally {
      setStatusLoading(false);
    }
  };

  if (loading || submitLoading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-full p-4 text-center">
        <FaSignInAlt className="text-6xl text-gray-500 mb-4" />
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          Please log in to view your bookings
        </p>
        <p className="text-lg text-gray-500">
          Access your bookings and manage your appointments.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-full">
      <h1 className="text-3xl font-bold mb-4 flex items-center justify-center text-white">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <FaBook className="text-6xl text-gray-500 mb-4" />
          <p className="text-2xl font-semibold text-gray-700 mb-2">
            No bookings found
          </p>
          <p className="text-lg text-gray-500">
            You haven't made any bookings yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full min-h-full divide-y divide-gray-200">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className={isDueSoon(booking.dueDate) ? "bg-red-500" : ""}
                >
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.service}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.description}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.dueDate
                      ? new Date(
                          booking.dueDate.seconds * 1000
                        ).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {new Date(
                      booking.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-sm text-white truncate">
                    {booking.status ? booking.status : "Pending"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-900 flex space-x-2">
                    <button
                      onClick={() => handleChangeStatus(booking.id, "Paid")}
                      className={`bg-green-500 text-white px-2 py-1 rounded ${
                        statusLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={statusLoading}
                    >
                      Paid
                    </button>
                    <button
                      onClick={() => handleChangeStatus(booking.id, "Pending")}
                      className={`bg-yellow-500 text-white px-2 py-1 rounded ${
                        statusLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={statusLoading}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleChangeStatus(booking.id, "Done")}
                      className={`bg-blue-500 text-white px-2 py-1 rounded ${
                        statusLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={statusLoading}
                    >
                      Done
                    </button>
                    <button
                      onClick={() =>
                        handleChangeStatus(booking.id, "Completed")
                      }
                      className={`bg-purple-500 text-white px-2 py-1 rounded ${
                        statusLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={statusLoading}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className={`bg-red-500 text-white px-2 py-1 rounded ${
                        statusLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={statusLoading}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
