import React, { useState, useEffect } from 'react';
import { PublicKey, Connection } from '@_koi/web3.js';


interface TaskData {
  taskName: string;
  taskManager: string;
  isWhitelisted: boolean;
  isActive: boolean;
  taskAuditProgram: string;
  stakePotAccount: string;
  totalBountyAmount: number;
  bountyAmountPerRound: number;
  currentRound: number;
  availableBalances: any[];
  stakeList: any[];
  startingSlot: number;
  isRunning: boolean;
  hasError: boolean;
  metadataCID: string;
  minimumStakeAmount: number;
  roundTime: number;
  submissions: any[];
  distributionsAuditTrigger: any[];
  submissionsAuditTrigger: any;
  isMigrated: boolean;
  migratedTo: string;
  distributionRewardsSubmission: any[];
}

interface Task {
  publicKey: string;
  data: TaskData;
}

const TasksComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const connection = new Connection("https://testnet.koii.network", "confirmed");

  function parseRawK2TaskData(rawTaskData: any): TaskData {
    return {
      taskName: rawTaskData.task_name,
      taskManager: new PublicKey(rawTaskData.task_manager).toBase58(),
      isWhitelisted: rawTaskData.is_allowlisted,
      isActive: rawTaskData.is_active,
      taskAuditProgram: rawTaskData.task_audit_program,
      stakePotAccount: new PublicKey(rawTaskData.stake_pot_account).toBase58(),
      totalBountyAmount: rawTaskData.total_bounty_amount,
      bountyAmountPerRound: rawTaskData.bounty_amount_per_round,
      currentRound: rawTaskData.current_round,
      availableBalances: rawTaskData.available_balances,
      stakeList: rawTaskData.stake_list,
      startingSlot: rawTaskData.starting_slot,
      isRunning: rawTaskData.is_running ?? false,
      hasError: false,
      metadataCID: rawTaskData.task_metadata,
      minimumStakeAmount: rawTaskData.minimum_stake_amount,
      roundTime: rawTaskData.round_time,
      submissions: rawTaskData.submissions,
      distributionsAuditTrigger: rawTaskData.distributions_audit_trigger,
      submissionsAuditTrigger: rawTaskData.submissions_audit_trigger,
      isMigrated: rawTaskData.is_migrated,
      migratedTo: rawTaskData.migrated_to,
      distributionRewardsSubmission: rawTaskData.distribution_rewards_submission,
    };
  }

  async function fetchAllTasks(): Promise<any> {
    console.log("Fetching start time:", new Date());
    const taskAccountInfo = await connection.getProgramAccounts(
      new PublicKey("Koiitask22222222222222222222222222222222222")
      , {
        filters: [{
          memcmp: {
            offset: 0, // offset where the whitelisted bytes start
            bytes: 'aRN1MbEZhbr2W97MTP3RhQjjqHgoZN' // Your byte string needs to be base58 or hex encoded
          }
        }]
      }
    );
    console.log("Fetching time:", new Date());
    console.log(taskAccountInfo);
    if (taskAccountInfo === null) {
      throw new Error('Error: cannot find the task contract data');
    }

    return taskAccountInfo.map((rawData) => {
      try {
        const rawTaskData = JSON.parse(rawData.account.data.toString());
        rawTaskData.task_id = rawData.pubkey.toBase58();
        const taskData = parseRawK2TaskData(rawTaskData);
        return {
          publicKey: rawData.pubkey.toBase58(),
          data: taskData,
        };
      } catch (e) {
        console.error('Failed to parse task data:', e);
        return null;
      }
    }).filter(task => task !== null && task.data.isWhitelisted);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await fetchAllTasks();
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
        <div>
        <h1>Task List</h1>
    
    <p>Loading tasks from Koii K2-Validator chain...</p>
    <p>You can also download the node to retrieve the task IDs. </p>
    </div>
    );
  }

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>Task Name:</strong> {task.data.taskName} <br />
              <strong>Task ID:</strong> {task.publicKey}<br />
              <strong>Task Minimum Stake Amount: </strong> {task.data.minimumStakeAmount/1000000000} KOII
            </li>
          ))}
        </ul>
      ) : (
        <p>Error. Please Retry. </p>
      )}
    </div>
  );
};

export default TasksComponent;
