
import "./App.css";
import Home from "./home";
import Dialog from "./components/dialog/dialog";
import Menu from "./components/menu/menu";
import { App as AppAntd} from 'antd';

function App() {
  const { message, notification, modal } = AppAntd.useApp();
  window.$message = message;
  window.$notification = notification;
  window.$modal = modal;
  return (

    <main className="border-base-300 border h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
      </Routes>
      <Menu></Menu>
    </main>
  );
}

export default App;
