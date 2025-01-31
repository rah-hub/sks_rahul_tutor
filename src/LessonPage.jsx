// src/LessonPage.jsx
import React, { useState } from 'react';

const LessonPage = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [homeworkInput, setHomeworkInput] = useState('');
  const [homeworkFeedback, setHomeworkFeedback] = useState('');

  const getAiResponse = async () => {
    const apiKey = localStorage.getItem('api-key');
    if (!apiKey) {
      alert('Please set your API key in the settings page.');
      return;
    }
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: userInput,
        max_tokens: 150,
      }),
    }).then(res => res.json());
    setAiResponse(response.choices[0].text.trim());
  };

  const checkHomework = () => {
    if (homeworkInput === 'print("Hello, world!")') {
      setHomeworkFeedback('Great job! You got it right.');
    } else {
      setHomeworkFeedback('Try again. Remember the syntax for printing.');
    }
  };

  return (
    <div className="container">
      <div className="main-content">
        <h2>Lesson Page</h2>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={getAiResponse}>Ask AI</button>
        <p>{aiResponse}</p>

        <h3>Homework Assignment</h3>
        <p>Write a Python command to print "Hello, world!"</p>
        <input
          type="text"
          value={homeworkInput}
          onChange={(e) => setHomeworkInput(e.target.value)}
        />
        <button onClick={checkHomework}>Submit</button>
        <p>{homeworkFeedback}</p>
      </div>
    </div>
  );
};

export default LessonPage;
