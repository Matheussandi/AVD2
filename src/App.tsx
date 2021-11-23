import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Dashboard />
    </div>
  );
}

export default App;
