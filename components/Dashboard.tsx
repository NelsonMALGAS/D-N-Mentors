"use client";
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { modules } from '@/data/modules';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [activeSessions, setActiveSessions] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
  
    const fetchData = async () => {
      setTotalUsers(1234);
      setActiveSessions(567);
      setRevenue(4567);

      setChartData({
        labels: modules.map(module => module.category),
        datasets: [
          {
            label: 'Number of Items',
            data: modules.map(module => module.items.length),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Number of Items by Category',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem: any) {
            const index = tooltipItem.dataIndex;
            const category = modules[index].category;
            const itemCount = tooltipItem.raw;
            const items = modules[index].items.map(item => item.title).join(', ');
            return `${category}: ${itemCount} items (${items})`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Category',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Items',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
            <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
            <p className="text-sm text-gray-500">+12% from last week</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">Active Sessions</h2>
            <p className="text-3xl font-bold text-gray-900">{activeSessions}</p>
            <p className="text-sm text-gray-500">-5% from last week</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700">Total Revenue</h2>
            <p className="text-3xl font-bold text-gray-900">${revenue}</p>
            <p className="text-sm text-gray-500">+8% from last week</p>
          </div>
        </div>
        
        {/* Chart Section */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Modules Overview</h2>
          {chartData ? (
            <Bar data={chartData} options={options} />
          ) : (
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">Loading Chart...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
