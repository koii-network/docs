import React, { useState, useEffect } from "react";
import axios from "axios";

interface Task {
  taskID: string;
  taskName: string;
  tokenType: ["koii", "kpl"];
  minStake: number;
  currency: string;
}

const TasksComponent = () => {
  const [tasksTestnet, setTasksTestnet] = useState<Task[]>([]);
  const [tasksMainnet, setTasksMainnet] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<{ tasks: Task[] }>(
        "https://desktop-node.api.koii.network/get-whitelisted-tasks",
      )
      .then((response) => {
        setTasksTestnet(response.data.tasks);
      })
      .finally(() => setIsLoading(false));
    axios
      .get<{ tasks: Task[] }>(
        "https://desktop-node.api.koii.network/get-whitelisted-tasks?isMainnet=true",
      )
      .then((response) => {
        setTasksMainnet(response.data.tasks);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {tasksMainnet.length === 0 ? (
          <p>Mainnet Tasks Not Loaded. </p>
        ) : (
          <>
            <h2>Mainnet Whitelisted Tasks</h2>
            <ul>
              {tasksMainnet.map((task) => (
                <li
                  key={task.taskID}
                  className="grid grid-cols-[150px_1fr] pb-8"
                >
                  <span className="font-bold">Name:</span>{" "}
                  <span>{task.taskName}</span>
                  <span className="font-bold">ID:</span>{" "}
                  <span>{task.taskID}</span>
                  <span className="font-bold">Minimum Stake:</span>{" "}
                  <span>
                    {(task.minStake / 1000000000).toLocaleString()}{" "}
                    {task.currency}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {tasksTestnet.length === 0 ? (
          <p>Testnet Tasks Not Loaded. </p>
        ) : (
          <>
            <h2>Testnet Whitelisted Tasks</h2>
            <ul>
              {tasksTestnet.map((task) => (
                <li
                  key={task.taskID}
                  className="grid grid-cols-[150px_1fr] pb-8"
                >
                  <span className="font-bold">Name:</span>{" "}
                  <span>{task.taskName}</span>
                  <span className="font-bold">ID:</span>{" "}
                  <span>{task.taskID}</span>
                  <span className="font-bold">Minimum Stake:</span>{" "}
                  <span>
                    {(task.minStake / 1000000000).toLocaleString()}{" "}
                    {task.currency}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TasksComponent;
