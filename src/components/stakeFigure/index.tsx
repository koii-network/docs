import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Connection } from "@_koii/web3.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StakePieChart = () => {
  const [stakeData, setStakeData] = useState({ total: 0, activeStake: 0 });
  const [isLoading, setIsLoading] = useState(true);
  async function getActiveStake() {
    try {
      const connection = new Connection("https://mainnet.koii.network", "confirmed");
      const voteAccounts = await connection.getVoteAccounts();
  
      const delinquentStake = voteAccounts.delinquent.reduce(
        (prev, current) => prev + current.activatedStake,
        0
      );
  
      const activeStake = voteAccounts.current.reduce(
        (prev, current) => prev + current.activatedStake,
        0
      ) + delinquentStake;
  
      return activeStake;
    } catch (error) {
      console.error("Error fetching vote accounts:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchStake = async () => {
      try {
        const connection = new Connection("https://mainnet.koii.network", "confirmed");
        // Simulating a fetch operation, replace with actual API call to fetch stake details
        const supply = await connection.getSupply(); // This would be a different function in a real scenario
        const activeStake = await getActiveStake();
          setStakeData({
            total: supply.value.total,
            activeStake: activeStake || 0,
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
            return `${context.label}: ${(value / 1e9 / 1e6).toLocaleString()}  M KOII`;
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
        <p>Total Supply: {(stakeData.total / 1e9 / 1e9).toLocaleString()} B KOII</p>
        <p>Active Stake: {(stakeData.activeStake / 1e9 / 1e9).toLocaleString()} B KOII</p>
        <p>Remaining Supply: {((stakeData.total - stakeData.activeStake) / 1e9 / 1e9).toLocaleString()} B KOII</p>
      </div>
    </div>
  );
};

export default StakePieChart;
