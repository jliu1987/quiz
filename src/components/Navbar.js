import React, { useState } from 'react';

function Navbar(props) {
    const [questionIndex, setQuestionIndex]=useState(0);
    const [answer, setAnswer]=useState(false);
    const [yourAnswer, setYourAnswer]=useState();
    function marking(yourAnswer){
         if(yourAnswer===props.questions[questionIndex].answer){
            document.getElementById('marking').innerHTML="Correct!!!";
        }else{
            document.getElementById('marking').innerHTML="Wrong! Try Again.";
        }
    }
    function clearMarking(){
        document.getElementById('marking').innerHTML='';
    }
    const goBack=()=>{
        setQuestionIndex(questionIndex-1);
        setAnswer(false); 
        setYourAnswer('Enter your answer');
        clearMarking();
    }
        
    const goToNext=()=>{
        setQuestionIndex(questionIndex+1);
        setAnswer(false);
        setYourAnswer('Enter your answer');
        clearMarking();
    }
    const showAnswer=()=>setAnswer(!answer);
    const submitHandler=(e)=>{
        e.preventDefault();
        marking(yourAnswer);

    };
    const onChangeHandler=(e)=>{
        setYourAnswer(e.target.value);
    }
    const onLastQuestionIndex=(questionIndex===props.questions.length-1);
    const onFirstQuestionIndex=(questionIndex===0);

  return (
    <div className='container'>
      <div className='qustion'>
      <h1 className='id'>Question #{questionIndex+1}</h1>
      <p className='questionContent'>{props.questions[questionIndex].prompt}</p><br></br>
      <form onSubmit={submitHandler}>
        <label for="yourAnswer">Enter your answer</label>
        <input id='yourAnswer' type='number' placeholder='Enter your answer' value={yourAnswer} onChange={onChangeHandler}></input>
        <button type='submit'>Submit</button>
      </form>
      <p>Your answer is :<span id='marking'></span></p>
      <p>Correct Answer is :<span hidden={!answer}>{props.questions[questionIndex].answer}</span></p>
      </div>
      <div className='buttons'>
       <button onClick={showAnswer}>{answer?"Hide Answer":"Show Answer"}</button>
       <button onClick={goBack} disabled={onFirstQuestionIndex}>Go Back</button>
       <button onClick={goToNext} disabled={onLastQuestionIndex}>Next Question</button>
      </div>
    </div>
  )
}

export default Navbar
