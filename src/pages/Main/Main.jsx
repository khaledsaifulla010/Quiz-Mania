import { useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-12 text-white">
        Quiz Mania
      </h1>
      {/* Instruction Card */}
      <div className="card card-border bg-blue-100 max-w-[800px] mx-auto mt-8">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-red-500">Instructions</h2>
          <div className="font-semibold text-xl">
            <ol>
              <li>
                *** For multiple-choice questions, select the one best answer
                (A, B, C, or D).***
              </li>
              <li>*** You have 30 minutes to complete this quiz.***</li>
              <li>*** No calculators unless specified.***</li>
              <li>
                *** For integer-type questions, write your numerical answer
                clearly.***
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Username Form */}
      <div className="flex items-center gap-2">
        <form>
          <input
            required
            className="bg-white p-2 w-[300px] h-12 rounded-md mt-12 ml-[570px]"
            ref={inputRef}
            type="text"
            placeholder="Enter Your UserName Please"
          />
        </form>
        <Link
          to={"/quiz"}
          className="p-2 w-32 text-center text-xl border border-green-500 bg-green-500 text-white rounded-md mt-12 font-bold"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
