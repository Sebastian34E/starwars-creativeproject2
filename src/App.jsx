import { useState } from 'react';
import IntroScreen from './IntroScreen';
import RoleSelect from './RoleSelect';
import Game from './Game';

import { story as storyYoungling } from './data/storyTree_youngling';
import { story as storyPadawan } from './data/storyTree_padawan';
import { story as storyKnight } from './data/storyTree_knight';

function App() {
  const [screen, setScreen] = useState("intro");
  const [role, setRole] = useState(null);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setScreen("game");
  };

  const getStoryForRole = (role) => {
    if (role === "youngling") return storyYoungling;
    if (role === "padawan") return storyPadawan;
    if (role === "knight") return storyKnight;
    return null;
  };

  return (
    <div className="min-h-screen text-white font-sans">
      {screen === "intro" && <IntroScreen onStart={() => setScreen("role")} />}
      {screen === "role" && <RoleSelect onSelect={handleRoleSelect} />}
      {screen === "game" && (
        <Game
          story={getStoryForRole(role)}
          onReturnToRoleSelect={() => {
            setScreen("role");
            setRole(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
