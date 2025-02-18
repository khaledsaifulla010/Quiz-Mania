import { useState } from "react";

const Questions = ({ question }) => {
  const [checked, setChecked] = useState(null);

  return (
    <div>
      <h2 className="text-3xl font-bold flex items-center gap-2">
        {question.id}.{question.question}
      </h2>
      {question.options && (
        <ul className="ml-8 mt-4 space-y-2">
          {Object.entries(question.options).map(([key, value]) => (
            <li key={key} className="flex items-center gap-2">
              <input
                className="w-[16px] h-[16px] scale-150 accent-green-500"
                type="radio"
                name="question"
                id={`q1-option-${key}`}
                checked={checked === key}
                onChange={() => setChecked(key)}
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
  );
};

export default Questions;
