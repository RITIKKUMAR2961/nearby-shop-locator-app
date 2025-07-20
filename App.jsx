import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  if (!isLoggedIn) {
    return (
      <LoginScreen
        username={username}
        setUsername={setUsername}
        onLogin={handleLogin}
      />
    );
  }

  return <MainScreen username={username} onLogout={handleLogout} />;
}
