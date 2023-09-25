
import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
   
<Navbar title="Hironmoy"/>
<div className='container'>
<TextForm heading="what's on your mind"/>
<About/>
</div>

    </>
  );
}

export default App;