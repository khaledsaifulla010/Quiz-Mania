import { Link, useLocation } from "react-router-dom";
import useAllQuestions from "../../hooks/useAllQuestions";

const Result = () => {
  const [questions] = useAllQuestions();
  const location = useLocation();
  const finalScore = location.state?.finalScore || 0;
  const totalAttempts = location.state?.totalAttempts || 0;

  return (
    <div className="text-white mt-12">
      <h1 className="text-5xl font-bold text-center">Result</h1>

      <div className="border max-w-[800px] mx-auto p-8 rounded-md text-slate-300 space-y-4 mt-12">
        <div className=" flex items-center justify-between px-8 text-2xl font-bold">
          <span>UserName </span>
          <span>Daily Tuition </span>
        </div>
        <div className=" flex items-center justify-between px-8 text-xl font-bold">
          <span>Total Quiz Points : </span>
          <span>50 </span>
        </div>
        <div className=" flex items-center justify-between px-8 text-xl font-bold">
          <span>Total Questions : </span>
          <span>{questions.length} </span>
        </div>
        <div className=" flex items-center justify-between px-8 text-xl font-bold">
          <span>Total Attempts : </span>
          <span>{totalAttempts} </span>
        </div>
        <div className=" flex items-center justify-between px-8 text-xl font-bold">
          <span>Total Earn Points : </span>
          <span>{finalScore} </span>
        </div>
        <div className=" flex items-center justify-between px-8 text-xl font-bold">
          <span>Quiz Result </span>
          <span>Passed </span>
        </div>
      </div>
      {/* Restart */}
      <div className="mt-6">
        <Link
          to={"/"}
          className="p-2 border bg-blue-500 text-white rounded-md border-blue-500 font-bold text-lg w-32 text-center ml-[720px] "
        >
          Restart Quiz
        </Link>
      </div>
    </div>
  );
};

export default Result;
