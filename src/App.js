import './App.css';
import ShowHideTitle from './component/Easy/ShowHideTitle';
import TimerOrStopWatch from './component/Easy/TimerOrStopWatch';
import Todo from './component/Easy/Todo';
import ProgressBar from './component/medium/ProgressBar';

function App() {
  return (
    <div className="App">
      <ShowHideTitle />
      <TimerOrStopWatch />
      <ProgressBar />
      <Todo />
    </div>
  );
}

export default App;
