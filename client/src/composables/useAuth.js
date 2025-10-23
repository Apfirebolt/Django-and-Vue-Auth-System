import { ref } from 'vue';
import axios from 'axios';

const baseUrl = 'http://localhost:8000'; // Adjust the base URL as needed

axios.defaults.baseURL = baseUrl;

// 1. Check Local Storage first, or use a default structure
const getInitialUser = () => {
    try {
        const storedUser = localStorage.getItem('userInfo');
        return storedUser ? JSON.parse(storedUser) : {
            id: null,
            username: null,
            email: null,
            token: null,
            first_name: null,
            last_name: null,
            isAdmin: null
        };
    } catch (e) {
        // Handle potential parsing errors if localStorage item is corrupt
        console.error("Error parsing user info from local storage:", e);
        return { token: null };
    }
};

const user = ref({
    id: null,
    _id: null,
    username: null,
    email: null,
    first_name: null,
    last_name: null,
    isAdmin: null,
    token: null
});
const loading = ref(false);
const error = ref(null);

export function useAuth() {
    const login = async (username, password) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/users/login/', { username, password });
        console.log("Login response data:", response.data);
        user.value._id = response.data.id;
        user.value.username = response.data.username;
        user.value.email = response.data.email;
        user.value.first_name = response.data.first_name;
        user.value.last_name = response.data.last_name;
        user.value.isAdmin = response.data.isAdmin;
        user.value.token = response.token;
        // save to localStorage
        localStorage.setItem('userInfo', JSON.stringify(user.value));
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed';
    } finally {
      loading.value = false;
    }
  };

  const register = async (userInfo) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.post('/api/users/register/', userInfo);
      user.value = response.data.user;
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed';
    } finally {
      loading.value = false;
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
  };
}