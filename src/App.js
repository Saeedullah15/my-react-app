import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = ["jafor", "badrul", "amir", "khan"];
  const products = [
    {name:"photoshop", price:"$253"},
    {name:"illustrator", price:"$187"},
    {name:"adobe effects", price:"$698"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1 style = {{color: "red", backgroundColor: "white", width: "100%"}}>i am a react person</h1>
        <Users></Users>
        <Count></Count>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Test name = {names[0]} age = "25" versity = "brac"></Test>
        <Test name = {names[1]} age = "46" versity = "nsu"></Test>
        <Test name = "rahim" age = "35" versity = "iub"></Test>
        <Test name = "jabbar" age = "27" versity = "aiub"></Test>
      </header>
    </div>
  );
}

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div>
      <h1>dynamic users : {user.length}</h1>
      <ul>
        {
          user.map(user => <li>{user.name} - {user.id}</li>)
        }
      </ul>
    </div>
  )
}

function Count() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick = {handleIncrease}>increase</button>
      <button onClick = {() => setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Product(props) {
  const style = {
    border: "2px solid cyan",
    borderRadius: "5px",
    height: "250px",
    width: "400px",
    backgroundColor: "tomato",
    margin: "5px"
  }
  const {name, price} = props.product;
  return(
    <div style = {style}>
      <h3>{name}</h3>
      <h1>{price}</h1>
      <button>buy now</button>
    </div>
  )
}

function Test(props) {
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
  return (
    <div style = {{border: "4px solid grey", margin: "5px", borderRadius: "10px", padding: "5px", color: "orange"}}>
      <h1>name: {props.name} </h1>
      <h3>age: {props.age}</h3>
      <h3>versity: {props.versity} </h3>
    </div>
  )
}

export default App;
