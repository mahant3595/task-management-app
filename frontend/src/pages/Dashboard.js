import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    const res = await axios.get(
      'http://localhost:5000/api/tasks',
      {
        headers: {
          Authorization: token
        }
      }
    );

    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await axios.post(
      'http://localhost:5000/api/tasks',
      task,
      {
        headers: {
          Authorization: token
        }
      }
    );

    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    fetchTasks();
  };

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>

      <TaskForm addTask={addTask} />

      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
