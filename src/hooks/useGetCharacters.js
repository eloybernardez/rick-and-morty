import { useEffect, useState } from "react";
import useIntersection from "./useIntersection";

const useGetCharacters = (url) => {
  const [newCharacters, setNewCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(url);
  const { isIntersecting } = useIntersection();

  useEffect(() => {
    try {
      fetch(nextPage)
        .then((response) => response.json())
        .then((data) => {
          setNewCharacters([...newCharacters, ...data.results]);
          setNextPage(data.info.next);
        });
    } catch (error) {
      console.error(error);
    }
  }, [url, isIntersecting]);

  return { newCharacters };
};

export default useGetCharacters;
