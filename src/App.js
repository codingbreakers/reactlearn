// import logo from './logo.svg';
// import './App.css';
import Navbaar from './Navbaar';
import Jumbo from './Jumbo'
import './Style.css';
import Strips from './Strips';
// import Footer from './Footer';
function App() {
  return (
    <>
    <Navbaar brand='Creative' service='Service'  button=' Schedule a Class' project='Project' about='About'></Navbaar>
    <Jumbo>
    </Jumbo>
    <Strips></Strips>
    {/* <Footer></Footer> */}
  
    </>

  );
}

export default App;
