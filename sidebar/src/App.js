import "./App.css";
import Toggle from "./Toggle";
import { useState } from "react";
import Menu from "./Menu";
import SubStr from "./SubStr";

function App() {
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  return (
    <div className="app">
      <Toggle ismenuOpen={ismenuOpen} setIsmenuOpen={setIsmenuOpen} />
      {ismenuOpen && <Menu />}
      <SubStr />
    </div>
  );
}

export default App;
