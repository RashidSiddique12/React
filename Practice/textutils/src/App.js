// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <NavBar title="TextUtils" about="About"/>
    {/* <NavBar /> */}

    {/* TextForm */}
    <div className="container pt-5">
    <TextForm heading="Entre text in the box" />
    </div>
    
   </>
  );
}

export default App;
