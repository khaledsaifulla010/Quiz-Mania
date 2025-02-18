import Questions from "../../components/Questions/Questions";

const Quiz = () => {
  const handlePrevious = () => {
    console.log("Previous Quiz");
  };
  const handleNext = () => {
    console.log("Next Quiz");
  };

  return (
    <div className="text-white">
      <h1 className="mt-8 ml-4 font-bold text-3xl">
        Give Quiz Answer Carefully!
      </h1>
      {/* All Quiz Questions */}
      <div className="mt-12">
        <Questions></Questions>
      </div>

      {/* Previous & Next Button */}
      <div className="mt-8 flex items-center gap-8">
        <button
          onClick={handlePrevious}
          className="p-2 border bg-orange-500 text-white rounded-md border-orange-500 font-bold text-lg w-28 text-center"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="p-2 border bg-purple-500 text-white rounded-md border-purple-500 font-bold text-lg w-28 text-center"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
