// src/SettingsPage.jsx
import React, { useState } from 'react';

const SettingsPage = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('api-key') || '');

  const saveApiKey = () => {
    localStorage.setItem('api-key', apiKey);
    alert('API key saved!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <label htmlFor="api-key">Enter your API key:</label>
      <input
        type="text"
        id="api-key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        required
      />
      <button onClick={saveApiKey}>Save</button>
    </div>
  );
};

export default SettingsPage;
