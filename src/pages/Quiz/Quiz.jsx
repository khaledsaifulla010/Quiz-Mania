import { useState } from "react";
import Questions from "../../components/Questions/Questions";
import useAllQuestions from "../../hooks/useAllQuestions";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import Countdown from "../../components/Countdown/Countdown";

const Quiz = () => {
  const [questions] = useAllQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswerStatus(null);
      setTimeLeft(30);
    }
  };
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswerStatus(null);
      setTimeLeft(30);
    }
  };

  // Function to update the selected answer for a question
  const handleAnswerSelection = (questionId, answer) => {
    if (!selectedAnswers[questionId]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));

      // Check if the answer is correct
      const correctAnswer = questions.find((q) => q.id === questionId).answer;
      if (answer == correctAnswer) {
        setAnswerStatus({ status: "correct" });
      } else {
        setAnswerStatus({ status: "wrong", correctAnswer });
      }
    }
  };

  return (
    <div className="text-white">
      <h1 className="mt-16 font-bold text-5xl text-center">Quiz Mania</h1>
      <div className="mt-12 border max-w-[1000px]  mx-auto rounded-md">
        <div className="flex items-center justify-between">
          <h1 className=" ml-1  mt-1.5 text-lg font-bold text-center  bg-pink-100 text-pink-600 border-pink-300 w-[70px] h-7  border  rounded-md">
            {currentIndex + 1} of {questions.length}{" "}
          </h1>
          <div className="px-2">
            <Countdown
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              handleNext={handleNext}
              currentIndex={currentIndex}
            ></Countdown>
          </div>
        </div>
        {/* Pass the Current Question */}
        <div className="px-12 mt-8">
          {questions.length > 0 && (
            <Questions
              question={questions[currentIndex]}
              selectedAnswer={
                selectedAnswers[questions[currentIndex].id] || null
              }
              onAnswerSelect={handleAnswerSelection}
            />
          )}
        </div>
        {/* Show feedback on answer selection */}
        {answerStatus && (
          <p className="text-center text-xl font-bold mt-6 flex items-center justify-center gap-2">
            {answerStatus.status === "correct" ? (
              <>
                <TiTick className="text-green-500 text-3xl" />
                <span className="text-green-500">Your answer is correct!</span>
              </>
            ) : (
              <>
                <ImCross className="text-red-500 text-2xl" />
                <span className="text-red-500">
                  Your answer is wrong.{" "}
                  <span className="text-green-500">
                    Correct answer is : ( {answerStatus.correctAnswer} )
                  </span>
                </span>
              </>
            )}
          </p>
        )}

        {/* Previous & Next Button */}
        <div className="mt-16 mb-4 flex items-center justify-between px-8">
          {currentIndex === 0 ? (
            <Link
              to={"/"}
              className="p-2 border bg-green-500 text-white rounded-md border-green-500 font-bold text-lg w-28 text-center"
            >
              Home
            </Link>
          ) : (
            <button
              onClick={handlePrevious}
              className="p-2 border bg-orange-500 text-white rounded-md border-orange-500 font-bold text-lg w-28 text-center"
            >
              Previous
            </button>
          )}

          {currentIndex === questions.length - 1 ? (
            <Link
              to={"/result"}
              className="p-2 border bg-green-500 text-white rounded-md border-green-500 font-bold text-lg w-28 text-center"
            >
              Result
            </Link>
          ) : (
            <button
              onClick={handleNext}
              className="p-2 border bg-purple-500 text-white rounded-md border-purple-500 font-bold text-lg w-28 text-center"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
