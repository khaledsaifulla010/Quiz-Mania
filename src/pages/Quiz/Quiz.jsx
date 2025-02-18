import { useState } from "react";
import Questions from "../../components/Questions/Questions";
import useAllQuestions from "../../hooks/useAllQuestions";

const Quiz = () => {
  const [questions] = useAllQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="text-white">
      <h1 className="mt-16 font-bold text-5xl text-center">Quiz Mania</h1>
      <div className="mt-12 border max-w-[1000px]  mx-auto rounded-md">
        {/* Pass the Current Question */}
        <div className="px-12 mt-8">
          {questions.length > 0 && (
            <Questions question={questions[currentIndex]} />
          )}
        </div>

        {/* Previous & Next Button */}
        <div className="mt-16 mb-4 flex items-center justify-between px-8">
          <button
            onClick={handlePrevious}
            className="p-2 border bg-orange-500 text-white rounded-md border-orange-500 font-bold text-lg w-28 text-center"
            disabled={currentIndex === 0} // Disable at first question
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="p-2 border bg-purple-500 text-white rounded-md border-purple-500 font-bold text-lg w-28 text-center"
            disabled={currentIndex === questions.length - 1} // Disable at last question
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
