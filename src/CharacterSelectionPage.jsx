// src/CharacterSelectionPage.jsx
import React, { useState } from 'react';

const characters = [
  { name: 'RoboTutor', image: 'robo.png' },
  { name: 'KittyCoder', image: 'kitty.jpeg' },
  { name: 'WizardCoder', image: 'wizard.jpeg' },
];

const CharacterSelectionPage = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    // Save the selected character to local storage or state management for use in lessons
  };

  return (
    <div className="container">
      <div className="main-content character-selection">
        <h2>Select Your Tutor Character</h2>
        <div className="character-grid">
          {characters.map((char) => (
            <div key={char.name} onClick={() => handleCharacterSelect(char)}>
              <img src={`/images/${char.image}`} alt={char.name} className="character-image" />
              <p>{char.name}</p>
            </div>
          ))}
        </div>
        {selectedCharacter && <p>You selected: {selectedCharacter.name}</p>}
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
