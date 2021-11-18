import"./app.css";
import {useEffect, useState,useMemo} from "react";
import Trivia from "./conponents/Trivia";
import Timer from "./conponents/Timer";
import Start from "./conponents/Start";

 
 function App(){ 
   
   // if we match this question with Id.amount make it active 
  const [questionNumber,setQuestionNumber] = useState(1);

  // setting Stop useState , so when time over user lost
  const [stop,setStop] = useState(false);

  //setting earned to tell you value after losing or finish the game
  const [earned,setEarned] = useState("$ 0");

  //set username
  const [username,setUsername] = useState(null);

  // create data for Questions
  const data=[
      {
        id:1,
        question:"Rolex is a company that specialize in what type of products?",
        answers:[
          {
            text:"Phone",
            correct:false,
          },
          {
            text:"Watches",
            correct:true,
          },
          {
            text:"Computers",
            correct:false,
          },
          {
            text:"Magasine",
            correct:false,
          },
          
        ],
      },
      {
        id: 2,
        question: "When did the website Facebook  launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
      },
      {
        id: 3,
        question: "Who played the character of harry potter in movie?",
        answers: [
          {
            text: "Johnny Deep",
            correct: false,
          },
          {
            text: "Leonardo Di Caprio",
            correct: false,
          },
          {
            text: "Denzel Washington",
            correct: false,
          },
          {
            text: "Daniel Red Cliff",
            correct: true,
          },
        ],
      },

      {
        id: 4,
        question: "Which of those Africa country speak French?",
        answers: [
          {
            text: "Ivory Coast",
            correct: true,
          },
          {
            text: "Ghana",
            correct: false,
          },
          {
            text: "Gambia",
            correct: false,
          },
          {
            text: "South Africa",
            correct: false,
          },
        ],
      },
      {
        id: 5,
        question: "When the Queen Elizabeth II was born?",
        answers: [
          {
            text: "1936",
            correct: false,
          },
          {
            text: "1928",
            correct: false,
          },
          {
            text: "1926",
            correct: true,
          },
          {
            text: "1938",
            correct: false,
          },
        ],
      },
      {
        id: 6,
        question: " What is SHIBA INU ?",
        answers: [
          {
            text: "Dog",
            correct: false,
          },
          {
            text: "Cryptocurrency coin",
            correct: false,
          },
          {
            text: "Cryptocurrency Tokens",
            correct: true,
          },
          {
            text: "currency",
            correct: false,
          },
        ],
      },

      {
        id: 7,
        question: "When I was 6 my sister was half my age .Now I'm 70 how old is my sister?",
        answers: [
          {
            text: "30",
            correct: false,
          },
          {
            text: "57",
            correct: false,
          },
          {
            text: "27",
            correct: false,
          },
          {
            text: "67",
            correct: true,
          },
        ],
      },
      {
        id: 8,
        question: "Which country is the biggest ?",
        answers: [
          {
            text: "Germany",
            correct: false,
          },
          {
            text: "Unied States",
            correct: false,
          },
          {
            text: "Mangolia",
            correct: true,
          },
          {
            text: "Ethiopia",
            correct: false,
          },
        ],
      },
      {
        id: 9,
        question: "Water H2O is formed with which substances?",
        answers: [
          {
            text: "Oxygen + Nitrogen",
            correct: false,
          },
          {
            text: "Hydrogen + Carbpn",
            correct: false,
          },
          {
            text: "Nitrogen + Hydrogen",
            correct: false,
          },
          {
            text: "Oxygen + Hydrogen",
            correct: true,
          },
        ],
      },
      {
        id: 10,
        question: "When was the First World War?",
        answers: [
          {
            text: "May.1916",
            correct: false,
          },
          {
            text: "May.1911",
            correct: false,
          },
          {
            text: "July.1911",
            correct: false,
          },
          {
            text: "May.1914",
            correct: true,
          },
        ],
      },
      {
        id: 11,
        question: "the slogan <Open Happiness> it's for which brand?",
        answers: [
          {
            text: "Samsung",
            correct: false,
          },
          {
            text: "Ikea",
            correct: false,
          },
          {
            text: "Coca-Cola!",
            correct: true,
          },
          {
            text: "Gucci",
            correct: false,
          },
        ],
      },
      {
        id: 12,
        question: "Who painted Lady with an Ermin?",
        answers: [
          {
            text: "Leonardo da Vinci",
            correct: true,
          },
          {
            text: "Picasso",
            correct: false,
          },
          {
            text: "Franck-Dubois",
            correct: false,
          },
          {
            text: "Rembrandt",
            correct: false,
          },
        ],
      },
      {
        id: 13,
        question: "How many country in Africa?",
        answers: [
          {
            text: "54",
            correct: true,
          },
          {
            text: "50",
            correct: false,
          },
          {
            text: "37",
            correct: false,
          },
          {
            text: "40",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: "In One Years one many months have 28 days?",
        answers: [
          {
            text: "1",
            correct: false,
          },
          {
            text: "12",
            correct: true,
          },
          {
            text: "2",
            correct: false,
          },
          {
            text: "0",
            correct: false,
          },
        ],
      },
      {
        id: 15,
        question: "Which country Went to Mars First?",
        answers: [
          {
            text: "India",
            correct: true,
          },
          {
            text: "United Stated",
            correct: false,
          },
          {
            text: "China",
            correct: false,
          },
          {
            text: "Russia",
            correct: false,
          },
        ],
      },
      
  ];
  // creating Array for Amount 
  // Memo will makes avoid any performance issue , [] don't have depencies "Array", value it's fixed

  const moneyPyramid= useMemo(() =>

    [
      {id:1,amount:"$ 100"},
      {id:2,amount:"$ 200"},
      {id:3,amount:"$ 300"},
      {id:4,amount:"$ 500"},
      {id:5,amount:"$ 1000"},
      {id:6,amount:"$ 2000"},
      {id:7,amount:"$ 4000"},
      {id:8,amount:"$ 8000"},
      {id:9,amount:"$ 16000"},
      {id:10,amount:"$ 32000"},
      {id:11,amount:"$ 64000"},
      {id:12,amount:"$ 125000"},
      {id:13,amount:"$ 250000"},
      {id:14,amount:"$ 500000"},
      {id:15,amount:"$ 1000000"},
    ].reverse(),
  []);
 // reverse  because start by 100-1000000 we want the invest , r

  //fucnction show munch we earned
  useEffect(() =>{
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  },[moneyPyramid,questionNumber]);

  return (

  <div className="app">
    
    {username ? (
      <>
      
    <div className="main">  
    
    {stop ? (
       <h1 className="endText">You earned:{earned}</h1>  
   ) : (
<> 
   <div className="top">
     <div className="timer">
       <Timer setStop={setStop} questionNumber={questionNumber}/>
     </div>
   </div>

   <div className="bottom">

     <Trivia
       data={data}
       setStop={setStop}
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
     
     />
   </div>
</> //we are using this because we are using many components

        )}

 </div>

 <div className="pyramid">

   <ul className="moneyList">
       {moneyPyramid.map((m) => (
       <li className={questionNumber === m.id ? "moneyListItem active" :"moneyListItem"}>
         <span className="moneyListItemNumber">{m.id} </span>
         <span className="moneyListItemAmount">{m.amount}</span>
       </li>
       ))}
    </ul>
 </div>
      </>

    ) : <Start setUsername={setUsername}/>}
    
  </div>
  );
}
export default App;