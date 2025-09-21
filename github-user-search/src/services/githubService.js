import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    let query = '';
    if (username) query += `${username} in:login`;
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response.data;
};