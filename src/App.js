import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {{color: "red", backgroundColor: "white", width: "100%"}}>i am a react person</h1>
        {/* component declaration */}
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
        <Test></Test>
      </header>
    </div>
  );
}

// ****dynamic content and style, component creation, return multiple html from a component****
const myObject = {
  name : "saeedullah azim",
  age : "22",
  versity : "AIUB"
}
// const myStyle = {
//   border: "4px solid grey",
//   margin: "5px",
//   borderRadius: "10px",
//   padding: "5px",
//   color: "orange"
// }

// component creation(first letter of component name must be in capital letter)
function Test() {  
  return (
    <div style = {{border: "4px solid grey", margin: "5px", borderRadius: "10px", padding: "5px", color: "orange"}}>
      <h1>name: {myObject.name}</h1>
      <h3>age: {myObject.age}</h3>
      <h3>versity: {myObject.versity}</h3>
    </div>
  )
}

export default App;
