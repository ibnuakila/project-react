import logo from './logo.svg';
import './App.css';
import Profile from './Gallery.jsx';
import { Picture } from './Gallery.jsx';

function greeting(){
  return "a greeting from react page";
}

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>{greeting()}</p>
      <Picture></Picture>
      <Profile name="Jane Doe" email="jane@gmail.com" ></Profile>
    </div>    
  );
}

export default App;
