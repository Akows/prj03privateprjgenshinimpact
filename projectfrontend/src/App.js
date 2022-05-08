import './App.css';
import Appbar from './components/Appbar';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Mainpage>
        <h1>메인 화면입니다.</h1>
        <p>홈페이지의 가장 첫 화면입니다.</p>
      </Mainpage>
    </div>
  );
}

export default App;
