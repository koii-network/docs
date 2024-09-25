import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface Task {
  taskID: string;
  taskName: string;
  tokenType: ['koii', 'kpl'];
  minStake: number;
}


const TasksComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<{tasks: Task[]}>('https://desktop-node.api.koii.network/get-whitelisted-tasks').then((response) => {
      setTasks(response.data.tasks);
    }).finally(() =>
    setIsLoading(false)
    );
  }, []);

  if (isLoading)  {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length === 0 ?  (
        <p>Error, please retry. </p>
      ):(
        <ul>{tasks.map((task) => (
            <li key={task.taskID}  className="grid grid-cols-[150px_1fr] pb-8">
              <span className="font-bold">Name:</span> <span>{task.taskName}</span>
              <span className="font-bold">ID:</span> <span>{task.taskID}</span>
              <span className="font-bold">Minimum Stake:</span> <span>{(task.minStake/1000000000).toLocaleString()} KOII</span>
            </li>
          ))}
        </ul>)}
    </div>
  );
};

export default TasksComponent;
