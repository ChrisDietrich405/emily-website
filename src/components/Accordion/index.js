import React, {useState} from "react";

const Accordion = ({ questions }) => {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <div>
      {questions.map((question) => {
        return (
          <div>
            <h3 onClick={() => setShowInfo(!showInfo)}>{question.question}</h3>
            {showInfo && <p>{question.answer}</p> }
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
