import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";

const Questions = ({ question, selectedAnswer, onAnswerSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset input field when a new question loads
  useEffect(() => {
    setInputValue("");
    setIsSubmitted(false);
  }, [question.id]);

  // Handle change for input-based answers (only allows numbers)
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  // Handle answer submission
  const handleSubmit = () => {
    if (inputValue !== "") {
      onAnswerSelect(question.id, inputValue); // Pass the answer
      setIsSubmitted(true); // Mark as submitted
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
                className={`text-xl font-semibold ${
                  selectedAnswer ? "opacity-50" : ""
                }`}
              >
                <span className="ml-4">
                  {key} . {value}
                </span>
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
            className="border-none border-b-2 border-gray-500 text-xl font-semibold p-1 w-54 outline-none bg-transparent text-center"
            placeholder="Write your answer here"
          />
          <div className="flex items-center gap-4">
            <p className="ml-1 -mt-4">
              {" "}
              ---------------------------------------
            </p>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="-mt-8 px-1 py-1 bg-blue-500 text-white font-bold rounded-md"
            >
              <TiTick />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
