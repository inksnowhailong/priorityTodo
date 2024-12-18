
import reactLogo from "./assets/react.svg";
import "./App.css";
import DialogReminder from "./reminder/dialogReminder";
function open() {
  const dialogReminder = new DialogReminder();
  dialogReminder.start();
}
function App() {

  return (
    <main className="container">
      <h1>Welcome to Tauri + React</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <button className="rounded bg-blue-600 text-white  w-64" onClick={open}>套娃？</button>
    </main>
  );
}

export default App;
