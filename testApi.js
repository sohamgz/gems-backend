const axios = require('axios');
const API = 'http://localhost:5000/api';

let token = '';
let userId = '';
let taskId = '';

const headers = () => ({
  headers: { Authorization: `Bearer ${token}` },
});

const main = async () => {
  try {
    // Register or Login
    console.log('Registering...');
try {
  const registerRes = await axios.post(`${API}/auth/register`, {
    name: 'TestUser',
    email: 'testuser@example.com',
    password: 'password123',
  });
  token = registerRes.data.token;
  userId = registerRes.data._id;
  console.log('Registered:', registerRes.data.name);
} catch (err) {
  if (err.response?.data?.message === 'User already exists') {
    console.log('User already exists. Logging in...');
    const loginRes = await axios.post(`${API}/auth/login`, {
      email: 'testuser@example.com',
      password: 'password123',
    });
    token = loginRes.data.token;
    userId = loginRes.data._id;
    console.log('Logged in:', loginRes.data.name);
  } else {
    console.error('Registration/Login failed:', err.response?.data || err.message);
    return;
  }
}

    const registerRes = await axios.post(`${API}/auth/register`, {
      name: 'TestUser',
      email: 'testuser@example.com',
      password: 'password123',
    });
    token = registerRes.data.token;
    userId = registerRes.data._id;
    console.log('Registered:', registerRes.data.name);
  } catch (err) {
    if (err.response?.data?.message === 'User already exists') {
      console.log('User already exists. Logging in...');
      const loginRes = await axios.post(`${API}/auth/login`, {
        email: 'testuser@example.com',
        password: 'password123',
      });
      token = loginRes.data.token;
      userId = loginRes.data._id;
      console.log('Logged in:', loginRes.data.name);
    } else {
      if (err.response) {
        console.error('Registration/Login failed:', err.response.data);
      } else {
        console.error('Registration/Login failed:', err.message);
      }
      return;
    }
  }

  try {
    // Create Task
    console.log('Creating task...');
    const taskRes = await axios.post(
      `${API}/tasks`,
      {
        title: 'Test Task',
        description: 'Testing backend task creation',
        dueDate: '2025-08-15',
        assignedUser: userId,
      },
      headers()
    );
    taskId = taskRes.data._id;
    console.log('Task created:', taskRes.data.title);

    // Get All Tasks
    const allTasks = await axios.get(`${API}/tasks`, headers());
    console.log('All tasks:', allTasks.data.length);

    // Get Specific Task
    const taskDetails = await axios.get(`${API}/tasks/${taskId}`, headers());
    console.log('Task Details:', taskDetails.data.title);

    // Update Task
    await axios.put(
      `${API}/tasks/${taskId}`,
      {
        title: 'Updated Task',
        description: 'Updated Description',
      },
      headers()
    );
    console.log('Task updated');

    // Get All Users
    const users = await axios.get(`${API}/auth/users`, headers());
    console.log('Users:', users.data.length);

    // Get Specific User
    const singleUser = await axios.get(`${API}/auth/users/${userId}`, headers());
    console.log('User Info:', singleUser.data.name);

    // Update User
    await axios.put(
      `${API}/auth/users/${userId}`,
      {
        name: 'Updated TestUser',
        email: 'newnew@example.com',
      },
      headers()
    );
    console.log('User updated');

    // Delete Task
    await axios.delete(`${API}/tasks/${taskId}`, headers());
    console.log('Task deleted');

    console.log('All tests completed successfully.');
  } catch (err) {
    if (err.response) {
      console.error('Error:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
  }
};

main();
