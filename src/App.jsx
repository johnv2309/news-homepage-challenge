import { Header } from "./components/Header";
import { New } from "./components/New";
import { Popular } from "./components/Popular";
import { Trending } from "./components/Trending";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <New />
      <Trending />
    </div>
  );
}

export default App;
