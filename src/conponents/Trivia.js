import React, { useEffect } from "react";
import {useState} from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"


export default function Trivia({
    data,
    setStop,
    questionNumber,
    setQuestionNumber,
}) { 
    //UseState use to setQuestion
    const [question,setQuestion] = useState(null);

    //UseState to Select Answer
    const [selectedAnswer,setSelectedAnswer]=useState(null);

    //UseSate for active answer selected
    const [className,setClassName]=useState("answer");

    //to use sound for starting the game
    const[letsPlay]= useSound(play);

    //use sound for correcr answer
    const[correctAnswer]= useSound(correct);

    //use sound for wrong answer
    const[wrongAnswer]= useSound(wrong);



    useEffect(() => {
        letsPlay();

    }, [letsPlay]);




    useEffect(()=>{

        //use questionNumber - 1 because array start by 0  
        setQuestion(data[questionNumber - 1]);
    }, [data,questionNumber]);

        //Stop the Animation for the next Question and initiate the next question if answer correct
        const delay = (duration,callback) =>{

            setTimeout(() => {
                callback();

            },duration);

        };

        // "a" it's selected answer 
        const handleClick = (a) =>{

            setSelectedAnswer(a);
            setClassName("answer active");

            //3000 means 3s before showing if answer correct or wrong 
            delay(3000,() =>
                 setClassName(a.correct ? "answer correct" : "answer wrong")
            );

            //6000 it's 6s because animation 3s to show to answer to 6s to initialize next questions

            delay(5000,() =>{

                //correctAnswer it's too implement the sound for correct question 
                if(a.correct){
                    correctAnswer();

                    //to make a delay between music of correct answer and next question
                    delay(1000,()=>{
                        setQuestionNumber((prev) => prev +1);
                        setSelectedAnswer(null); 
                    }) 
                    
                } 

                else{
                    //to make a delay between music of wrong answer and Money Earned
                    wrongAnswer();
                    delay(1000,() =>{
                        setStop(true);
                    });
                   
                }
            });

        };

    return(
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers"> 
                
                {question?.answers.map((a) => ( //inster the ? gonna check if there is question of not and then gonna mark is Answers

                    <div className={selectedAnswer === a ? className:"answer"} onClick={() => handleClick(a)}>
                        {a.text}
                    </div>

                ))}
            </div>

        </div>
    );
}