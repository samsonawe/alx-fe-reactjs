import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setResults([]);

        try {
            const data = await searchUsers({ username, location, minRepos });
            setResults(data.items);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="max-w-xl mx-auto p-4">
            <form onSubmit={handleSubmit}className="space-y-4">
                <input type="text" placeholder="Enter Github username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded"/>
                <input type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded"/>
                <input type="number" placeholder="Minimum repositories" value={minRepos} onChange={(e) => setMinRepos(e.target.value)} className="w-full p-2 border rounded"/>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Search
                </button>
            </form>

            {loading && <p className="mt-4 text-gray-600">Loading...</p>}
            {error && <p className="mt-4 text-red-500">Looks like we can't find the user</p>}

            <div className="mt-6 space-y-4">
                {results.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                </a>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Search;