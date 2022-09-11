import { useEffect, useState } from "react";
import useIntersection from "./useIntersection";

const API = "https://rickandmortyapi.com/api/character";

const useGetCharacters = () => {
  const [newCharacters, setNewCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(API);
  const { isIntersecting } = useIntersection();

  useEffect(() => {
    try {
      fetch(nextPage)
        .then((res) => res.json())
        .then((data) => {
          setNewCharacters([...newCharacters, ...data.results]);
          setNextPage(data.info.next);
        });
    } catch (error) {
      console.error(error);
    }
  }, [isIntersecting]);

  return { newCharacters };
};

export default useGetCharacters;
