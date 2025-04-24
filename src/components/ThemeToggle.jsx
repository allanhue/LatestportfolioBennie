import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      style={{
        position: 'relative',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '30px',
        backgroundColor: theme === 'dark' ? '#2c3e50' : '#f5f5f5',
        color: theme === 'dark' ? '#ecf0f1' : '#2c3e50',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: theme === 'dark' 
          ? '0 4px 15px rgba(0, 0, 0, 0.2)' 
          : '0 4px 15px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px'
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: theme === 'dark' ? '#f1c40f' : '#2c3e50',
          transition: 'all 0.3s ease',
        }}
      />
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeToggle;