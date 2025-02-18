const Main = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-24 text-white">
        Quiz Mania
      </h1>
      {/* Instruction Card */}
      <div className="card card-border bg-blue-100 max-w-[800px] mx-auto mt-12">
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
    </div>
  );
};

export default Main;
