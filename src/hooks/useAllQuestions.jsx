import { useEffect, useState } from "react";

const useAllQuestions = () => {
  const [questions, setQuestion] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data[0]);
      });
  }, []);
  return [questions];
};

export default useAllQuestions;
