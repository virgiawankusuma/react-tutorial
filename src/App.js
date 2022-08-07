import './App.css';
import Button from './Button';
import { Welcomeh2 } from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcomeh2 children="welcome 1"/>
      <Welcomeh2 children="welcome 2" />
      <Welcomeh2>Saya adalah content</Welcomeh2>
      <Button>Klik gue</Button>
    </div>
  );
}

export default App;
