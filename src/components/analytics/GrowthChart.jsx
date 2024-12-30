import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GrowthChart({ timeRange }) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Subscribers',
        data: [30000, 32500, 35000, 38000, 41000, 45000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4
      },
      {
        label: 'Active Subscribers',
        data: [25000, 27000, 29000, 32000, 35000, 38000],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: document.documentElement.classList.contains('dark') 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
        }
      },
      x: {
        grid: {
          color: document.documentElement.classList.contains('dark') 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default GrowthChart; 