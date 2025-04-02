import spaceImg from './assets/space.jpg';

function IntroScreen({ onStart }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${spaceImg})`
      }}
    >
      <div className="flex flex-col items-center justify-center text-center max-w-xl w-full px-6 py-10 bg-black/70 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          Order 66: The Final Trial
        </h1>
        <p className="text-white text-base md:text-lg mb-6 leading-relaxed">
          A Jedi Temple is under siege... Choose your role and survive the purge.
        </p>
        <button
          onClick={onStart}
          className="px-6 py-3 bg-blue-700 text-white rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Begin
        </button>
      </div>
    </div>
  );
}

export default IntroScreen;
