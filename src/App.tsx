import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { Share } from "./components/Share";

function App() {
  return (
    <div className="App">
      <Header />
        <GlobalStyle />
          <Dashboard />
            <Share />
    </div>
  );
}

export default App;
