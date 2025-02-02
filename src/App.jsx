import upgradeIllus from './assets/upgradenobg.png';

function App() {
  return (
    <div className="h-screen flex items-center justify-center text-4xl flex-col gap-y-3 bg-gradient-to-r from-blue-500 to-purple-600">
      <img
        src={upgradeIllus}
        alt="Upgrade illustration"
        className="w-1/2 md:w-1/4"
      />

      <p
        style={{ fontFamily: 'Pacifico' }}
        className="text-6xl md:text-8xl text-white text-center"
      >
        Codemelon
      </p>
      <p className="text-xl md:text-2xl text-white mt-4 text-center">We are going through an update stay tuned</p>
    </div>
  );
}

export default App;