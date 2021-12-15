import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import {todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";

function App() {
  let Todos = [
    {
      sno: 1,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 3,
      title: "Go to the working area",
      desc: "You need to go to the market to get this job done3"
    },
  ]
  return (
    <>
     <Header title ="My Todos List" searchBar={false}/>
     <Todos todos={todos}/>
     <Footer/>
    </>
  );
}

export default App;
