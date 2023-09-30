import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';

function App() {
  return (
    <>
       {/* <Navbar title="TextUtil" link="about"/> */}
       <Navbar />
       <div className="container">
       <Textarea heading="Enter Details"/>
      </div>
    </>
    
  );
}

export default App;
