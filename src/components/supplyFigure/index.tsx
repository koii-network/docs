import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Connection, clusterApiUrl } from "@_koii/web3.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SupplyPieChart = () => {
  const [supplyData, setSupplyData] = useState({ total: 0, circulating: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const connection = new Connection("https://testnet.koii.network", "confirmed");
        const supply = await connection.getSupply();
        setSupplyData({
          total: supply.value.total,
          circulating: supply.value.circulating,
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

  const options = {
	responsive: true,
	plugins: {
	  legend: {
		position: "top" as "top", // Explicitly type it as one of the valid options
	  },
	  tooltip: {
		callbacks: {
		  label: (context: any) => {
			const value = context.raw;
			return `${context.label}: ${(value / 1e9).toLocaleString()} KOII`;
		  },
		},
	  },
	},
  };
  
  return (
    <div>
      <h1 className="text-center font-bold text-lg mb-4">Supply Distribution</h1>
      <Pie data={data} options={options} />
    </div>
  );
};

export default SupplyPieChart;
