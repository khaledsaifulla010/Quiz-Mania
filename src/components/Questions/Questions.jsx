import { useState } from "react";
import useAllQuestions from "../../hooks/useAllQuestions";

const Questions = () => {
  const [checked, setChecked] = useState();

  const [questions] = useAllQuestions(null);
  console.log(questions);

  const handleSelect = (option) => {
    setChecked(option);
  };

  return (
    <div>
      <div>
        {questions ? (
          <div className="mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <span className="border border-cyan-700 flex items-center justify-center text-2xl font-bold w-10 h-10 rounded-full">
                {questions.id}
              </span>
              {questions.question}
            </h2>
            {questions.options && (
              <ul className="ml-8 mt-4 space-y-2">
                {Object.entries(questions.options).map(([key, value]) => (
                  <li key={key} className="flex items-center gap-2">
                    <input
                      className="w-[16px] h-[16px] scale-150 accent-green-500"
                      type="radio"
                      name="question"
                      id={`q1-option-${key}`}
                      checked={checked === key}
                      onChange={() => handleSelect(key)}
                    />
                    <label
                      htmlFor={`q1-option-${key}`}
                      className="text-xl font-semibold"
                    >
                      {value}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <p>Loading question...</p>
        )}
      </div>
    </div>
  );
};

export default Questions;
