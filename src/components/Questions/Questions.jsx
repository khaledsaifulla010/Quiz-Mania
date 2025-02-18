import { useState, useEffect } from "react";

const Questions = ({ question, selectedAnswer, onAnswerSelect }) => {
  const [inputValue, setInputValue] = useState("");

  // Reset input field when a new question loads
  useEffect(() => {
    setInputValue(""); // Clear input when question changes
  }, [question.id]);

  // Handle change for input-based answers (only allows numbers)
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only numeric input
      setInputValue(value);
      onAnswerSelect(question.id, value);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold flex items-center gap-2">
        {question.id}. {question.question}
      </h2>

      {/* Multiple Choice Options */}
      {question.options ? (
        <ul className="ml-8 mt-4 space-y-2">
          {Object.entries(question.options).map(([key, value]) => (
            <li key={key} className="flex items-center gap-2">
              <input
                className="w-[16px] h-[16px] scale-150 accent-green-500"
                type="radio"
                name={`question-${question.id}`}
                id={`q${question.id}-option-${key}`}
                checked={selectedAnswer === key}
                onChange={() => onAnswerSelect(question.id, key)}
              />
              <label
                htmlFor={`q${question.id}-option-${key}`}
                className="text-xl font-semibold"
              >
                {value}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        // Input Field for Numeric Answers
        <div className="ml-8 mt-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="border-none border-b-2 border-gray-500 text-xl font-semibold p-1 w-52 outline-none bg-transparent text-center"
            placeholder="Write your answer here"
          />
          <p className="ml-1 -mt-4"> -------------------------------------</p>
        </div>
      )}
    </div>
  );
};

export default Questions;
