import { useEffect, useState } from "react";
import useIntersection from "./useIntersection";

const useGetCharacters = (url) => {
  const [newCharacters, setNewCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(url);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isIntersecting } = useIntersection();

  const handleLoading = (state) => {
    setLoading(state);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    handleLoading(true);
    try {
      fetch(nextPage)
        .then((response) => response.json())
        .then((data) => {
          setNewCharacters([...newCharacters, ...data.results]);
          setNextPage(data.info.next);
          handleLoading(false);
        });
    } catch (error) {
      handleError();
    }
  }, [url, isIntersecting]);

  return { newCharacters, error, loading };
};

export default useGetCharacters;
