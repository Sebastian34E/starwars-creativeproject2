import { useState } from 'react';
import spaceImg from './assets/space.jpg';

function Game({ story, onReturnToRoleSelect }) {
  const [currentId, setCurrentId] = useState(Object.keys(story)[0]);
  const node = story[currentId];

  if (node.ending) {
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${spaceImg})` }}
      >
        <div className="flex flex-col items-center justify-center text-center max-w-xl w-full px-6 py-10 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-300 mb-4">Ending: {node.type.toUpperCase()}</h2>
          <p className="text-white mb-6">{node.text}</p>
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={() => setCurrentId(Object.keys(story)[0])}
              className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
            >
              Restart Role
            </button>
            <button
              onClick={onReturnToRoleSelect}
              className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-600 transition"
            >
              Back to Role Select
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${spaceImg})` }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-xl w-full px-6 py-10 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">{node.prompt}</h2>
        <div className="flex flex-col gap-4 w-full">
          {node.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => setCurrentId(choice.next)}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
