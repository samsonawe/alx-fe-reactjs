import axios from 'axios';
export const fetchUserData = async (username) => {
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response.data;
};