import spaceImg from './assets/space.jpg';

function RoleSelect({ onSelect }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${spaceImg})`
      }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-xl w-full px-6 py-10 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
          Choose Your Jedi Path
        </h1>
        <div className="flex flex-col gap-4 w-full">
          <button
            className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-white text-lg"
            onClick={() => onSelect("youngling")}
          >
            Youngling
          </button>
          <button
            className="bg-green-700 hover:bg-green-600 px-4 py-2 rounded text-white text-lg"
            onClick={() => onSelect("padawan")}
          >
            Padawan
          </button>
          <button
            className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded text-white text-lg"
            onClick={() => onSelect("knight")}
          >
            Jedi Knight
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;
