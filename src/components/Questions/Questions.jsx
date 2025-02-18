import { useEffect, useState } from "react";

const Questions = () => {
  const [checked, setChecked] = useState();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data[0]);
      });
  }, []);
  console.log(question);

  const handleSelect = () => {
    console.log("Select");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Quiz Question</h1>
      {question ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            {question.id}. {question.question}
          </h2>
          {question.options && (
            <ul className="ml-8 mt-2">
              {Object.entries(question.options).map(([key, value]) => (
                <li key={key} className="flex items-center gap-2">
                  <input
                    className="w-[12px] h-[12px] scale-150"
                    type="radio"
                    name="question"
                    id={`q1-option-${key}`}
                    onChange={() => handleSelect(key)}
                  />
                  <label htmlFor={`q1-option-${key}`} className="text-lg">
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
  );
};

export default Questions;
