import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Connection } from "@_koii/web3.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SupplyPieChart = () => {
  const [supplyData, setSupplyData] = useState({ total: 0, circulating: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const connection = new Connection("https://mainnet.koii.network", "confirmed");
        const supply = await connection.getSupply();
        setSupplyData({
          total: supply.value.total,
          circulating: supply.value.circulating-9708437592382925000,
        });
      } catch (error) {
        console.error("Failed to fetch supply data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSupply();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const data = {
    labels: ["Circulating Supply", "Non-Circulating Supply"],
    datasets: [
      {
        label: "Supply Distribution",
        data: [
          supplyData.circulating,
          supplyData.total - supplyData.circulating,
        ],
        backgroundColor: ["#4CAF50", "#FFC107"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
	  legend: {
		position: "top", // Ensure this is a valid string literal for position
	  },
	  tooltip: {
		callbacks: {
		  label: (context) => {
			const value = context.raw as number; // Ensure TypeScript understands the type
			return `${context.label}: ${(value / 1e9).toLocaleString()} KOII`;
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
        <h2 className="text-xl font-semibold">Supply Details</h2>
        <p>Total Supply: {(supplyData.total / 1e9).toLocaleString()} KOII</p>
        <p>Circulating: {(supplyData.circulating / 1e9).toLocaleString()} KOII</p>
        <p>Non-Circulating: {((supplyData.total - supplyData.circulating) / 1e9).toLocaleString()} KOII</p>
      </div>
    </div>
  );
};

export default SupplyPieChart;
