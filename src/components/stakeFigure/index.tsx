import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Connection } from "@_koii/web3.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StakePieChart = () => {
  const [stakeData, setStakeData] = useState({ total: 451700000, activeStake: 328300000 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStake = async () => {
      try {
        const connection = new Connection("https://mainnet.koii.network", "confirmed");
        // Simulating a fetch operation, replace with actual API call to fetch stake details
        const supply = await connection.getSupply(); // This would be a different function in a real scenario
        setStakeData({
          total: 451700000, // Total supply in millions for simplicity
          activeStake: 328300000, // Active stake in millions
        });
      } catch (error) {
        console.error("Failed to fetch stake data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStake();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = {
    labels: ["Active Stake", "Remaining Supply"],
    datasets: [
      {
        label: "Stake Distribution",
        data: [
          stakeData.activeStake,
          stakeData.total - stakeData.activeStake,
        ],
        backgroundColor: ["#3B82F6", "#9CA3AF"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            return `${context.label}: ${(value / 1e6).toLocaleString()} M KOII`;
          },
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="w-2/3">
        <Pie data={data} options={options} />
      </div>
      <div className="w-1/3 space-y-2">
        <h2 className="text-xl font-semibold">Stake Details</h2>
        <p>Total Supply: {(stakeData.total / 1e6).toLocaleString()} M KOII</p>
        <p>Active Stake: {(stakeData.activeStake / 1e6).toLocaleString()} M KOII</p>
        <p>Remaining Supply: {((stakeData.total - stakeData.activeStake) / 1e6).toLocaleString()} M KOII</p>
      </div>
    </div>
  );
};

export default StakePieChart;
