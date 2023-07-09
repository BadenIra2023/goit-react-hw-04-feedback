import { useState } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import {Statistics} from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import {Section} from "./Section/Section"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 

const btns = ["good", "neutral", "bad"]
 const onLeaveFeedback = ({ target }) => {
   const btnName = target.name;
   switch (btnName) {
    case "good":
    setGood(good+1);
    break;

    case "neutral":
    setNeutral(neutral+1);
    break;

    case "bad":
    setBad(bad+1);
    break;

  default:  };

  };
 const countTotalFeedback = () => {
    return good + neutral + bad;
  }
 const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0)
      return 0;
    else {return Math.round(good/countTotalFeedback()*100) }
   };
    
    return ( 
    <div
      style={{
        margin: '0px auto' ,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        boxShadow: '0 0 10px #b4b3b3',
        backgroundColor: 'rgb(230, 231, 234)',
        width: '360px',
      }}
      >
    <Section title="Please leave feedback">
    < FeedBackOptions
            btns={btns} 
            clickFeedback={onLeaveFeedback} />
    </Section> 
    <Section title="Statistics">  
        {countTotalFeedback() !== 0 ? (
       
            < Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : (
            <Notification
              message={"There is no feedback"} />
          )}
          </Section>
      </div>
        )
     };
