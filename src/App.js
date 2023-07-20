import logo from './logo.svg';
import './App.scss';
import Counter from "./components/Counter/Counter";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path={"/Counter"} element={<Counter/>}/>
        <Route path={"/"} element={<Welcome/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
