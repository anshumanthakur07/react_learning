import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import About from './component/About';
// import About from './component/About';

function App() {
  return (
    <>
       {/* <Navbar title="TextUtil" link="about"/> */}
       <Navbar />
       <div className="container">
      <About/>
       <Textarea heading="Enter Details"/>
       

      </div>
    </>
    
  );
}

export default App;
