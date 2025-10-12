import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Profile from './components/Profile';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile/details">Profile Details</Link> | 
        <Link to="/profile/settings">Profile Settings</Link> | 
        <Link to="/blog/42">Blog Post #42</Link>
      </nav>

      <div style={{ margin: '10px 0' }}>
        {isAuthenticated ? (
          <>
            <span>Logged in</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <span>Not logged in</span>
            <button onClick={handleLogin}>Login</button>
          </>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;