import { useEffect } from "react";

const Countdown = ({ handleNext, currentIndex, timeLeft, setTimeLeft }) => {
  // Countdown Timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleNext();
    }
  }, [timeLeft]);
  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(30);
  }, [currentIndex]);
  return (
    <div>
      <h1 className="text-center border border-green-600 p-2 w-12 h-12 bg-green-600 font-bold rounded-full mt-2 text-3xl">
        {timeLeft}
      </h1>
    </div>
  );
};

export default Countdown;
