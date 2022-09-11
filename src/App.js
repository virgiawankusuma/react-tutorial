import './App.css';
import DisplayTheme from './components/DisplayTheme';
import Navbar from './components/Navbar';
import Setting from './components/Setting';
import ToggleTheme from './components/ToggleTheme';
import { AppProvider } from './context/app-context';

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <hr />
        <ToggleTheme />
      </AppProvider>
    </div>
  );
}

export default App;
